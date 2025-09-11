import React from 'react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-heart absolute text-pink-400 opacity-60"
          style={{
            left: `${10 + (i * 12)}%`,
            animationDelay: `${i * 0.8}s`,
            fontSize: `${1.2 + Math.random() * 0.8}rem`
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
