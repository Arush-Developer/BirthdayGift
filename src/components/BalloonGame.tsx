import React, { useState } from 'react';
import { Star, Heart, Gift } from 'lucide-react';

interface Balloon {
  id: number;
  color: string;
  word: string;
  popped: boolean;
  position: { x: number; y: number };
}

const BalloonGame: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([
    { id: 1, color: 'bg-pink-400', word: 'You', popped: false, position: { x: 15, y: 20 } },
    { id: 2, color: 'bg-purple-400', word: 'are', popped: false, position: { x: 35, y: 40 } },
    { id: 3, color: 'bg-red-400', word: 'my', popped: false, position: { x: 55, y: 15 } },
    { id: 4, color: 'bg-blue-400', word: 'sabse', popped: false, position: { x: 75, y: 35 } },
    { id: 5, color: 'bg-green-400', word: 'badi', popped: false, position: { x: 25, y: 60 } },
    { id: 6, color: 'bg-yellow-400', word: 'khushi', popped: false, position: { x: 65, y: 65 } },
    { id: 7, color: 'bg-pink-500', word: '❤️', popped: false, position: { x: 45, y: 80 } }
  ]);

  const [gameComplete, setGameComplete] = useState(false);
  const [poppedCount, setPoppedCount] = useState(0);

  const popBalloon = (balloonId: number) => {
    setBalloons(prev => 
      prev.map(balloon => 
        balloon.id === balloonId 
          ? { ...balloon, popped: true }
          : balloon
      )
    );
    
    const newPoppedCount = poppedCount + 1;
    setPoppedCount(newPoppedCount);
    
    if (newPoppedCount === balloons.length) {
      setTimeout(() => setGameComplete(true), 1000);
    }
  };

  const resetGame = () => {
    setBalloons(prev => prev.map(balloon => ({ ...balloon, popped: false })));
    setGameComplete(false);
    setPoppedCount(0);
  };

  const finalMessage = balloons
    .filter(b => b.popped)
    .sort((a, b) => a.id - b.id)
    .map(b => b.word)
    .join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 py-20 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute text-pink-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${1 + Math.random()}rem`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-4">
            Balloon Popping Surprise 🎈
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Balloons pop kar aur hidden message dekh! 😍
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-200 inline-block">
            <p className="text-lg text-pink-600 font-medium">
              Popped: {poppedCount} / {balloons.length} balloons 🎯
            </p>
          </div>
        </div>

        {!gameComplete ? (
          <div className="relative h-96 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200 overflow-hidden">
            {balloons.map((balloon) => (
              <div
                key={balloon.id}
                className={`absolute cursor-pointer transform transition-all duration-300 ${
                  balloon.popped 
                    ? 'scale-0 opacity-0' 
                    : 'hover:scale-110 balloon-float'
                }`}
                style={{
                  left: `${balloon.position.x}%`,
                  top: `${balloon.position.y}%`,
                  animationDelay: `${balloon.id * 0.2}s`
                }}
                onClick={() => !balloon.popped && popBalloon(balloon.id)}
              >
                {!balloon.popped && (
                  <div className="relative">
                    {/* Balloon */}
                    <div className={`w-20 h-24 ${balloon.color} rounded-full shadow-lg balloon-glow flex items-center justify-center relative`}>
                      <span className="text-white font-bold text-lg">
                        {balloon.word}
                      </span>
                      {/* Balloon shine effect */}
                      <div className="absolute top-2 left-3 w-3 h-3 bg-white/50 rounded-full"></div>
                    </div>
                    {/* Balloon string */}
                    <div className="w-0.5 h-12 bg-gray-600 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}

            {/* Pop effects */}
            {balloons.some(b => b.popped) && (
              <div className="absolute inset-0 pointer-events-none">
                {balloons.filter(b => b.popped).map(balloon => (
                  <div
                    key={`pop-${balloon.id}`}
                    className="absolute pop-effect"
                    style={{
                      left: `${balloon.position.x}%`,
                      top: `${balloon.position.y}%`
                    }}
                  >
                    <div className="text-4xl animate-ping">💥</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center celebration-animation">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-12 shadow-2xl text-white">
              <div className="mb-8">
                <Gift className="w-24 h-24 mx-auto animate-bounce mb-6" />
                <div className="flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-red-400 animate-pulse mr-3" />
                  <Star className="w-8 h-8 text-yellow-400 animate-spin" />
                  <Heart className="w-8 h-8 text-red-400 animate-pulse ml-3" />
                </div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">🎉 Surprise Revealed! 🎉</h3>
              <div className="text-3xl font-bold mb-8 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                "{finalMessage}"
              </div>
              
              <div className="space-y-4">
                <p className="text-xl">
                  Saanvi, tu sach mein meri sabse badi khushi hai! 💖
                </p>
                <p className="text-lg text-pink-200">
                  Every day with you feels like a celebration! 🎊
                </p>
              </div>
              
              <button
                onClick={resetGame}
                className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg"
              >
                Play Again! 🎈
              </button>
            </div>
          </div>
        )}

        {poppedCount > 0 && poppedCount < balloons.length && (
          <div className="text-center mt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-200 inline-block">
              <p className="text-lg text-gray-700 font-medium">
                Current Message: <span className="text-pink-600 font-bold">"{finalMessage}"</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Baaki balloons bhi pop kar! 🎯
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BalloonGame;
