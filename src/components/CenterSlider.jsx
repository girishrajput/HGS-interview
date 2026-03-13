import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";
import centerSliderBg from "../assets/images/center-slider-bg.jpg";
import centerSlides from "../data/centerSlides.json";

import ArrowR from "../assets/images/right-aerrow.svg";
import ArrowL from "../assets/images/left-aerrow.svg";

const CenterSlider = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Map 
  const slides = centerSlides.map((slide, index) => ({
    ...slide,
    img: [slider1, slider2, slider3, "https://picsum.photos/id/40/800/800"][index]
  }));

  //  indexing
  const getIndex = (offset) => (index + offset + centerSlides.length) % centerSlides.length;

  const next = () => setIndex((prev) => (prev + 1) % centerSlides.length);
  const prev = () => setIndex((prev) => (prev - 1 + centerSlides.length) % centerSlides.length);

  //  Logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [index, isHovered]);

  // 3-image view
  const displayIndexes = [getIndex(-1), getIndex(0), getIndex(1)];

  return (
    <section style={{ backgroundImage: `url(${centerSliderBg})` }} className="relative w-full py-4 md:py-20  bg-position-[center_top_5rem] md:bg-position-[center_top_9rem] bg-no-repeat bg-size-[100%_150px] mb-32">
      <div className=" max-w-6xl mx-auto  px-4 ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-4 md:mb-16 text-custom-dark font-mori">
          Lorem ipsum dolor
        </h2>
   
          <div
            className="relative flex items-center justify-center h-[300px] md:h-[400px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Container */}
            <div className="flex items-center min-h-6/12 justify-center w-full gap-5 md:gap-5">
              {displayIndexes.map((slideIdx, i) => {
                const isCenter = i === 1;
                const slide = slides[slideIdx];

                return (
                  <motion.div
                    key={slide.id}
                    onClick={() => (i === 0 ? prev() : i === 2 ? next() : null)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: isCenter ? 1 : 1,
                      scale: isCenter ? 1.1 : 0.9,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`relative cursor-pointer transition-all duration-500 ${isCenter ? "w-[380px] md:w-[320px]" : "w-[150px] md:w-[280px]"
                      }`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="rounded-3xl object-cover"
                    />

                    {/* center slide */}
                    <AnimatePresence>
                      {isCenter && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute -bottom-8 left-0 right-0 text-center"
                        >
                          <h3 className="text-sm font-normal text-custom-dark">{slide.title}</h3>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 z-30 transition-all flex items-center justify-center cursor-pointer"
            >           
              <img src={ArrowL} alt="Previous" className="w-auto h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 z-30 p-3 transition-all flex items-center justify-center cursor-pointer"
            >
             <img src={ArrowR} alt="Previous" className="w-auto h-6" />
            </button>
          </div>
      </div>
    </section>
  );
};

export default CenterSlider;