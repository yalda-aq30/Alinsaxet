import { Scissors } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/instagram2.png"
                alt="Alin Saxet Studio"
                className="w-full h-[400px] sm:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-500">
              <Scissors className="w-5 h-5" />
              <span className="font-body text-sm uppercase tracking-widest">
                {t.about.description}
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight">
              {t.about.title}
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-gold-400 to-transparent" />

            <p className="font-body text-base text-charcoal-300 leading-relaxed">
              {t.about.paragraph1}
            </p>

            <p className="font-body text-base text-charcoal-300 leading-relaxed">
              {t.about.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
