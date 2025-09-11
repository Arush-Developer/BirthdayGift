import React, { useState } from 'react';
import { Clock, MapPin, Heart } from 'lucide-react';

interface Memory {
  id: number;
  photo: string;
  caption: string;
  location: string;
  date: string;
}

const MemoryLane: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const memories: Memory[] = [
    {
      id: 1,
      photo: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Yeh din = pura filmy scene 🎥 Tu kitni cute lag rahi thi!',
      location: 'Coffee Shop',
      date: 'First Date'
    },
    {
      id: 2,
      photo: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Mereko yeh moment abhi bhi yaad hai 😍 Tera hasso ka magic!',
      location: 'Park Walk',
      date: 'Random Tuesday'
    },
    {
      id: 3,
      photo: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Iss selfie mein tu sabse zyada glow kar rahi hai ✨',
      location: 'Our Favorite Spot',
      date: 'Weekend Fun'
    },
    {
      id: 4,
      photo: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Tu meri sunshine hai, literally! ☀️ Look at that smile!',
      location: 'Beach Day',
      date: 'Summer Vibes'
    },
    {
      id: 5,
      photo: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'CEO mode ON! 👩‍💼 Tu boss lady lagti hai yahan',
      location: 'Office Photoshoot',
      date: 'Professional Day'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-20">
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
                    <div className="aspect-w-16 aspect-h-12 mb-4">
                      <img
                        src={memory.photo}
                        alt="Memory"
                        className="w-full h-48 object-cover rounded-xl"
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
