import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  dedication: string;
  duration: string;
  coverColor: string;
  file: string; // path to mp3
}

const PlaylistPage: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist: Song[] = [
    {
      id: 1,
      title: "Jhol",
      artist: "Saani's Eyes",
      dedication: "uff... sachi mai teri yaad aa jati ye sunke 💕",
      duration: "1:43",
      coverColor: "from-pink-400 to-rose-500",
      file: "/songs/perfect.mp3",
    },
    {
      id: 2,
      title: "Mann Mera",
      artist: "Brain",
      dedication: "This song gives another Vibe isn't",
      duration: "4:22",
      coverColor: "from-purple-400 to-indigo-500",
      file: "/songs/tumhiho.mp3",
    },
    {
      id: 3,
      title: "Dil ka jo Haal",
      artist: "Heart",
      dedication: "sach mai how do i express mere dil ka haal 💖",
      duration: "4:29",
      coverColor: "from-blue-400 to-cyan-500",
      file: "/songs/allofme.mp3",
    },
    {
      id: 4,
      title: "Raabta",
      artist: "Arijit Singh",
      dedication: "Humara connection = Raabta! Filmy but true! 😍",
      duration: "4:18",
      coverColor: "from-green-400 to-teal-500",
      file: "/songs/raabta.mp3",
    },
  ];

  const currentSongData = playlist.find((song) => song.id === currentSong);

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
      const song = playlist.find((s) => s.id === songId);
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
    const currentIndex = playlist.findIndex((song) => song.id === currentSong);
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
    const currentIndex = playlist.findIndex((song) => song.id === currentSong);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    const prevSong = playlist[prevIndex];
    if (audioRef.current) {
      audioRef.current.src = prevSong.file;
      audioRef.current.play();
    }
    setCurrentSong(prevSong.id);
    setIsPlaying(true);
  };

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

        {/* Songs List */}
        <div className="grid gap-6">
          {playlist.map((song) => (
            <div
              key={song.id}
              className={`p-6 rounded-2xl bg-gradient-to-r ${song.coverColor} shadow-lg flex items-center justify-between`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{song.title}</h3>
                <p className="text-sm text-white/80">{song.artist}</p>
                <p className="mt-2 text-white italic">{song.dedication}</p>
                <p className="text-xs text-white/60 mt-1">{song.duration}</p>
              </div>
              <button
                onClick={() => handlePlayPause(song.id)}
                className="bg-white text-purple-700 rounded-full p-4 shadow-md hover:scale-110 transition"
              >
                {currentSong === song.id && isPlaying ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default PlaylistPage;

