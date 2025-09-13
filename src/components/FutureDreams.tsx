import React, { useState } from 'react';
import { MapPin, Utensils, Film, Heart, Plane, Camera } from 'lucide-react';

interface Dream {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string;
  color: string;
}

const FutureDreams: React.FC = () => {
  const [openDream, setOpenDream] = useState<number | null>(null);

  const dreams: Dream[] = [
    {
      id: 1,
      title: 'Goa Trip 🏖️',
      icon: Plane,
      description: 'Beach, sunset, aur sirf hum dono!',
      details: 'Goa mein beach walks, candlelight dinner by the sea, aur bahut saare cute couple photos! Tu bikini mein, main shorts mein... perfect vacation vibes! 🌊☀️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      title: 'Candlelight Dinner 🍷',
      icon: Utensils,
      description: 'Romantic dinner date, just for my bacha!',
      details: 'Fancy restaurant mein table for two, candles, soft music, aur tera favorite food! Tu dress up karegi, main suit pehenunga... perfect gentleman ban jaunga! 🕯️✨',
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Movie Marathon 🍿',
      icon: Film,
      description: 'Cozy night in with popcorn aur cuddles!',
      details: 'Ghar mein blanket fort banayenge, tera favorite movies, unlimited popcorn, aur main tera personal pillow banunga! Netflix and chill level: Expert! 🎬💕',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 4,
      title: 'Adventure Trips 🏔️',
      icon: MapPin,
      description: 'Mountains, valleys, aur exploring together!',
      details: 'Himachal, Manali, Kashmir... jahan tu chahegi! Trekking, camping under stars, aur bahut saare adventure activities! Tu meri adventure buddy! 🏕️⛰️',
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 5,
      title: 'Photography Sessions 📸',
      icon: Camera,
      description: 'Couple photoshoots everywhere we go!',
      details: 'Professional photographer hire karenge, different locations mein shoots! Tu model banegi, main tera biggest fan! Instagram couple goals achieve karenge! 📷💖',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 6,
      title: 'Shaadi... Future Mein 😉💍',
      icon: Heart,
      description: 'Kabhi future mein... when the time is right!',
      details: 'Abhi toh bas dreams hain, but imagine... big fat Indian wedding, tu dulhan banegi, main dulha! Family, friends, aur bahut saara celebration! But yeh sab future ki baat hai... abhi toh aapka birthday enjoy karte hain! 👰🤵',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  const handleDreamClick = (dreamId: number) => {
    setOpenDream(openDream === dreamId ? null : dreamId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Future Dreams 🌟
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Humari future plans... click kar aur dekh kya kya karna hai! 😍
          </p>
          <p className="text-lg text-pink-600">
            Each door opens a new adventure for us! 🚪✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream) => {
            const Icon = dream.icon;
            const isOpen = openDream === dream.id;
            
            return (
              <div
                key={dream.id}
                className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleDreamClick(dream.id)}
              >
                {!isOpen ? (
                  // Closed Door/Window
                  <div className={`bg-gradient-to-br ${dream.color} rounded-3xl p-8 shadow-2xl text-white text-center door-hover h-80 flex flex-col justify-center`}>
                    <div className="door-animation">
                      <Icon className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold mb-4">{dream.title}</h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        {dream.description}
                      </p>
                      <p className="text-sm mt-4 opacity-75">Click to open! 🔓</p>
                    </div>
                    
                    {/* Door frame effect */}
                    <div className="absolute inset-4 border-4 border-white/30 rounded-2xl pointer-events-none"></div>
                  </div>
                ) : (
                  // Opened Door with Details
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-300 h-80 flex flex-col justify-center dream-open-animation">
                    <div className="text-center">
                      <Icon className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-bounce" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {dream.title}
                      </h3>
                      
                      <div className="dream-details bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-400">
                        <p className="text-gray-700 font-medium leading-relaxed text-sm">
                          {dream.details}
                        </p>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDream(null);
                        }}
                        className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg text-sm"
                      >
                        Close Door 🚪
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 animate-pulse mr-3" />
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Future Together 💕
            </h3>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Yeh sab dreams hain jo hum together fulfill karenge! Tu ready hai mere saath adventures ke liye? 😏
            </p>
            <p className="text-pink-600 mt-4 font-medium">
              "Life with you = endless possibilities! 🌈✨"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureDreams;
