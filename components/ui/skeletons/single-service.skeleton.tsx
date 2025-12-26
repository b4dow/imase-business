import { SkeletonBox } from "./box.skeleton";
import { SkeletonText } from "./text.skeleton";

export const SingleServiceSkeleton = () => {
  return (
    <div className="bg-white animate-pulse py-12">
      <div className="container mx-auto px-4">
        {/* Back link skeleton */}
        <div className="inline-flex items-center gap-2 mb-8">
          {/* Icon */}
          <SkeletonBox className="h-5 w-5 rounded-full" />

          {/* Text */}
          <SkeletonText className="w-40 h-4" />
        </div>
        <div className="pt-6">
          {/* Breadcrumb */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-4 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-4 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Images grid */}
          <div className="mx-auto mt-6 max-w-7xl sm:px-6 px-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="row-span-2 aspect-3/4 rounded-lg bg-gray-200 max-lg:hidden" />
            <div className="col-start-2 aspect-3/2 rounded-lg bg-gray-200 max-lg:hidden" />
            <div className="col-start-2 row-start-2 aspect-3/2 rounded-lg bg-gray-200 max-lg:hidden" />
            <div className="row-span-2 aspect-4/5 rounded-lg bg-gray-200" />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {/* Title */}
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="h-8 w-3/4 bg-gray-200 rounded mb-4" />
            </div>

            {/* CTA */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="h-12 w-full bg-gray-200 rounded-md mt-10" />
            </div>

            {/* Description */}
            <div className="py-10 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                <div className="h-4 w-4/6 bg-gray-200 rounded" />
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
                <ul className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i} className="h-4 w-2/3 bg-gray-200 rounded" />
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="mt-10">
                <div className="h-4 w-20 bg-gray-200 rounded mb-4" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
