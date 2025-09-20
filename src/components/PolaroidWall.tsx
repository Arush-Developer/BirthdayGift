import React from "react";
import { Cake, Gift } from "lucide-react";

interface Timeline {
  id: number;
  year: string;
  image: string;
  caption: string;
}

const PolaroidWall: React.FC = () => {
  const timeline: Timeline[] = [
    { id: 1, year: "2008 🎀", image: "/6.jpg", caption: "Little Princess was born 👶✨" },
    { id: 2, year: "2012 🎈", image: "/7.jpg", caption: "Chhoti si Saanu with the brightest smile 💕" },
    { id: 3, year: "2016 🎉", image: "/8.jpg", caption: "Growing up so beautifully 🌸" },
    { id: 4, year: "2019 🎂", image: "/9.jpg", caption: "Sunshine girl spreading happiness ☀️" },
    { id: 5, year: "2022 💖", image: "/10.jpg", caption: "Boss Lady vibes incoming 😏👑" },
    { id: 6, year: "2023 🌟", image: "/11.jpg", caption: "Queen Saanu leveling up gracefully ✨" },
    { id: 7, year: "2024 ✨", image: "/12.jpg", caption: "Even more gorgeous, even more loved 💕" },
    { id: 8, year: "2025 🎊", image: "/13.jpg", caption: "This year is yours — shining the brightest 🌟💖" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-indigo-200 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            🎂 Saanvi’s Birthday Timeline 🎂
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Har saal aur bhi pyaari… let’s walk through your journey ❤️
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-4 border-pink-400 pl-6">
          {timeline.map((entry) => (
            <div key={entry.id} className="mb-12 relative">
              {/* Dot on timeline */}
              <div className="absolute -left-3 w-6 h-6 bg-pink-400 rounded-full border-4 border-white"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={entry.image}
                    alt={entry.caption}
                    className="w-48 h-48 object-cover rounded-xl shadow-md border"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-pink-600 mb-2 flex items-center gap-2">
                      <Cake className="w-6 h-6 text-purple-500" />
                      {entry.year}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {entry.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Note */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-3xl p-8 shadow-2xl">
            <Gift className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">
              And now… 🎉 2025 🎉
            </h3>
            <p className="text-lg">
              My Queen’s best birthday ever 💖 with me forever 😘
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolaroidWall;
