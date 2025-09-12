import React, { useEffect, useState } from 'react';
import { Crown, Heart, Star } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center relative">
      {/* Falling Rose Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="rose-petal absolute text-pink-500"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            🌹
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-2000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-6 animate-pulse">
            <Crown className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 glowing-text">
          Happy Birthday
        </h1>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 glowing-text">
          Saanvi Newatia 🎂✨💖
        </h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-200 max-w-2xl mx-4">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 animate-pulse mr-2" />
            <Star className="w-8 h-8 text-yellow-500 animate-spin mr-2" />
            <Heart className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
          
          <p className="text-2xl text-gray-700 font-medium leading-relaxed">
            Aaj ka din tera hai <span className="text-pink-600 font-bold">Meri</span> Queen 👑
          </p>
          <p className="text-2xl text-gray-700 font-medium leading-relaxed mt-2">
            aur main bhi tera  <span className="text-purple-600 font-bold">Hamesha!</span> 😏
          </p>
          
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
              <p className="text-lg text-gray-600">Welcome to your special day, Darling✨</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <p className="text-lg text-gray-600">Scroll down to start the magical journey! 🎭</p>
            </div>
          </div>
        </div>

        <div className="mt-8 animate-bounce">
          <div className="text-4xl">⬇️</div>
          <p className="text-gray-600 mt-2">Neeche dekho... surprise shuru hota hai!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
