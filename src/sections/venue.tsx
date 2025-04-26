import { VenueCard } from "@/components/venue-card";
import bud from "@/assets/bud.webp";
import { InView } from "@/components/ui/in-view";

export const Venue = () => {
  return (
    <section className="flex overflow-hidden relative flex-col gap-2.5 items-center w-full py-8 bg-white rounded-3xl">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {" "}
        <h2 className="text-2xl relative z-10 text-center text-red-500 max-md:text-2xl max-sm:text-xl font-playfair">
          Место проведения
        </h2>
      </InView>
      <div className="relative z-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="grid gap-3 relative z-10">
            <VenueCard />
            <a
              href="https://go.2gis.com/mHcZy"
              target="_blank"
              className="w-full p-1.5 text-center transition-colors bg-transparent border border-red-600/20 rounded text-red-500 cursor-pointer hover:bg-red-700/10"
            >
              Показать на карте
            </a>
          </div>
        </InView>
      </div>

      <img
        alt="flower bud background"
        src={bud}
        className="absolute -top-[60px] -left-[80px] rotate-[195deg] opacity-40"
      />
    </section>
  );
};
