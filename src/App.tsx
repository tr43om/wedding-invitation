import { useState } from "react";
import { Section } from "./sections";
import WeddingIntro from "./sections/wedding-intro";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <main className=" grid gap-2   max-w-[390px]  justify-self-center">
      <AnimatePresence>
        {introDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-3"
          >
            <Section.Hero />
            <Section.Timings />
            <Section.Venue />
            <Section.DressCode />
            <Section.Wishes />
            <Section.GuestForm />
            <Section.Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {!introDone && <WeddingIntro onAnimationEnd={() => setIntroDone(true)} />}
    </main>
  );
}

export default App;
