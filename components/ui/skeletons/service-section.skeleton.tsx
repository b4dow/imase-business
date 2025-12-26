import { ServiceCardSkeleton } from "./service-card.skeleton";

export const ServiceSectionSkeleton = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="h-10 w-full md:w-80 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-full md:w-80 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
