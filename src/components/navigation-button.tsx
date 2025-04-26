import { cn } from "@/lib/utils";
import * as React from "react";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  className,
}) => {
  const path =
    direction === "left"
      ? "M6 8.375L2 12.375M2 12.375L6 16.375M2 12.375H22"
      : "M18 8.375L22 12.375M22 12.375L18 16.375M22 12.375H2";

  return (
    <button
      onClick={onClick}
      aria-label={`Navigate ${direction}`}
      className={cn(
        "transition hover:bg-gray-100 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500",
        className
      )}
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black/40 hover:stroke-black transition"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
