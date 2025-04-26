import React from "react";
import { CalendarDayProps } from "../types";

export const CalendarDay: React.FC<CalendarDayProps> = ({
  dayName,
  date,
  isHighlighted = false,
}) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[46px] w-[40px] font-medium">
      <div className="text-xs font-medium text-black">{dayName}</div>
      <div
        className={`text-xl ${
          isHighlighted
            ? "mt-1.5 w-7 h-7 flex items-center justify-center text-white rounded-full bg-rose-700 bg-opacity-50 pb-[5px]"
            : "text-black mt-1.5"
        }`}
      >
        {date}
      </div>
    </div>
  );
};
