'use client';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Círculos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 w-32 h-32 bg-rose-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="text-center space-y-8 z-10 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-8xl mb-4"
        >
          💕
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-rose-600"
        >
          ¡Feliz Cumpleaños!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-4xl text-gray-700 font-medium h-20"
        >
          <Typewriter
            options={{
              strings: [
                'Mi amor ❤️',
                'Mi vida 💕',
                'Mi todo ✨',
                'Mi princesa 👑',
                'Mi felicidad 🌟'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-8"
        >
          <div className="animate-bounce-slow text-4xl">
            ↓
          </div>
          <p className="text-gray-600 mt-2">Desplázate para ver tu sorpresa</p>
        </motion.div>
      </div>
    </section>
  );
}
