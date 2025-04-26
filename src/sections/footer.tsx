import gb from "@/assets/gb.webp";
import Countdown from "@/components/countdown";
import Heart from "@/assets/heart.svg?react";
import bud from "@/assets/bud.webp";
import { InView } from "@/components/ui/in-view";

export const Footer = () => {
  return (
    <section className="grid justify-center items-center mt-4 pb-6 relative overflow-hidden">
      <div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className="text-2xl  mb-2 text-center">Уже совсем скоро!</h2>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Countdown />
        </InView>
      </div>
      <div className="relative z-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <article className="flex z-10 flex-col justify-self-center mt-6 gap-2.5 items-center p-3 bg-white  shadow-[0px_4px_15.5px_rgba(0,0,0,0.14)] w-[270px] ">
            <img src={gb} className="w-full " alt="Groom and bride" />
            <p className="text-center">
              <span>
                С нетерпением ждем встречи! <br /> Ваши жених и невеста{" "}
              </span>
              <Heart className="ml-0.5 inline mb-[5px]" />
            </p>
          </article>
        </InView>
      </div>
      <img
        alt="flower bud background"
        src={bud}
        className="absolute -bottom-[100px] scale-150  opacity-40"
      />
    </section>
  );
};
