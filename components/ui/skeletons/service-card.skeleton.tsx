import { Card } from "../card";

export const ServiceCardSkeleton = () => {
  return (
    <Card>
      {/* Image */}
      <div className="aspect-square bg-gray-200 animate-pulse" />

      <div className="p-5 space-y-3">
        {/* Category */}
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />

        {/* Title */}
        <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-3/5 bg-gray-200 rounded animate-pulse" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <div className="h-10 flex-1 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 flex-1 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </Card>
  );
};
