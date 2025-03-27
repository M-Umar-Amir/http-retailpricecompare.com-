"use client";

import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0576/9579/7455/files/L_Oreal_Skincare_Winter_Fvt_Web_74ec6d12-5308-4022-9d11-b5ddf89050a6.png?v=1737122517",
    "https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Maybelline_Jan_Banner_web.png?v=1736149062",
    "https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Glow_Goals_KV_Banner_Web.png?v=1737535322",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="relative bg-white">
      <div className="overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className=" h-[300px] sm:h-[700px] sm:w-50 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
