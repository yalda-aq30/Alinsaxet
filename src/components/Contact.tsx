import { MapPin, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="font-body text-lg text-charcoal-300">
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address */}
          <div className="group text-center p-8 rounded-lg border border-gold-500/10 bg-charcoal-900/30 hover:border-gold-500/30 hover:bg-charcoal-900/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 mb-6 group-hover:bg-gold-500/20 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display text-lg font-medium text-gold-400 mb-4">
              {t.contact.address}
            </h3>
            <p className="font-body text-sm text-charcoal-300 leading-relaxed">
             Parturi-kampaamo<br />
              Torikatu 8, Forssa<br />
              Finland
            </p>
          </div>

          {/* Phone */}
          <div className="group text-center p-8 rounded-lg border border-gold-500/10 bg-charcoal-900/30 hover:border-gold-500/30 hover:bg-charcoal-900/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 mb-6 group-hover:bg-gold-500/20 transition-colors duration-300">
              <Phone className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display text-lg font-medium text-gold-400 mb-4">
              {t.contact.phone}
            </h3>
            <a
              href="tel:+358401234567"
              className="font-body text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
            >
              +358 40 123 4567
            </a>
          </div>

          {/* Instagram */}
          <div className="group text-center p-8 rounded-lg border border-gold-500/10 bg-charcoal-900/30 hover:border-gold-500/30 hover:bg-charcoal-900/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 mb-6 group-hover:bg-gold-500/20 transition-colors duration-300">
              <Instagram className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="font-display text-lg font-medium text-gold-400 mb-4">
              {t.contact.followUs}
            </h3>
            <a
              href="https://www.instagram.com/alinsaxet/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
            >
              @alinsaxet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
