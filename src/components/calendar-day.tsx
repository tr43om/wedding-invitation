import React from "react";
import { CalendarDayProps } from "../types";
import circle from "@/assets/circle.png";

export const CalendarDay: React.FC<CalendarDayProps> = ({
  dayName,
  date,
  isHighlighted = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[46px] w-[40px] font-medium relative">
      <div className="text-xs font-medium text-black">{dayName}</div>
      <div className={`text-xl text-black mt-1.5`}>{date}</div>
      {isHighlighted && (
        <img src={circle} className="absolute top-[23px] scale-[1.3]" />
      )}
    </div>
  );
};
