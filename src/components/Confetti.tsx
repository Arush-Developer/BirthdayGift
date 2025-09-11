import React from 'react';

const Confetti: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="confetti-piece absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          {['🎉', '🎊', '✨', '🌟', '💖', '🎈'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
