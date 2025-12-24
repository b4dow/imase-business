import { FindTestimonialsAction } from "@/actions";
import {
  AboutComponent,
  CTAComponent,
  FeaturedProductComponent,
  FeaturedServiceComponent,
  HeroCarousel,
  heroSlides,
} from "@/components";
import { TestimonialComponent } from "@/components/home/testimonials.component";

export default async function HomePage() {
  const { testimonials } = await FindTestimonialsAction();
  if (!testimonials) return;
  return (
    <div>
      <HeroCarousel slides={heroSlides} />
      <AboutComponent />
      <FeaturedProductComponent />
      <FeaturedServiceComponent />
      <TestimonialComponent testimonials={testimonials} />
      <CTAComponent />
    </div>
  );
}
