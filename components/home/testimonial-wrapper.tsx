import { FindTestimonialsAction } from "@/actions";
import { TestimonialComponent } from "./testimonials.component";

export const TestimonialWrapper = async () => {
  const { testimonials } = await FindTestimonialsAction();
  if (!testimonials) return;

  return <TestimonialComponent testimonials={testimonials} />;
};
