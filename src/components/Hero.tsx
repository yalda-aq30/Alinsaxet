import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/background.jpeg')`,
          backgroundPosition: 'center', // حالت پیش‌فرض برای دسکتاپ
        }}
      >
        {/* با استایلِ این‌لاین برای موبایل بازنویسی می‌کنیم */}
        <style>{`
          @media (max-width: 640px) {
            .mobile-bg-pos { background-position: 70% center !important; }
          }
        `}</style>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/80 mobile-bg-pos" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide leading-tight animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold-400 mb-10 italic tracking-wide">
          {t.hero.subtitle}
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-charcoal-950 font-body text-sm font-semibold uppercase tracking-widest rounded-sm hover:from-gold-500 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/20"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
