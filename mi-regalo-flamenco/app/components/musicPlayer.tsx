'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/romantic-song.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/30"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {isPlaying ? '🎵' : '🎶'}
        </motion.div>
      </motion.button>
    </>
  );
}
