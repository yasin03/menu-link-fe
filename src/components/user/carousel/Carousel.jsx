"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1536236397240-9b229a37a286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1557079790-14cec130c267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=846&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goSlide = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div className=" max-w-screen h-screen w-full  relative group">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block  absolute top-[50%] left-5 text-2xl rounded-full p-2 hover:bg-black/20 text-gray-200 cursor-pointer hover:p-4 transition-all">
        <FaChevronLeft size={32} onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 hover:bg-black/20 hover:p-4 text-gray-200 cursor-pointer transition-all">
        <FaChevronRight size={32} onClick={nextSlide} />
      </div>
      <div className="absolute bottom-2 left-[50%] -translate-x-2/4 flex justify-center items-center p-1">
        {slides.map((slide, i) => (
          <div
            key={i}
            onClick={() => goSlide(i)}
            className={`cursor-pointer ${
              currentIndex === i ? "text-gray-600 text-4xl" : "text-gray-400 text-3xl"
            }`}
          >
            <BsDot 
             />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
