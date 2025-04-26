import React from "react";
import venueImg from "@/assets/venue.webp";

export const VenueCard: React.FC = () => {
  return (
    <section className="flex flex-col gap-2.5 items-center p-3 bg-white  shadow-[0px_4px_15.5px_rgba(0,0,0,0.14)] w-[348px] ">
      <img src={venueImg} className="w-full " alt="Venue" />
      <address>
        <p className="text-center  ">г. Омск, Набережная Тухачевского 1А,</p>
        <p className="text-center opacity-60">банкетная площадка IVA</p>
      </address>
    </section>
  );
};
