export const BannerSkeleton = () => {
  return (
    <div className="relative h-80 bg-gray-300 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          {/* Title */}
          <div className="h-12 w-80 md:w-120 bg-gray-400 rounded mx-auto animate-pulse" />

          {/* Subtitle */}
          <div className="h-6 w-64 md:w-90 bg-gray-400 rounded mx-auto animate-pulse" />
        </div>
      </div>

      {/* Optional shimmer */}
      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.8s_infinite]" />
    </div>
  );
};
