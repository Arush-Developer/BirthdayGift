import React, { useState } from 'react';
import { Heart, Camera, Sparkles } from 'lucide-react';

interface Polaroid {
  id: number;
  image: string;
  frontText: string;
  caption: string;
  rotation: string;
}

const PolaroidWall: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // Updated polaroids with 8 images
  const polaroids: Polaroid[] = [
    { id: 1, image: '/6.jpg', frontText: 'Our Perfect Couple Photo 💕', caption: 'Humara yeh couple photo dekh ke dil khush ho jaata hai! Tu green mein kitni pretty lag rahi hai! 💚✨', rotation: 'rotate-3' },
    { id: 2, image: '/7.jpg', frontText: 'Garden Goddess 🌿', caption: 'Garden mein tu kitni natural aur beautiful lag rahi hai! Tera yeh casual look = my favorite! 🌸😍', rotation: '-rotate-2' },
    { id: 3, image: '/8.jpg', frontText: 'Fun Times & Sunglasses 😎', caption: 'Yeh funny moments = best memories! Tu sunglasses mein bhi itni cute lagti hai! Masti wala mood! 😂💕', rotation: 'rotate-1' },
    { id: 4, image: '/9.jpg', frontText: 'Artistic Beauty 🖤', caption: 'Black and white mein bhi tu colorful lagti hai! Tera yeh pose = pure art! Photography skills on point! 📸✨', rotation: '-rotate-3' },
    { id: 5, image: '/10.jpg', frontText: 'Teddy Bear Cuddles 🧸', caption: 'Teddy bear ke saath tu kitni adorable lag rahi hai! Pink mein tu princess lagti hai! Cuteness overload! 💖👑', rotation: 'rotate-2' },
    { id: 6, image: '/11.jpg', frontText: 'Sunny Day Smile ☀️', caption: 'Tu ki yeh sunny day smile = pure happiness! Bright aur glowing! 🌞💛', rotation: '-rotate-1' },
    { id: 7, image: '/12.jpg', frontText: 'Beach Vibes 🌊', caption: 'Beach par tu kaise bhi cute lag rahi hai! Yeh moment hamesha yaad rahega! 🏖️💖', rotation: 'rotate-2' },
    { id: 8, image: '/13.jpg', frontText: 'Night Lights ✨', caption: 'Raat ke lights mein tu aur bhi dreamy lag rahi hai! Truly magical moment! 🌙💫', rotation: '-rotate-2' }
  ];

  const handleCardClick = (polaroidId: number) => {
    setFlippedCards(prev =>
      prev.includes(polaroidId)
        ? prev.filter(id => id !== polaroidId)
        : [...prev, polaroidId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 py-20 relative overflow-hidden">
      {/* Floating photo elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`
            }}
          >
            📸
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-500 mb-4">
            Polaroid Memory Wall 📸
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Click on each polaroid to flip and read the memory! 💕
          </p>
          <div className="flex items-center justify-center">
            <Camera className="w-6 h-6 text-pink-500 mr-2" />
            <p className="text-lg text-pink-600">
              {flippedCards.length} / {polaroids.length} memories revealed ✨
            </p>
          </div>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {polaroids.map((polaroid) => {
            const isFlipped = flippedCards.includes(polaroid.id);

            return (
              <div
                key={polaroid.id}
                className={`relative cursor-pointer transform transition-all duration-700 hover:scale-105 ${polaroid.rotation} ${isFlipped ? 'rotate-0' : ''}`}
                onClick={() => handleCardClick(polaroid.id)}
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full h-[28rem] transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="bg-white p-4 rounded-lg shadow-2xl border border-gray-200 h-full">
                      <div className="bg-gray-100 rounded-lg mb-4 h-72 overflow-hidden">
                        <img
                          src={polaroid.image}
                          alt="Memory"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-gray-800 font-bold text-lg mb-2">{polaroid.frontText}</p>
                        <p className="text-sm text-gray-500">Click to flip! 🔄</p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-2xl border border-pink-200 h-full flex flex-col justify-center">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <Heart className="w-8 h-8 text-red-500 animate-pulse mr-2" />
                          <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
                          <Heart className="w-8 h-8 text-red-500 animate-pulse ml-2" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Memory #{polaroid.id} 💖</h3>
                        <div className="bg-white/80 p-4 rounded-xl border-l-4 border-pink-400">
                          <p className="text-gray-700 font-medium leading-relaxed italic">"{polaroid.caption}"</p>
                        </div>
                        <div className="mt-4">
                          <p className="text-pink-600 font-bold">- Your Arush 💕</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleCardClick(polaroid.id); }}
                          className="mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg text-sm"
                        >
                          Flip Back 🔄
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {flippedCards.length === polaroids.length && (
          <div className="text-center celebration-animation">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 shadow-2xl text-white max-w-2xl mx-auto">
              <Sparkles className="w-16 h-16 mx-auto animate-spin mb-4" />
              <h3 className="text-3xl font-bold mb-4">🎉 All Memories Revealed! 🎉</h3>
              <p className="text-xl mb-4">Tu ne saare polaroids dekh liye! Each memory is special because it has you in it! 💖</p>
              <p className="text-lg text-pink-200">These are just a few of our beautiful moments... many more to create! ✨</p>
              <button
                onClick={() => setFlippedCards([])}
                className="mt-6 bg-white text-pink-600 px-8 py-3 rounded-xl font-bold hover:bg-pink-50 transition-colors shadow-lg"
              >
                Reset Wall 🔄
              </button>
            </div>
          </div>
        )}

        {/* Wall Description */}
        <div className="text-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 max-w-2xl mx-auto">
            <Camera className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Memory Wall 📸</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              {flippedCards.length === 0
                ? 'Click on each polaroid to reveal the hidden memory and message! Each photo tells our story! 💕'
                : flippedCards.length < polaroids.length
                ? `You've revealed ${flippedCards.length} memories! Keep clicking to see them all! ✨`
                : 'All our beautiful memories are now revealed! Tu sach mein meri life ki best part hai! 👑💖'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolaroidWall;
