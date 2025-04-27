import { NavigationButton } from "@/components/navigation-button";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import bud from "@/assets/bud.webp";
import { InView } from "@/components/ui/in-view";

const slides = [
  {
    title: "Пожелания",
    content:
      "Дорогие гости, просим вас не дарить нам цветы, поскольку через день мы уезжаем в путешествие и не сможем в полной мере насладиться их красотой",
  },
  {
    title: "Подарки",
    content:
      "Прятным комлиментом для нас, вместо цветов, будет ваше любимое вино для нашей домашней коллекции",
  },
  {
    title: "Горько",
    content:
      "От всего сердца просим вас воздержаться от криков «Горько!» и сохранить атмосферу уютного семейного праздника.",
  },

  {
    title: "Вопросы",
    content:
      "Если у вас появились какие-либо вопросы, то вам с радостью поможет наш организатор \n +7 (913) 966-20-05 (Мария)",
  },
];

export const Wishes: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // init
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <article className="flex overflow-hidden relative flex-col justify-center items-center px-2.5 py-8 mx-auto max-w-none bg-white rounded-3xl w-[390px] max-md:p-5 max-md:w-full max-md:max-w-[991px] max-sm:p-4 max-sm:max-w-screen-sm ">
      <div className="grid gap-4  text-center">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <header className="text-2xl text-red-500 max-sm:text-xl  transition-opacity duration-300">
            Пожелания
          </header>
        </InView>

        <div
          className="embla w-full overflow-hidden relative z-10"
          ref={emblaRef}
          role="region"
          aria-label="Слайдер пожеланий"
        >
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                className="embla__slide min-w-full flex justify-center"
                key={index}
              >
                <p className="text-base text-center text-black text-opacity-70 max-sm:text-sm transition-opacity duration-300 whitespace-pre-line">
                  {slide.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav
        className="flex gap-7 items-center mt-4 relative z-10"
        aria-label="Навигация по слайдам"
      >
        <NavigationButton direction="left" onClick={scrollPrev} />
        <span className="text-2xl text-black max-sm:text-xl">
          {selectedIndex + 1} / {slides.length}
        </span>
        <NavigationButton direction="right" onClick={scrollNext} />
      </nav>

      <img
        alt="flower bud background"
        src={bud}
        className="absolute -bottom-[90px] -right-[100px] rotate-[333deg] opacity-40"
      />
    </article>
  );
};
