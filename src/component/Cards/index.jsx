import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Skilled Consultants",
    content: "Lorem Ipsum for consulting 👨‍💼",
    icon: "👥",
    bg: "bg-lime-300 w-[10vw]",
  },
  {
    title: "Scholarship Available",
    content: "Get that 💸 funding",
    icon: "🎓",
    bg: "bg-primery-green w-[10vw] text-white",
  },
  {
    title: "Winning Application",
    content: "We’re locking this one in 🔒",
    icon: "📝",
    bg: "bg-lime-300 w-[10vw]",
  },
];

const initialTransforms = [
  { x: -40, rotate: -15, zIndex: 2 },
  { x: 0, rotate: 0, zIndex: 3 },
  { x: 40, rotate: 15, zIndex: 2 },
];

export default function Cards() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="h-[50vh] w-full flex items-center justify-center bg-white">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full max-w-5xl h-[400px] flex items-center justify-center cursor-pointer"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            animate={
              isHovered
                ? {
                    x: i * 280 - 280,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 10,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: i * 0.1,
                    },
                  }
                : {
                    x: initialTransforms[i].x,
                    rotate: initialTransforms[i].rotate,
                    scale: 0.95,
                    opacity: 1,
                    zIndex: initialTransforms[i].zIndex,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    },
                  }
            }
            className={`absolute w-64 h-80 p-6 shadow-2xl rounded-xl ${card.bg}`}
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 mt-6 text-center">
              {card.title}
            </h3>
            <p className="text-sm text-center">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
