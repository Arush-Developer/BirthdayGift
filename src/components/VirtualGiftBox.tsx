import React, { useState } from 'react';
import { Gift, Heart, Sparkles, Plane } from 'lucide-react';

const VirtualGiftBox: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  const handleGiftClick = () => {
    setIsOpened(true);
    setTimeout(() => setShowCoupon(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300 py-20 relative overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${0.8 + Math.random() * 0.7}rem`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Virtual Gift Box 🎁
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            {!isOpened ? 'Click on the gift box... surprise waiting! ✨' : 'Gift khul gaya! Dekh kya mila! 😍'}
          </p>
        </div>

        <div className="flex justify-center">
          {!isOpened ? (
            <div
              className="cursor-pointer transform transition-all duration-300 hover:scale-110 gift-box-hover"
              onClick={handleGiftClick}
            >
              <div className="relative">
                <div className="w-64 h-48 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl shadow-2xl gift-box-glow flex items-center justify-center">
                  <Gift className="w-24 h-24 text-white animate-pulse" />
                </div>
                
                {/* Gift box ribbon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-full bg-yellow-400 opacity-80"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-16 bg-yellow-400 opacity-80"></div>
                
                {/* Bow on top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
                  🎀
                </div>
              </div>
              
              <p className="text-center mt-6 text-lg font-medium text-white bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full">
                Click me! 👆
              </p>
            </div>
          ) : (
            <div className="gift-opening-animation">
              {/* Opened gift box */}
              <div className="relative mb-8">
                <div className="w-64 h-48 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-2xl opacity-50 transform rotate-12"></div>
                
                {/* Sparkle explosion */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="sparkle-explosion absolute text-yellow-400 text-2xl"
                      style={{
                        transform: `rotate(${i * 30}deg) translateX(100px)`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
              </div>
              
              {showCoupon && (
                <div className="coupon-reveal bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-300 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="mb-6">
                      <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-spin" />
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2">
                        Love Coupon! 💝
                      </h3>
                    </div>
                    
                    <div className="coupon-content bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl border-2 border-dashed border-pink-400">
                      <div className="flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-red-500 animate-pulse mr-2" />
                        <Plane className="w-8 h-8 text-blue-500 mr-2" />
                        <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">
                        🎫 SPECIAL REDEEM COUPON 🎫
                      </h4>
                      
                      <div className="space-y-3 text-lg text-gray-700 font-medium">
                        <p>✅ 1000 Unlimited Hugs</p>
                        <p>✅ 1 Dreamy Goa Trip 🏖️</p>
                        <p>✅ Unlimited Cuddles</p>
                        <p>✅ Date Nights (Your Choice!) 🍽️</p>
                        <p>✅ Surprise Gifts Throughout Year 🎁</p>
                      </div>
                      
                      <div className="mt-6 p-4 bg-pink-200 rounded-xl">
                        <p className="text-sm text-gray-600 font-medium">
                          <strong>Validity:</strong> Lifetime ♾️
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                          <strong>Valid From:</strong> Arush's Heart Ltd.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <p className="text-lg text-pink-600 font-bold">
                        "Redeem whenever you want, Ms. CEO! 💖"
                      </p>
                      <p className="text-sm text-gray-500">
                        Terms & Conditions: Love is mandatory 😘
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {isOpened && showCoupon && (
          <div className="text-center mt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 inline-block">
              <p className="text-lg text-gray-700 font-medium">
                Yeh sirf starting hai... aur bhi surprises coming soon! 😍
              </p>
              <p className="text-pink-600 mt-2">
                Goa trip book karna hai? Just say the word! ✈️🏖️
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VirtualGiftBox;
