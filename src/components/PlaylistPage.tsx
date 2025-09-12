import React, { useState } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack, Heart, Volume2 } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  dedication: string;
  duration: string;
  coverColor: string;
}

const PlaylistPage: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist: Song[] = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      dedication: "Yeh song sunke tujhe yaad karta hun... tu sach mein perfect hai! 💕",
      duration: "4:23",
      coverColor: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      dedication: "Bollywood ka best romantic song... just like our love story! 🎵",
      duration: "4:22",
      coverColor: "from-purple-400 to-indigo-500"
    },
    {
      id: 3,
      title: "All of Me",
      artist: "John Legend",
      dedication: "All of me loves all of you... literally! Tu meri everything hai! 💖",
      duration: "4:29",
      coverColor: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Raabta",
      artist: "Arijit Singh",
      dedication: "Humara connection = Raabta! Filmy but true! 😍",
      duration: "4:18",
      coverColor: "from-green-400 to-teal-500"
    }
  ];

  const handlePlayPause = (songId: number) => {
    if (currentSong === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(songId);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentSong === null) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex].id);
  };

  const handlePrevious = () => {
    if (currentSong === null) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentSong(playlist[prevIndex].id);
  };

  const currentSongData = playlist.find(song => song.id === currentSong);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            Saanvi's Special Playlist 🎶
          </h2>
          <p className="text-xl text-purple-200 font-medium mb-4">
            Made with love by Arush ❤️
          </p>
          <p className="text-lg text-pink-300">
            {playlist.length} songs specially curated for my CEO! 👑
          </p>
        </div>

        {/* Music Player Interface */}
        <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-400 mb-8">
          {currentSongData ? (
            <div className="text-center">
              {/* Album Art */}
              <div className={`w-48 h-48 mx-auto mb-6 bg-gradient-to-br ${currentSongData.coverColor} rounded-2xl shadow-2xl flex items-center justify-center`}>
                <Music className="w-24 h-24 text-white" />
              </div>
              
              {/* Song Info */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentSongData.title}
              </h3>
              <p className="text-lg text-purple-300 mb-4">
                {currentSongData.artist}
              </p>
              
              {/* Dedication */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-md mx-auto">
                <p className="text-pink-200 italic leading-relaxed">
                  "{currentSongData.dedication}"
                </p>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-center space-x-6 mb-4">
                <button
                  onClick={handlePrevious}
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <SkipBack className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={() => handlePlayPause(currentSongData.id)}
                  className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
                
                <button
                  onClick={handleNext}
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <SkipForward className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="flex items-center space-x-4 text-sm text-purple-300">
                <span>0:00</span>
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full w-1/3"></div>
                </div>
                <span>{currentSongData.duration}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-white">
              <Music className="w-24 h-24 mx-auto mb-6 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Choose a Song</h3>
              <p className="text-purple-300">Select any song from the playlist below! 🎵</p>
            </div>
          )}
        </div>

        {/* Playlist */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Playlist 📝
          </h3>
          
          {playlist.map((song, index) => (
            <div
              key={song.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border transition-all cursor-pointer ${
                currentSong === song.id
                  ? 'border-pink-400 bg-white/20'
                  : 'border-white/20 hover:border-white/40 hover:bg-white/15'
              }`}
              onClick={() => handlePlayPause(song.id)}
            >
              <div className="flex items-center space-x-4">
                {/* Track Number / Play Button */}
                <div className="flex-shrink-0">
                  {currentSong === song.id && isPlaying ? (
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Volume2 className="w-6 h-6 text-white animate-pulse" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  )}
                </div>
                
                {/* Song Info */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">
                    {song.title}
                  </h4>
                  <p className="text-purple-300 mb-2">
                    {song.artist}
                  </p>
                  <p className="text-sm text-pink-200 italic">
                    {song.dedication}
                  </p>
                </div>
                
                {/* Duration & Heart */}
                <div className="flex-shrink-0 text-right">
                  <p className="text-purple-300 text-sm mb-2">
                    {song.duration}
                  </p>
                  <Heart className="w-5 h-5 text-red-400 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playlist Note */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-400 max-w-2xl mx-auto">
            <Music className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Playlist Creator's Note 📝
            </h3>
            <p className="text-purple-200 font-medium leading-relaxed">
              Har song specially pick kiya hai tere liye! Each song reminds me of different moments with you. 
              Music sunke mujhe tu yaad aati hai... always! 💕
            </p>
            <p className="text-pink-300 mt-4 text-sm">
              - Your Personal DJ, Arush 🎧💖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
