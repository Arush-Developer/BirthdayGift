import React, { useState, useRef, useEffect } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

const ScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 300;

    // Create scratch surface
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.5, '#FFA500');
    gradient.addColorStop(1, '#FF6347');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add scratch instruction text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch Here! 🎫', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '16px Arial';
    ctx.fillText('Use your finger or mouse!', canvas.width / 2, canvas.height / 2 + 20);
  }, []);

  const startScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsScratching(true);
    scratch(e);
  };

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isScratching && e.type !== 'mousedown' && e.type !== 'touchstart') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Calculate scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }

    const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
    setScratchPercentage(percentage);

    if (percentage > 50 && !isRevealed) {
      setIsRevealed(true);
    }
  };

  const stopScratch = () => {
    setIsScratching(false);
  };

  const resetCard = () => {
    setIsRevealed(false);
    setScratchPercentage(0);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset canvas
    ctx.globalCompositeOperation = 'source-over';
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.5, '#FFA500');
    gradient.addColorStop(1, '#FF6347');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch Here! 🎫', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '16px Arial';
    ctx.fillText('Use your finger or mouse!', canvas.width / 2, canvas.height / 2 + 20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
            Scratch Card Surprise 🎟️
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Scratch karo aur hidden message dekho! 😍
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-200 inline-block">
            <p className="text-lg text-orange-600 font-medium">
              Scratched: {Math.round(scratchPercentage)}% 🎯
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-400">
            {/* Hidden message behind scratch surface */}
            <div className="absolute inset-8 flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl">
              <div className="text-center p-6">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-red-500 animate-pulse mr-2" />
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-spin" />
                  <Heart className="w-8 h-8 text-red-500 animate-pulse ml-2" />
                </div>
                
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                  🎉 Hidden Message! 🎉
                </h3>
                
                <div className="bg-white/80 p-4 rounded-xl border-2 border-dashed border-pink-400">
                  <p className="text-lg text-gray-700 font-medium leading-relaxed italic">
                    "Happy Birthday meri jaan, tu meri forever wali ho 💕"
                  </p>
                  <p className="text-pink-600 font-bold mt-2">
                    - Arush 💖
                  </p>
                </div>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>🎂 Special Birthday Wish</p>
                  <p>💕 Valid for Lifetime</p>
                  <p>👑 From: Your Biggest Fan</p>
                </div>
              </div>
            </div>

            {/* Scratch canvas */}
            <canvas
              ref={canvasRef}
              className="relative z-10 cursor-crosshair rounded-2xl"
              onMouseDown={startScratch}
              onMouseMove={scratch}
              onMouseUp={stopScratch}
              onMouseLeave={stopScratch}
              onTouchStart={startScratch}
              onTouchMove={scratch}
              onTouchEnd={stopScratch}
            />

            {/* Scratch instructions */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 font-medium">
                {scratchPercentage < 50 
                  ? 'Keep scratching to reveal the surprise! ✨' 
                  : 'Message revealed! 🎉'}
              </p>
            </div>
          </div>
        </div>

        {isRevealed && (
          <div className="text-center mt-12 celebration-animation">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 shadow-2xl text-white max-w-2xl mx-auto">
              <Gift className="w-16 h-16 mx-auto animate-bounce mb-4" />
              <h3 className="text-3xl font-bold mb-4">🎊 Surprise Unlocked! 🎊</h3>
              <p className="text-xl mb-4">
                Tu ne successfully scratch card reveal kar diya! Yeh message specially tere liye likha hai! 💖
              </p>
              <p className="text-lg text-pink-200 mb-6">
                Tu sach mein meri forever wali ho, Saanvi! ✨
              </p>
              
              <button
                onClick={resetCard}
                className="bg-white text-pink-600 px-8 py-3 rounded-xl font-bold hover:bg-pink-50 transition-colors shadow-lg"
              >
                Scratch Again! 🎟️
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200 inline-block">
            <p className="text-lg text-gray-700 font-medium">
              Scratch cards mein hamesha surprises hote hain! 🎁
            </p>
            <p className="text-orange-600 mt-2">
              Yeh sirf pehla surprise hai... aur bhi aane wale hain! 😘
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScratchCard;
