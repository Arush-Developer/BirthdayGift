import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cake } from "lucide-react";

interface TimelineEntry {
  id: number;
  year: string;
  image: string;
  caption: string;
}

const timelineData: TimelineEntry[] = [
  { id: 1, year: "2008 🎀", image: "/6.jpg", caption: "Little Princess was born 👶✨" },
  { id: 2, year: "2012 🎈", image: "/7.jpg", caption: "Chhoti si Saanu with the brightest smile 💕" },
  { id: 3, year: "2016 🎉", image: "/8.jpg", caption: "Growing up so beautifully 🌸" },
  { id: 4, year: "2019 🎂", image: "/9.jpg", caption: "Sunshine girl spreading happiness ☀️" },
  { id: 5, year: "2022 💖", image: "/10.jpg", caption: "Boss Lady vibes incoming 😏👑" },
  { id: 6, year: "2023 🌟", image: "/11.jpg", caption: "Queen Saanu leveling up gracefully ✨" },
  { id: 7, year: "2024 ✨", image: "/12.jpg", caption: "Even more gorgeous, even more loved 💕" },
  { id: 8, year: "2025 🎊", image: "/13.jpg", caption: "This year is yours — shining the brightest 🌟💖" },
];

const FloatingDecoration = ({ children, delay = 0, duration = 4 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    className="absolute text-2xl opacity-20 pointer-events-none"
    initial={{ y: 0 }}
    animate={{
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const TimelineCard = ({ entry, index }: { entry: TimelineEntry; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`mb-16 flex items-center w-full ${isLeft ? "justify-start pr-8" : "justify-end pl-8"}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 relative group">
        {/* Dot */}
        <div className="absolute top-6 -left-12 md:-left-16 w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>

        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white rounded-3xl shadow-2xl p-6 border border-pink-100 hover:shadow-pink-300/70"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={entry.image}
              alt={entry.caption}
              className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-pink-200 mb-4"
            />
            <h3 className="text-2xl font-bold text-pink-600 mb-2 flex items-center gap-2">
              <Cake className="w-6 h-6 text-rose-500" />
              {entry.year}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{entry.caption}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FinalMessageCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center mt-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-bold mb-2">And now… 🎉 2025 🎉</h3>
        <p className="text-lg">My Queen’s best birthday ever 💖 with me forever 😘</p>
      </div>
    </motion.div>
  );
};

export default function PolaroidWall() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-rose-200 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-rose-200 to-transparent opacity-70 blur-3xl"></div>

      {/* Floating decorations */}
      <FloatingDecoration delay={0}><div className="absolute top-20 left-20">🎈</div></FloatingDecoration>
      <FloatingDecoration delay={1}><div className="absolute top-32 right-32">🧁</div></FloatingDecoration>
      <FloatingDecoration delay={2}><div className="absolute bottom-40 left-1/4">🎈</div></FloatingDecoration>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4 drop-shadow-lg">
            🎂 Saanvi’s Birthday Timeline 🎂
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Har saal aur bhi pyaari… let’s walk through your journey ❤️
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-400/70 h-full"></div>
          {timelineData.map((entry, index) => (
            <TimelineCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {/* Final message */}
        <FinalMessageCard />
      </div>
    </div>
  );
}
