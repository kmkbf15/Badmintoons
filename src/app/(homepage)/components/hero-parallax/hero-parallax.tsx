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
import { highlightPhotos } from "./highlight-photos";

export const HeroParallax = () => {
  const firstRow = highlightPhotos.slice(0, 5);
  const secondRow = highlightPhotos.slice(5, 10);
  const thirdRow = highlightPhotos.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 1000, damping: 50, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.9], [-50, 2500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.9], [50, -2500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.15, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [-250, 50]),
    springConfig
  );

  // const Header = () => {
  //   return (
  //     <div className="relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
  //       <h1 className="text-2xl font-bold">Badmintoons</h1>
  //       <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
  //         We build beautiful highlightPhotos with the latest technologies and
  //         frameworks. We are a team of passionate developers and designers that
  //         love to build amazing highlightPhotos.
  //       </p>
  //     </div>
  //   );
  // };

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
        className="group/product h-72 aspect-[2/3] relative shrink-0"
      >
        <div className="block group-hover/product:shadow-2xl ">
          <Image
            src={photo}
            className="object-cover object-left-top absolute h-full w-full inset-0"
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
      className="h-[200vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="relative mx-auto py-[20vh] px-4 w-full left-0 top-0">
        <p className="text-2xl font-bold text-text-color-100">Badmintoons</p>
        <p className="text-base font-semibold text-text-color-80">
          We build beautiful highlightPhotos with the latest technologies and
          frameworks. We are a team of passionate developers and designers that
          love to build amazing highlightPhotos.
        </p>
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
        <motion.div className="flex flex-row-reverse space-x-reverse gap-10 mb-10">
          {firstRow.map((photo, index) => (
            <ProductCard photo={photo} translate={translateX} key={index} />
          ))}
        </motion.div>

        {/* baris 2 */}
        <motion.div className="flex flex-row mb-10 gap-10 ">
          {secondRow.map((photo, index) => (
            <ProductCard
              photo={photo}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>

        {/* baris 3 */}
        <motion.div className="flex flex-row-reverse space-x-reverse gap-10">
          {thirdRow.map((photo, index) => (
            <ProductCard photo={photo} translate={translateX} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
