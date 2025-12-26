import { Suspense } from "react";
import {
  AboutComponent,
  CTAComponent,
  FeaturedProductComponent,
  FeaturedServiceComponent,
  HeroCarousel,
  heroSlides,
  TestimonialWrapper,
  FeaturedProductsSkeleton,
  TestimonialSkeleton,
} from "@/components";

export default async function Home() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <AboutComponent />
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProductComponent />
      </Suspense>
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedServiceComponent />
      </Suspense>
      <Suspense fallback={<TestimonialSkeleton />}>
        <TestimonialWrapper />
      </Suspense>
      <CTAComponent />
    </>
  );
}
