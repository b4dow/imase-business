"use client";

import { TestimonialCard } from "../ui/testimonialCard";
import { useState } from "react";
import { TestimonialI } from "@/interfaces";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  testimonials: TestimonialI[];
}

export const TestimonialComponent = ({ testimonials }: Props) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Lo que dicen{" "}
                <span className="text-[#FF0000]">nuestros clientes</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Con la confianza de empresas de todo Perú durante más de 35 años
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="bg-white rounded-lg p-8">
                <TestimonialCard
                  testimonial={testimonials[currentTestimonial]}
                />
              </div>

              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#FF0000] hover:bg-red-700 text-white p-3 rounded-full transition-all shadow-lg"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#FF0000] hover:bg-red-700 text-white p-3 rounded-full transition-all shadow-lg"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "bg-[#FF0000] w-8"
                          : "bg-gray-600"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
