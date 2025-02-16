"use client";
import React, { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "../../styles/ServicePreviewCarousel.module.css";

const AnimatedImg = animated.img as unknown as React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
>;

interface ServicePreviewCarouselProps {
  images: string[];
  interval?: number;
}

const ServicePreviewCarousel: React.FC<ServicePreviewCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className={styles.carouselWrapper}>
      {transitions((style, i) => (
        <AnimatedImg
          style={style as unknown as React.CSSProperties}
          src={images[i]}
          alt={`Preview ${i + 1}`}
          className={styles.previewImage}
        />
      ))}
    </div>
  );
};

export default ServicePreviewCarousel;
