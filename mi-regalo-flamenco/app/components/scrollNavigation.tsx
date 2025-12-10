'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Inicio', emoji: '💕' },
  { id: 'counter', label: 'Números', emoji: '📊' },
  { id: 'message', label: 'Mensaje', emoji: '💌' },
  { id: 'timeline', label: 'Historia', emoji: '📅' },
  { id: 'gallery', label: 'Fotos', emoji: '📸' },
  { id: 'reasons', label: 'Razones', emoji: '💝' },
  { id: 'gift', label: 'Regalo', emoji: '🎁' },
];

export default function ScrollNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {sections.map(({ id, label, emoji }) => (
        <motion.button
          key={id}
          onClick={() => scrollToSection(id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`relative group transition-all duration-300 ${
            activeSection === id ? 'scale-125' : 'scale-100'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-rose-500 shadow-lg shadow-rose-300'
                : 'bg-rose-300 hover:bg-rose-400'
            }`}
          />
          
          {/* Tooltip */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <div className="bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-xl border border-rose-200">
              <span className="text-sm font-semibold text-gray-800">
                {emoji} {label}
              </span>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
