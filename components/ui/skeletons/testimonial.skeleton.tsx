export const TestimonialSkeleton = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12 space-y-4">
          <div className="h-10 w-96 bg-gray-700 rounded mx-auto animate-pulse" />
          <div className="h-4 w-105 bg-gray-700 rounded mx-auto animate-pulse" />
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg p-8 space-y-6">
            {/* Stars / Header */}
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 w-5 bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>

            {/* Text */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* User */}
            <div className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <div className="h-12 w-12 bg-gray-700 rounded-full animate-pulse" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <div className="h-12 w-12 bg-gray-700 rounded-full animate-pulse" />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-3 bg-gray-700 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
