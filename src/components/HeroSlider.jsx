import { useState, useEffect } from "react";

// Image Imports
import slider1 from "../assets/images/banner-main.jpg";
import slider2 from "../assets/images/banner-main1.jpg";
import slider3 from "../assets/images/banner-main2.jpg";

// 1. Define unique content for each slide
const slidesData = [
  {
    image: slider1,
    title: "LOREM",
    subtitle: "IPSUM TITLE",
    buttonText: "Explore"
  },
  {
    image: slider2,
    title: "LOREM 2",
    subtitle: "IPSUM TITLE 2",
    buttonText: "Explore"
  },
  {
    image: slider3,
    title: "LOREM 3",
    subtitle: "IPSUM TITLE 3",
    buttonText: "Explore"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide logic (6 seconds for a slower pace)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Extract current slide data for cleaner JSX
  const currentSlide = slidesData[index];

  return (
    <section
      className="h-[420px] bg-cover bg-center flex items-center relative transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      {/* Overlay to ensure text remains readable on any background */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-white px-6 text-left ps-12">
        {/* Unique Title and Subtitle */}
        <h1 className="text-5xl font-semibold uppercase tracking-tight transition-all duration-500">
          {currentSlide.title}
        </h1>
        <p className="text-2xl font-semibold mb-6 opacity-90">
          {currentSlide.subtitle}
        </p>

        <button className="bg-white font-normal text-black px-10 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-lg cursor-pointer">
          {currentSlide.buttonText}
        </button>
      </div>

      {/* --- Dot Navigation --- */}
      <div className="absolute bottom-8 right-0 -translate-x-1/2 flex gap-3 z-20">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === i ? "bg-white w-10" : "bg-white/40 w-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;