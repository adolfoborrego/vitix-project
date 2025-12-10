'use client';
import { motion } from 'framer-motion';

const reasons = [
  { emoji: '😊', title: 'Tu Sonrisa', text: 'Tu sonrisa ilumina hasta mis días más oscuros' },
  { emoji: '💫', title: 'Tu Magia', text: 'Haces que cada momento sea especial y único' },
  { emoji: '🌟', title: 'Mi Favorita', text: 'Eres mi persona favorita en todo el mundo' },
  { emoji: '💝', title: 'Tu Bondad', text: 'Tu corazón me inspira a ser mejor cada día' },
  { emoji: '🎭', title: 'Tu Risa', text: 'Me haces reír como nadie más puede hacerlo' },
  { emoji: '🌺', title: 'Tu Belleza', text: 'Eres hermosa por dentro y por fuera' },
  { emoji: '🦋', title: 'Mi Mejor Yo', text: 'Contigo soy la mejor versión de mí mismo' },
  { emoji: '🌈', title: 'Tu Color', text: 'Traes alegría y color a mi vida' },
];

export default function LoveReasons() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, x: 10 }}
          className="bg-white/60 backdrop-blur-lg border-2 border-rose-200 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-rose-400 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-lg">
              {reason.emoji}
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-2">
                {reason.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {reason.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
