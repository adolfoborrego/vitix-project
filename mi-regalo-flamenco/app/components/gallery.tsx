'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/photos/foto1.jpg', alt: 'Nosotros 1' },
  { src: '/photos/foto2.jpg', alt: 'Nosotros 2' },
  { src: '/photos/foto3.jpg', alt: 'Nosotros 3' },
  { src: '/photos/foto4.jpg', alt: 'Nosotros 4' },
  { src: '/photos/foto5.jpg', alt: 'Nosotros 5' },
  { src: '/photos/foto6.jpg', alt: 'Nosotros 6' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <p className="text-white font-semibold">Ver más</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal mejorado */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
              />
              
              {/* Botones de navegación */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-4 rounded-full transition-all"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-4 rounded-full transition-all"
              >
                →
              </button>
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white px-4 py-2 rounded-full transition-all"
              >
                Cerrar ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
