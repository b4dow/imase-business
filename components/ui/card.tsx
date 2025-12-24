import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card = ({ children, hover = false, className = "" }: Props) => {
  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};
