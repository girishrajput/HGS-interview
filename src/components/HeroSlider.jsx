import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slider1 from "../assets/images/banner-main.jpg";
import slider2 from "../assets/images/banner-main1.jpg";
import slider3 from "../assets/images/banner-main2.jpg";
import heroSlides from "../data/heroSlides.json";

function HeroSlider() {
  // Map imported images to slides data
  const slidesData = heroSlides.map((slide, index) => ({
    ...slide,
    image: [slider1, slider2, slider3][index]
  }));

  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Extract current slide
  const currentSlide = slidesData[index];

  return (
    <section
      className="h-[560px] bg-cover bg-center flex items-center relative transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-white px-6 text-left ps-12">
        {/* Title */}
        <h1 className="text-5xl md:text-[78px] md:pl-[50px] md:pt-[40px] font-semibold uppercase tracking-tight transition-all duration-500">
          {currentSlide.title}
        </h1>
        <p className="text-2xl font-semibold mb-6 opacity-90 md:pl-[50px] md:text-[40px] md:-mt-3.5">
          {currentSlide.subtitle}
        </p>

        <Link to="/about" className="bg-white md:ml-[50px] font-normal text-[#02033a] px-7 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
          {currentSlide.buttonText}
        </Link>

      </div>

      {/* --- Navigation --- */}
      <div className="absolute bottom-14 right-8 -translate-x-1/2 flex gap-3 z-20">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-xs transition-all duration-500 ${
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