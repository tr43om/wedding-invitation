import { Timeline } from "@/components/timeline";
import bud from "@/assets/bud.webp";
import { InView } from "@/components/ui/in-view";

const timelineEvents = [
  { time: "15:00", description: "сбор гостей" },
  { time: "16:00", description: "церемония" },
  { time: "17:00", description: "свадебный ужин" },
  { time: "23:00", description: "завершение вечера" },
];

export const Timings = () => {
  return (
    <section className="flex overflow-hidden relative flex-col gap-2.5 items-center w-full py-8 bg-white rounded-3xl">
      {/* <BackgroundImage /> */}

      <img
        alt="flower bud background"
        src={bud}
        className="absolute -top-[60px] -right-[80px] rotate-[195deg] opacity-40"
      />
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {" "}
        <h1 className="relative text-2xl text-red-500 z-[1] max-md:text-2xl max-sm:text-xl">
          Программа дня
        </h1>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Timeline events={timelineEvents} />
      </InView>
    </section>
  );
};
