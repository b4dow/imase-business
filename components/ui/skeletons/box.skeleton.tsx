interface Props {
  className?: string;
}
export const SkeletonBox = ({ className = "" }: Props) => (
  <div
    className={`relative overflow-hidden rounded-md bg-gray-200 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent" />
  </div>
);
