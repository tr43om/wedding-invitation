import React from "react";

interface TimelineEvent {
  time: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative z-10 flex flex-col items-center py-4 font-['Playfair_Display']">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col items-center">
          <time className="text-3xl text-black">{event.time}</time>
          <p className="text-base text-black/60 mt-1">{event.description}</p>
          {index < events.length - 1 && (
            <div className="h-12 w-[1px] bg-black/35 my-2" />
          )}
        </div>
      ))}
    </div>
  );
};
