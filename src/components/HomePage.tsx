import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import Confetti from './Confetti';

const HomePage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-pink-50 to-purple-100 overflow-hidden">
      {/* Floating effects */}
      <FloatingHearts />
      {showConfetti && <Confetti />}

      {/* Main Birthday Greeting */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-lg animate-bounce">
        🎂 Happyyyy Birthdayyyy Saanu!!! 💖
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-700 italic">
        So my Queen It's your special day!👑<br />  
        Let me Make it super special! 😏
      </p>

      {/* Decorative Line */}
      <div className="mt-6 w-48 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>

      {/* Subline */}
      <p className="mt-6 text-lg text-gray-600 max-w-md">
        Yeh gift shuru hoti hai <span className="font-semibold text-pink-500">ek chhoti si wish</span> se,  
        aur khatam hota hai <span className="font-semibold text-purple-500">dher saare surprises</span> pe 💫
      </p>
    </div>
  );
};

export default HomePage;
