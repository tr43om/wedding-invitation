import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "у нас свадьба!";

export default function WeddingIntro({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowIntro(false);
          setTimeout(() => onAnimationEnd(), 800);
        }, 1800);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onAnimationEnd]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-[hsl(40,38%,97%)] z-50 overflow-hidden"
        >
          {/* Анимация сердечек */}
          <div className="relative w-32 h-32 mb-2">
            {/* Большое сердце */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 text-red-600"
            >
              <Heart />
            </motion.div>

            {/* Маленькие пульсирующие сердечки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: [20, -20, -40] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute top-0 left-4 w-6 h-6 text-red-500"
            >
              <Heart small />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: [20, -20, -40] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
              className="absolute top-0 right-4 w-6 h-6 text-red-500"
            >
              <Heart small />
            </motion.div>
          </div>

          {/* Печатающийся текст */}
          <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
            {displayedText}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Компонент сердечка
function Heart({ small = false }: { small?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={small ? "w-6 h-6" : "w-16 h-16"}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}
