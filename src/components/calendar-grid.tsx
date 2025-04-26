import React from "react";
import { CalendarDay } from "./calendar-day";
import { CalendarGridProps } from "../types";

export const CalendarGrid: React.FC<CalendarGridProps> = ({ month, year }) => {
  return (
    <section className="flex flex-col justify-center items-center self-center mt-8 w-full max-w-[352px]">
      <div className="flex gap-6 justify-center items-center w-full whitespace-nowrap">
        <CalendarDay dayName="ПН" date="11" />
        <CalendarDay dayName="ВТ" date="12" />
        <CalendarDay dayName="СР" date="13" />
        <CalendarDay dayName="ЧТ" date="14" />
        <CalendarDay dayName="ПТ" date="15" />
        <CalendarDay dayName="СБ" date="16" />
        <CalendarDay dayName="ВС" date="17" isHighlighted />
      </div>
      <div className="flex justify-between items-center mt-2  text-lg font-medium text-black">
        <time className="self-stretch my-auto">
          {month}, {year}
        </time>
      </div>
    </section>
  );
};
