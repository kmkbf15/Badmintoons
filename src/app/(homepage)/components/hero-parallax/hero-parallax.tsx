"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "@/app/components/ui/Image";
import { useQuery } from "@tanstack/react-query";
import {
  fetchHeroParallaxImages,
  HeroImagesType,
} from "@/lib/hero-parallax-images/hero-parallax-images";

export const HeroParallax = ({
  heroPhotos,
}: {
  heroPhotos: HeroImagesType[];
}) => {
  const firstRow = heroPhotos.slice(0, 10);
  const secondRow = heroPhotos.slice(5, 15);
  const thirdRow = heroPhotos.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 1000, damping: 50, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 1500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -1500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [0.05, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [-250, 50]),
    springConfig
  );

  const ProductCard = ({
    photo,
    translate,
  }: {
    photo: string;
    translate: MotionValue<number>;
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={photo}
        className="group/product h-40 aspect-[2/3] relative shrink-0"
      >
        <div className="block group-hover/product:shadow-2xl ">
          <Image
            src={photo}
            className="object-cover object-left-top absolute h-full w-full inset-0 rounded-sm"
            alt={photo}
          />
        </div>
        {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100">
          {product.title}
        </h2> */}
      </motion.div>
    );
  };

  return (
    <div
      ref={ref}
      className="h-[150vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="relative mx-auto px-4 w-full left-0 top-0">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-4xl text-main-color-100">MVPs</p>
          <div className="w-full px-4 grid grid-cols-2 gap-4">
            <Image
              src=""
              alt="King"
              className="w-full object-cover aspect-auto"
            />
            <Image
              src=""
              alt="Queen"
              className="w-full object-cover aspect-auto"
            />
          </div>
        </div>
        <p className="text-2xl font-bold text-text-color-100">Badmintoons</p>
        <div className="text-base font-semibold text-text-color-80">
          <p>📅 Every Sunday</p>
          <p>🕙 10:00AM – 12:00PM</p>
          <p>📍 @SKY Badminton Sport</p>
          <p>👫 Newbie - Beginner (All Gender)</p>
          <p>🎯 21 points/set (1 set per game)</p>
          <p>🧭 Hosting 2-4 court (7 players per court)</p>
          <p>
            💸 IDR <span>45.000</span>/pax (Shuttlecock included)
          </p>
          <p>
            🏦 BCA: 7880736773 (BCA an{" "}
            <span className="font-bold">Cecilia Angelina C</span>)
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>MVPs</p>
        <div className="flex gap-4">
          <div>
            <p>KING</p>
          </div>
          <div>
            <p>QUEEN</p>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* baris 1 */}
        <motion.div className="flex flex-row-reverse space-x-reverse gap-5 mb-5">
          {firstRow.map((heroPhoto, index: number) => (
            <ProductCard
              photo={heroPhoto.image}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>

        {/* baris 2 */}
        <motion.div className="flex flex-row mb-10 gap-5 ">
          {secondRow.map((heroPhoto, index: number) => (
            <ProductCard
              photo={heroPhoto.image}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>

        {/* baris 3 */}
        {/* <motion.div className="flex flex-row-reverse space-x-reverse gap-10">
          {thirdRow.map((photo, index) => (
            <ProductCard photo={photo} translate={translateX} key={index} />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};
