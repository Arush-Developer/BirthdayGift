import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack, Heart, Volume2 } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  dedication: string;
  duration: string;
  coverColor: string;
  file: string; // 🔥 add file path
}

const PlaylistPage: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist: Song[] = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      dedication: "Yeh song sunke tujhe yaad karta hun... tu sach mein perfect hai! 💕",
      duration: "4:23",
      coverColor: "from-pink-400 to-rose-500",
      file: "/songs/perfect.mp3"
    },
    {
      id: 2,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      dedication: "Bollywood ka best romantic song... just like our love story! 🎵",
      duration: "4:22",
      coverColor: "from-purple-400 to-indigo-500",
      file: "/songs/tumhiho.mp3"
    },
    {
      id: 3,
      title: "All of Me",
      artist: "John Legend",
      dedication: "All of me loves all of you... literally! Tu meri everything hai! 💖",
      duration: "4:29",
      coverColor: "from-blue-400 to-cyan-500",
      file: "/songs/allofme.mp3"
    },
    {
      id: 4,
      title: "Raabta",
      artist: "Arijit Singh",
      dedication: "Humara connection = Raabta! Filmy but true! 😍",
      duration: "4:18",
      coverColor: "from-green-400 to-teal-500",
      file: "/songs/raabta.mp3"
    }
  ];

  const currentSongData = playlist.find(song => song.id === currentSong);

  const handlePlayPause = (songId: number) => {
    if (currentSong === songId) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      const song = playlist.find(s => s.id === songId);
      if (song && audioRef.current) {
        audioRef.current.src = song.file;
        audioRef.current.play();
        setCurrentSong(songId);
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    if (currentSong === null) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong);
    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextSong = playlist[nextIndex];
    if (audioRef.current) {
      audioRef.current.src = nextSong.file;
      audioRef.current.play();
    }
    setCurrentSong(nextSong.id);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    if (currentSong === null) return;
    const currentIndex = playlist.findIndex(song => song.id === currentSong);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    const prevSong = playlist[prevIndex];
    if (audioRef.current) {
      audioRef.current.src = prevSong.file;
      audioRef.current.play();
    }
    setCurrentSong(prevSong.id);
    setIsPlaying(true);
  };

  // Auto move to next when song ends
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => handleNext();
    }
  }, [currentSong]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
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

        {/* Player UI (same as before)... */}
        {/* KEEP YOUR EXISTING PLAYER UI CODE HERE (album art, dedication, controls, etc.) */}

        {/* Hidden Audio Element */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default PlaylistPage;
