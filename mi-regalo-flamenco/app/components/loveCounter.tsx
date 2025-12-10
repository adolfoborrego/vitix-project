'use client';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function LoveCounter() {
  // Cambia esta fecha por la fecha en que empezaron su relación
    const startDate = new Date('2023-06-03');
  const today = new Date();
  const daysTogether = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const stats = [
    { value: daysTogether, label: 'Días Juntos', emoji: '💕' },
    { value: Math.floor(daysTogether / 7), label: 'Semanas de Amor', emoji: '🌹' },
    { value: Math.floor(daysTogether / 30), label: 'Meses Especiales', emoji: '✨' },
    { value: 1000000, label: 'Razones para Amarte', emoji: '❤️' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          <div className="text-5xl mb-3">{stat.emoji}</div>
          <div className="text-4xl font-bold text-rose-600 mb-2">
            <CountUp end={stat.value} duration={2.5} separator="," />
          </div>
          <p className="text-gray-700 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
