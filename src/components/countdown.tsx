import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date("2025-08-17T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "дней", value: timeLeft.days },
    { label: "часов", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "минут", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "секунд", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <div className="flex items-center gap-4 text-center justify-self-center">
      {timeUnits.map((unit) => (
        <div key={unit.label}>
          <div className="text-lg">{unit.label}</div>
          <div className="relative h-8 w-16 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={unit.value}
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 text-2xl "
              >
                {unit.value}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
