import { apiRequest } from "../api-request";

export interface HeroImagesType {
  id: number;
  image: string;
  created_at: string;
}

export const fetchHeroParallaxImages = async () => {
  try {
    const res = await apiRequest({ endpoint: "/hero-parallax" });
    return res;
  } catch (error) {
    throw error;
  }
};
