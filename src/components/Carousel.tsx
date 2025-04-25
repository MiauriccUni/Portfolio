import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container center text-center" id="carousel">
      <button onClick={prevSlide} id="buttonCV">
        ❮
      </button>
      <img
        id="imagecarousel"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button onClick={nextSlide} id="buttonCV">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
