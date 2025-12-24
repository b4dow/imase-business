import { TestimonialI } from "@/interfaces";
import { Card } from "./card";
import { Quote } from "lucide-react";

interface Props {
  testimonial: TestimonialI;
}

export const TestimonialCard = ({ testimonial }: Props) => {
  const photoUrl =
    testimonial.image ||
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200";

  return (
    <Card className="p-6">
      <Quote className="text-[#FF0000] mb-4" size={32} />
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={photoUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
        </div>
      </div>
    </Card>
  );
};
