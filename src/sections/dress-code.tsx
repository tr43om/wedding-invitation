import { ColorPalette } from "@/components/color-palette";
import bud from "@/assets/bud.webp";
import { InView } from "@/components/ui/in-view";

const ladiesColors = [
  "bg-[#FFF399]",
  "bg-[#C6D5BB]",
  "bg-slate-300",
  "bg-red-100",
];

const gentlemenColors = [
  "bg-zinc-800",
  "bg-[#CBB7A6]",
  "bg-zinc-300",
  "bg-[#F2E7E1]",
];

export const DressCode = () => {
  return (
    <section className="pt-8 pb-2 bg-white rounded-3xl max-w-[390px] relative overflow-hidden">
      <div className="relative z-[1] flex flex-col items-center gap-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <header className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl text-red-500 max-sm:text-xl">Дресс-код</h1>
            <p className="text-base text-black/70 max-sm:text-sm">
              Для нас главное — ваше присутствие!
              <br />
              Но мы будем рады, если в своих нарядах вы поддержите стиль нашей
              свадьбы
            </p>
          </header>
        </InView>

        <main className="grid gap-6">
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {" "}
            <section className="flex flex-col items-center gap-3">
              <h2 className="text-xl text-black max-sm:text-base">Леди</h2>
              <ColorPalette colors={ladiesColors} />
            </section>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <section className="flex flex-col items-center gap-3">
              <h2 className="text-xl text-black max-sm:text-base">
                Джентельмены
              </h2>
              <ColorPalette colors={gentlemenColors} />
            </section>
          </InView>
        </main>

        <footer className="text-xs text-center text-black/60 flex mt-6">
          * приветствуются любые пастельные оттенки
        </footer>
      </div>
      <img
        alt="flower bud background"
        src={bud}
        className="absolute -top-[60px] -right-[100px] rotate-[195deg] opacity-40"
      />
    </section>
  );
};
