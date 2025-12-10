import HeroSection from './components/heroSection';
import Gallery from './components/gallery';
import GiftReveal from './components/giftReveal';
import Timeline from './components/timeline';
import LoveCounter from './components/loveCounter';
import LoveReasons from './components/loveReasons';
import MusicPlayer from './components/musicPlayer';
import ParticleBackground from './components/particleBackground';
import ScrollNavigation from './components/scrollNavigation';
export default function Home() {
  return (
    <>
      <ParticleBackground />
      <MusicPlayer />
      <ScrollNavigation />
      
      <main className="bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        {/* Contador de Días Juntos */}
        <section id="counter" className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-16">
              Nuestro Amor en Números 💕
            </h2>
            <LoveCounter />
          </div>
        </section>

        {/* Mensaje Personal */}
        <section id="message" className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-4xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-rose-600 mb-8 text-center">
              Para Ti, Mi Amor ❤️
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p className="text-center">
                Hoy es un día muy especial, porque celebramos la existencia de la persona 
                más maravillosa que he conocido.
              </p>
              <p className="text-center">
                Cada día a tu lado es un regalo que atesoro en mi corazón. 
                Tu sonrisa ilumina mis días más oscuros, tu risa es mi melodía favorita, 
                y tu amor es mi mayor bendición.
              </p>
              <p className="text-center font-semibold text-2xl text-rose-600">
                Te amo más de lo que las palabras pueden expresar. 
              </p>
              <p className="text-center text-xl">
                ¡Feliz cumpleaños! 🎂✨💕
              </p>
            </div>
          </div>
        </section>

        {/* Timeline - AHORA OCUPA TODO EL ESPACIO QUE NECESITA */}
        <section id="timeline" className="py-24 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-20">
            Nuestra Historia de Amor 💑
          </h2>
          <Timeline />
        </section>

        {/* Galería de Fotos - AHORA OCUPA TODO EL ESPACIO QUE NECESITA */}
        <section id="gallery" className="py-24 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-12">
            Nuestros Momentos Especiales 📸
          </h2>
          <div className="max-w-6xl mx-auto">
            <Gallery />
          </div>
        </section>

        {/* Razones por las que te amo */}
        <section id="reasons" className="min-h-screen py-24 px-4 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-8">
            Por Qué Te Amo 💝
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
            Toca cada tarjeta para descubrir una razón por la que eres tan especial para mí
          </p>
          <LoveReasons />
        </section>

        {/* Revelación del Regalo */}
        <section id="gift" className="min-h-screen">
          <GiftReveal />
        </section>

        {/* Footer */}
        <footer className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl">
            <p className="text-2xl md:text-3xl font-bold text-rose-600 mb-4">
              Gracias por existir ✨
            </p>
            <p className="text-lg text-gray-700 mb-2">
              Por hacerme el hombre más feliz del mundo
            </p>
            <p className="text-lg text-gray-700">
              Por ser mi compañera, mi amor, mi todo
            </p>
            <div className="text-6xl mt-6 animate-pulse-slow">
              ❤️
            </div>
            <p className="text-gray-600 mt-8">
              Con todo mi amor • {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
