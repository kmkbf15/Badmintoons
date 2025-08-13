"use client";
import React, {
  useState,
  ImgHTMLAttributes,
  useCallback,
  useEffect,
} from "react";

interface ImageWithFallbackProps {
  fallbackSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  src: string;
}
const Image: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = "https://toco-img.azureedge.net/static/assets/broken_image.png",
  alt,
  width,
  height,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState<boolean>(false);

  // useEffect(() => {
  //   setImgSrc(src);
  // }, [src]);
  // const handleError = useCallback(() => {
  //   if (fallbackSrc) setImgSrc(fallbackSrc);
  // }, [fallbackSrc]);

  useEffect(() => {
    setImgSrc(src);
    setError(false); // Reset error state when src changes
  }, [src]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc(fallbackSrc); // Set fallback source only if not already in error state
    }
  };

  return (
    <img
      {...rest}
      src={imgSrc ? imgSrc : fallbackSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default Image;
