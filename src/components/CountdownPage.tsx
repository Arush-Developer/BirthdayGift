import React, { useState, useEffect } from 'react';
import { getCountdownMessage, getTimeUntilUnlock } from '../utils/dateUtils';
import FloatingHearts from './FloatingHearts';
import { Heart, Calendar, Clock } from 'lucide-react';

const CountdownPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilUnlock());
  const [message, setMessage] = useState(getCountdownMessage());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilUnlock());
      setMessage(getCountdownMessage());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-bounce-slow"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              top: `${10 + i * 10}%`
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="text-center z-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-pink-200 max-w-md mx-4">
        {/* Header */}
        <div className="mb-6">
          <Calendar className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 drop-shadow">
            🔒 Surprise Locked 🔒
          </h1>
          <p className="text-pink-600 font-medium italic">
            Newatia ji ka special din bas aane hi wala hai...
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-timer mb-6">
          <div className="flex justify-center items-center space-x-3 mb-3">
            <Clock className="w-7 h-7 text-purple-500 animate-spin-slow" />
            <span className="text-sm text-gray-600">Counting every heartbeat...</span>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-4">
            {['Days', 'Hours', 'Mins', 'Secs'].map((label, idx) => {
              const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx];
              return (
                <div key={label} className="countdown-box bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-xl shadow-md">
                  <div className="countdown-number text-2xl font-bold text-pink-600">{value}</div>
                  <div className="countdown-label text-xs text-gray-600">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Romantic Message */}
        <div className="daily-message">
          <Heart className="w-6 h-6 text-red-500 mx-auto mb-2 animate-ping" />
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-sm text-gray-500">
          <p>🎂 Unlocks on <span className="font-semibold text-pink-600">07 October, 12:00 AM</span> 🎂</p>
          <p className="mt-2 italic">Sabar ka phal meetha hota hai jaanu 😘</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
