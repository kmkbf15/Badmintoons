import React from "react";
import { HeroParallax } from "./components/hero-parallax/hero-parallax";
import { fetchHeroParallaxImages } from "@/lib/hero-parallax-images/hero-parallax-images";

export default async function Homepage() {
  const heroPhotos = await fetchHeroParallaxImages();

  return (
    <div>
      <HeroParallax heroPhotos={heroPhotos} />
    </div>
  );
}
