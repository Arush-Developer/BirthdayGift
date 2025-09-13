import React, { useState } from 'react';
import { Mail, Heart, Star } from 'lucide-react';

interface Letter {
  id: number;
  message: string;
  sender: string;
}

const LoveLetterRoom: React.FC = () => {
  const [openLetter, setOpenLetter] = useState<number | null>(null);
  const [floatingEnvelopes, setFloatingEnvelopes] = useState(true);

  const letters: Letter[] = [
    {
      id: 1,
      message: "Tu meri asli CEO hai, meri life ki boss lady 🫶 Without you, mera office (dil) incomplete lagta hai!",
      sender: "Your Devoted Employee - Arush 😘"
    },
    {
      id: 2,
      message: "I swere agar tu kabhi khud ko meri aankho se dekh leti to apne hi pyaar mai pagal hojati",
      sender: "Your Ashiq - Arush "
    },
    {
      id: 3,
      message: "Tu meri zindagi mai jabse aayi hai, meri life ki balance sheet mai khushi itni jyada ho chuki hai ki dukh se balance hi nahi ho pati",
      sender: "Your Finance Department - Arush 💰"
    },
    {
      id: 4,
      message: "Din mai tujhse baat karna is best moment of my day!, 0.1 Second mai smile aa jati hai mere chehre par tujhe dekhne se",
      sender: "Your Admirer - Aru"
    },
    {
      id: 5,
      message: "You are my bestfriend my girlfriend and my everything fr!",
      sender: "Your Aru"
    }
  ];

  const handleEnvelopeClick = (letterId: number) => {
    setOpenLetter(letterId);
    setFloatingEnvelopes(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-red-200 py-20 relative overflow-hidden">
      {/* Floating Envelopes Animation */}
      {floatingEnvelopes && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="floating-envelope absolute text-white opacity-70"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${1.5 + Math.random()}rem`
              }}
            >
              💌
            </div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Love Letter Room 💌
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-8">
            Dreamy room mein floating envelopes... click kar aur love notes padh! 😍
          </p>
          <p className="text-lg text-pink-600">
            {openLetter ? 'Letter khul gaya! Padh le darling 💖' : 'Koi envelope choose kar... surprise aa raha hai! ✨'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter) => (
            <div
              key={letter.id}
              className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleEnvelopeClick(letter.id)}
            >
              {openLetter === letter.id ? (
                // Open Letter
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-pink-300 letter-open-animation">
                  <div className="text-center mb-6">
                    <Mail className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-bounce" />
                    <div className="flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-red-500 animate-pulse mr-2" />
                      <Star className="w-6 h-6 text-yellow-500 animate-spin" />
                      <Heart className="w-6 h-6 text-red-500 animate-pulse ml-2" />
                    </div>
                  </div>
                  
                  <div className="letter-paper bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-400">
                    <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6 italic">
                      "{letter.message}"
                    </p>
                    <div className="text-right">
                      <p className="text-pink-600 font-bold">
                        - {letter.sender}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenLetter(null);
                      setFloatingEnvelopes(true);
                    }}
                    className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                  >
                    Close Letter 💕
                  </button>
                </div>
              ) : (
                // Closed Envelope
                <div className="envelope-container bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 shadow-xl text-white text-center envelope-hover">
                  <div className="envelope-animation">
                    <Mail className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                    <p className="text-xl font-bold mb-2">Letter #{letter.id}</p>
                    <p className="text-pink-100">Click to open 💖</p>
                  </div>
                  
                  {/* Envelope flap animation */}
                  <div className="envelope-flap absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-t-2xl transform origin-top transition-transform duration-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {openLetter && (
          <div className="text-center mt-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 inline-block">
              <p className="text-lg text-gray-700 font-medium">
                Saare letters padhne ke liye ek ek karke click kar! 😊
              </p>
              <p className="text-pink-600 mt-2">
                Every letter says something, I always want to say lol 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetterRoom;
