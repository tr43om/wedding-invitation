import Rings from "@/assets/rings.svg?react";
import rose from "@/assets/rose.webp";
import { CalendarGrid } from "@/components/calendar-grid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Hero = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col px-10   w-full relative z-10 justify-center items-center">
        <div className="grid   justify-items-center ">
          <Rings className="size-8" />
          <h2 className="w-48 max-w-full text-base text-black">
            приглашение на свадьбу
          </h2>
        </div>
        <h1 className="self-start mt-32 text-8xl text-black font-wedding grid">
          <span>Артём</span>

          <span>
            <span className="opacity-70 mr-4">&</span> Лена
          </span>
        </h1>
      </CardHeader>

      <CardContent className="flex flex-col justify-center px-2.5 mt-24 w-full relative z-10">
        <section className="flex flex-col justify-center items-center w-full">
          <h3 className="text-2xl font-medium text-red-500">
            Дорогие и любимые!
          </h3>
          <p className="text-base text-center text-zinc-800">
            С огромной радостью сообщаем вам о нашей свадьбе и приглашаем вас
            разделить этот прекрасный день с нами!
          </p>
        </section>

        <CalendarGrid month="Август" year="2025" />
      </CardContent>
      <img
        src={rose}
        alt="Decorative flower"
        className="absolute  w-[800px] opacity-60 [filter:hue-rotate(15deg)_saturate(1.3)] rotate-[359deg] scale-125 top-[100px] right-[-90.1px] object-cover h-[460px]"
      />
    </Card>
  );
};
