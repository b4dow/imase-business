export const FeaturedProductsSkeleton = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Skeleton */}
        <div className="text-center mb-12 space-y-4">
          <div className="h-10 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-105 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>

        {/* Product Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 space-y-4"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 rounded-lg animate-pulse" />

              {/* Title */}
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>

              {/* Price / CTA */}
              <div className="flex justify-between items-center pt-4">
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-9 w-28 bg-gray-200 rounded-md animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="flex justify-center">
          <div className="h-10 w-44 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </section>
  );
};
