"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
}

interface Props {
  slides: Slide[];
}

export const HeroCarousel = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-125 md:h-150 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
                  {slide.subtitle}
                </p>
              )}
              <a
                href="https://wa.me/51936983952"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="animate-fadeIn">
                  Contactame por Whatsapp
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white opacity-30 hover:opacity-50 text-black p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white opacity-30 hover:opacity-50 text-black p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
