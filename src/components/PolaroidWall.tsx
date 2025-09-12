import React, { useState } from 'react';
import { Camera, Heart, Star } from 'lucide-react';

interface Polaroid {
  id: number;
  image: string;
  caption: string;
  frontText: string;
  rotation: string;
}

const PolaroidWall: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // Using local images from public folder
  const polaroids: Polaroid[] = [
    { id: 1, image: '/6.jpg', frontText: 'Our First Date ☕', caption: 'Yeh din kitna special tha! Tu kitni nervous thi, but cute lag rahi thi! ☕💕', rotation: 'rotate-3' },
    { id: 2, image: '/7.jpg', frontText: 'Random Selfie 📱', caption: 'Tera yeh candid smile is meri weakness! Natural beauty queen! 😍✨', rotation: '-rotate-2' },
    { id: 3, image: '/8.jpg', frontText: 'This one blows me off', caption: 'Perfect body of perfect people 🥵👑', rotation: 'rotate-1' },
    { id: 4, image: '/9.jpg', frontText: 'Sunshine Girl ☀️', caption: 'Tu meri daily dose of vitamin D hai! Tera smile = instant happiness! 🌞💖', rotation: '-rotate-3' },
    { id: 5, image: '/10.jpg', frontText: 'Cutness captured 📸', caption: 'Unfiltered beauty! Tu makeup ke bina bhi sabse zyada pretty hai! 🥰', rotation: 'rotate-2' },
    { id: 6, image: '/11.jpg', frontText: 'Happy Vibes 😊', caption: 'Tujhe dekh kar mera dil jhoom jata hai fr 💕', rotation: '-rotate-1' },
  ];

  const handlePolaroidClick = (polaroidId: number) => {
    setFlippedCards(prev =>
      prev.includes(polaroidId)
        ? prev.filter(id => id !== polaroidId)
        : [...prev, polaroidId]
    );
  };

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
            Click on each photo to flip and read 😍
          </p>
          <div className="flex items-center justify-center">
            <Camera className="w-8 h-8 text-orange-500 mr-2" />
            <p className="text-lg text-orange-600 font-medium">
              Flipped: {flippedCards.length} / {polaroids.length} photos
            </p>
          </div>
        </div>

        {/* Cork board background */}
        <div className="bg-amber-100 rounded-3xl p-8 shadow-2xl border-8 border-amber-200 relative">
          {/* Cork board texture dots */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-600 rounded-full"
                style={{
                  left: `${Math.random() * 95}%`,
                  top: `${Math.random() * 95}%`
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {polaroids.map((polaroid) => {
              const isFlipped = flippedCards.includes(polaroid.id);
              
              return (
                <div
                  key={polaroid.id}
                  className={`polaroid-container cursor-pointer transform transition-all duration-500 hover:scale-105 ${polaroid.rotation}`}
                  onClick={() => handlePolaroidClick(polaroid.id)}
                >
                  <div className={`polaroid-card ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front of polaroid */}
                    <div className="polaroid-front bg-white rounded-lg shadow-xl p-4 relative">
                      <div className="aspect-square mb-4 overflow-hidden rounded">
                        <img
                          src={polaroid.image}
                          alt="Memory"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-gray-700 font-handwriting text-lg">
                        {polaroid.frontText}
                      </p>
                      
                      {/* Tape effect */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-200 opacity-70 rotate-12"></div>
                      <div className="absolute -bottom-2 right-4 w-12 h-6 bg-yellow-200 opacity-70 -rotate-12"></div>
                    </div>

                    {/* Back of polaroid */}
                    <div className="polaroid-back bg-white rounded-lg shadow-xl p-6 flex flex-col justify-center absolute top-0 left-0 w-full h-full backface-hidden transform rotate-y-180">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <Heart className="w-6 h-6 text-red-500 animate-pulse mr-2" />
                          <Star className="w-6 h-6 text-yellow-500" />
                          <Heart className="w-6 h-6 text-red-500 animate-pulse ml-2" />
                        </div>
                        
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-400">
                          <p className="text-gray-700 font-medium leading-relaxed italic">
                            "{polaroid.caption}"
                          </p>
                        </div>
                        
                        <p className="text-pink-600 font-bold mt-4 text-sm">
                          - Your Personal Photographer, Arush 📷💕
                        </p>
                        
                        <p className="text-xs text-gray-500 mt-2">
                          Click again to flip back!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {flippedCards.length === polaroids.length && (
          <div className="text-center mt-12 celebration-animation">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 shadow-2xl text-white max-w-2xl mx-auto">
              <Camera className="w-16 h-16 mx-auto animate-bounce mb-4" />
              <h3 className="text-3xl font-bold mb-4">🎉 All Photos Explored! 🎉</h3>
              <p className="text-xl mb-4">
                I wish ki hum aur bohot sari memories banaye saath mai bhi and is picture wall pe add karde 📸💖
              </p>
              <p className="text-lg text-pink-200">
                More smile on your face is yet to come!, keep the camera ready to click 😘
              </p>
              
              <button
                onClick={() => setFlippedCards([])}
                className="mt-6 bg-white text-pink-600 px-8 py-3 rounded-xl font-bold hover:bg-pink-50 transition-colors shadow-lg"
              >
                Flip All Back! 🔄
              </button>
            </div>
          </div>
        )}

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
