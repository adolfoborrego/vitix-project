'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    date: '3 Jun 2023',
    title: 'Nuestro Primer Encuentro',
    description: 'El día que empezó nuestra historia de amor',
    emoji: '💘',
    color: 'rose'
  },
  {
    date: 'Jul 2023',
    title: 'Primeros Momentos Juntos',
    description: 'Descubriendo lo especial que eres',
    emoji: '🌹',
    color: 'pink'
  },
  {
    date: 'Ago 2023',
    title: 'Me Enamoré de Ti',
    description: 'Cuando supe que eras la indicada',
    emoji: '❤️',
    color: 'red'
  },
  {
    date: '2024',
    title: 'Aventuras Juntos',
    description: 'Cada momento a tu lado es especial',
    emoji: '✈️',
    color: 'rose'
  },
  {
    date: 'Hoy',
    title: '¡Tu Cumpleaños!',
    description: 'Celebrando a la persona más especial de mi vida',
    emoji: '🎂',
    color: 'pink'
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TimelineItem({ event, index }: { event: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative mb-20 md:mb-16">
      <div className={`flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
        >
          <div className="bg-white/50 backdrop-blur-md border-2 border-rose-200 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-rose-200/50 hover:scale-105 transition-all duration-300 relative">
            {/* Emoji fuera de la tarjeta */}
            <div className={`absolute -top-8 ${isLeft ? 'md:-right-8 right-1/2 translate-x-1/2 md:translate-x-0' : 'md:-left-8 left-1/2 -translate-x-1/2 md:translate-x-0'} bg-gradient-to-br from-rose-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl z-10`}>
              {event.emoji}
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-2">
                {event.title}
              </h3>
              <p className="text-sm md:text-base text-rose-500 font-semibold mb-3">
                📅 {event.date}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Círculo central en la línea */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-rose-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-20"
      />
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Línea vertical central - solo visible en desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 via-pink-300 to-red-300 transform -translate-x-1/2" />
      
      {timelineEvents.map((event, index) => (
        <TimelineItem key={index} event={event} index={index} />
      ))}
    </div>
  );
}
