import { SkeletonBox } from "./box.skeleton";

interface Props {
  className?: string;
}

export const SkeletonText = ({ className = "" }: Props) => (
  <SkeletonBox className={`h-4 ${className}`} />
);
