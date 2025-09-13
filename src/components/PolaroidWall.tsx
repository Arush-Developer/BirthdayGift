import React from 'react';
import { Camera } from 'lucide-react';

interface Polaroid {
  id: number;
  image: string;
  caption: string;
  rotation: string;
}

const PolaroidWall: React.FC = () => {
  // Using local images from public folder
  const polaroids: Polaroid[] = [
    { id: 1, image: '/6.jpg', caption: 'Our First Date ☕', rotation: 'rotate-3' },
    { id: 2, image: '/7.jpg', caption: 'Random Selfie 📱', rotation: '-rotate-2' },
    { id: 3, image: '/8.jpg', caption: 'This one blows me off 🥵👑', rotation: 'rotate-1' },
    { id: 4, image: '/9.jpg', caption: 'Sunshine Girl ☀️', rotation: '-rotate-3' },
    { id: 5, image: '/10.jpg', caption: 'Cuteness Captured 📸', rotation: 'rotate-2' },
    { id: 6, image: '/11.jpg', caption: 'Happy Vibes 😊', rotation: '-rotate-1' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 py-20 relative overflow-hidden">
      {/* Floating camera icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-camera absolute text-gray-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`
            }}
          >
            📷
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
            Polaroid Memory Wall 📸
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Some of my fav clicks of you 😍
          </p>
        </div>

        {/* Cork board background */}
        <div className="bg-amber-100 rounded-3xl p-8 shadow-2xl border-8 border-amber-200 relative">
          {/* Polaroids grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {polaroids.map((polaroid) => (
              <div
                key={polaroid.id}
                className={`cursor-pointer transform transition-all duration-500 hover:scale-105 ${polaroid.rotation}`}
              >
                <div className="bg-white rounded-lg shadow-xl p-4 relative">
                  <div className="aspect-square mb-4 overflow-hidden rounded">
                    <img
                      src={polaroid.image}
                      alt={polaroid.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-handwriting text-lg">
                    {polaroid.caption}
                  </p>

                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-200 opacity-70 rotate-12"></div>
                  <div className="absolute -bottom-2 right-4 w-12 h-6 bg-yellow-200 opacity-70 -rotate-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200 inline-block">
            <p className="text-lg text-gray-700 font-medium">
              Abhi to apna safar shuru hua hai ji long live Saanu✨
            </p>
            <p className="text-orange-600 mt-2">
              17 saal ki hogayi par aaj bhi sweet 16 haan! 💖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolaroidWall;
