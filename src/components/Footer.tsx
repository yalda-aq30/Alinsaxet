import { useLanguage } from '../context/LanguageContext';
import { Scissors } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-charcoal-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Scissors className="w-5 h-5 text-gold-500" />
            <span className="font-display text-xl text-gold-400">
              Alin Saxet
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-charcoal-400 text-center">
            {t.footer.copyright} 
          </p>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/alinsaxet/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            @alinsaxet
          </a>
        </div>
      </div>
    </footer>
  );
}
