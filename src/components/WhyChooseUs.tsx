import { Sparkles, Users, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t.whyChooseUs.quality.title,
      description: t.whyChooseUs.quality.description,
    },
    {
      icon: Users,
      title: t.whyChooseUs.staff.title,
      description: t.whyChooseUs.staff.description,
    },
    {
      icon: Heart,
      title: t.whyChooseUs.atmosphere.title,
      description: t.whyChooseUs.atmosphere.description,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            {t.whyChooseUs.title}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-lg border border-gold-500/10 bg-charcoal-900/50 hover:border-gold-500/30 hover:bg-charcoal-900/80 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/10 mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold-400" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium text-gold-400 mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-charcoal-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-500/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
