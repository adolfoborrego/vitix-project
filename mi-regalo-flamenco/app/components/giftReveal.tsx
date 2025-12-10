'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function GiftReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 300}
          height={typeof window !== 'undefined' ? window.innerHeight : 200}
          numberOfPieces={500}
          recycle={false}
          colors={['#ff6b9d', '#ffc2d1', '#ff1744', '#f50057', '#ff4081']}
        />
      )}

      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-rose-600 animate-pulse-slow">
            Tengo algo muy especial para ti...
          </h3>
          <motion.button
            onClick={handleOpen}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <div className="text-9xl animate-float cursor-pointer filter drop-shadow-2xl">
              🎁
            </div>
            <motion.p
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xl md:text-2xl text-gray-700 font-semibold"
            >
              ¡Toca para abrir tu regalo!
            </motion.p>
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center space-y-8 w-full max-w-4xl"
        >
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-rose-600"
          >
            ¡Tu Traje Flamenco! 💃✨
          </motion.h3>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="relative w-full aspect-square md:aspect-video mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/photos/traje-flamenco.png"
              alt="Tu hermoso traje flamenco"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Tarjeta glassmorphism */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <p className="text-xl md:text-3xl text-gray-800 font-medium leading-relaxed">
              Para la mujer más hermosa del mundo 🌹
              <br />
              <br />
              Porque mereces brillar como la estrella que eres.
              Este traje flamenco es para que luzcas espectacular
              y bailes con toda la alegría que llevas dentro.
              <br />
              <br />
              ¡Feliz cumpleaños, mi amor! ❤️✨
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
