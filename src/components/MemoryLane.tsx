import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Heart, Volume2, VolumeX } from 'lucide-react';

interface Memory {
  id: number;
  photo: string;
  caption: string;
  location: string;
  date: string;
}

const MemoryLane: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // softer bg music
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (err) {
          console.log("Autoplay blocked, user interaction required.");
        }
      };
      playAudio();
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const memories: Memory[] = [
    {
      id: 1,
      photo: '/1.jpg',
      caption: 'Humara yeh couple photo dekh ke dil khush ho jaata hai! 💕 kitni pyaari lagri hai!',
      location: 'Special Day Out',
      date: 'Together Moment'
    },
    {
      id: 2,
      photo: '/2.jpg',
      caption: 'CEO in Casual mood very bossy and pretty lol',
      location: 'Garden Vibes',
      date: 'Sunny Day'
    },
    {
      id: 3,
      photo: '/3.jpg',
      caption: 'Ye din yaad hai? our virtual valentines day lol',
      location: 'Fun Times',
      date: 'Valentine Day'
    },
    {
      id: 4,
      photo: '/4.jpg',
      caption: 'This pose is uff, mehendi bhi mast hai hehehe',
      location: 'Artistic Moment',
      date: 'Creative Day'
    },
    {
      id: 5,
      photo: '/5.jpg',
      caption: 'Teddy bear ke saath tu kitni adorable lag rahi hai! 🧸 This Pic is becoming my fav fr',
      location: 'Cozy Home',
      date: 'Cuddle Time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-20 relative">
      {/* Background Music */}
      <audio ref={audioRef} src="/birthday.mp3" autoPlay loop />

      {/* Toggle Mute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:scale-110 transition"
      >
        {isMuted ? <VolumeX className="w-6 h-6 text-pink-600" /> : <Volume2 className="w-6 h-6 text-pink-600" />}
      </button>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Memory Lane 📸
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Humari sabse pyaari yaadein... scroll kar aur relive kar! 💕
          </p>
        </div>

        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full shadow-lg timeline-glow"></div>

          <div className="space-y-12">
            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 timeline-dot-glow"></div>

                {/* Memory Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl memory-card-hover"
                    onClick={() => setSelectedMemory(selectedMemory === memory.id ? null : memory.id)}
                  >
                    {/* Enlarged Image Area */}
                    <div className="mb-4">
                      <img
                        src={memory.photo}
                        alt="Memory"
                        className="w-full max-h-[22rem] object-contain rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{memory.location}</span>
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        <span>{memory.date}</span>
                      </div>
                      
                      <p className="text-lg text-gray-700 font-medium leading-relaxed">
                        {memory.caption}
                      </p>
                    </div>

                    {selectedMemory === memory.id && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                        <div className="flex items-center justify-center">
                          <Heart className="w-6 h-6 text-red-500 animate-pulse mr-2" />
                          <p className="text-pink-600 font-medium">
                            Yeh memory meri favorite hai! 💖
                          </p>
                          <Heart className="w-6 h-6 text-red-500 animate-pulse ml-2" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200 inline-block">
            <p className="text-xl text-gray-700 font-medium">
              Aur bhi bahut saari memories baaki hain... 😏
            </p>
            <p className="text-lg text-pink-600 mt-2">
              But abhi ke liye yeh kaafi hai, next section mein chalo! 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
