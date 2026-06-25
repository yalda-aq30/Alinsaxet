import { useLanguage } from '../context/LanguageContext';

import haircut from '../assets/ServicesImages/Haircut.jpg';  
import styling from '../assets/ServicesImages/Styling.jpg';  




export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.haircut.title,
      description: t.services.haircut.description,
      image: haircut, 
    },
    {
      title: t.services.styling.title,
      description: t.services.styling.description,
      image: styling,
    },
    {
      title: t.services.coloring.title,
      description: t.services.coloring.description,
      image: 'https://images.pexels.com/photos/3993314/pexels-photo-3993314.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            {t.services.title}
          </h2>
          <p className="font-body text-lg text-charcoal-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-charcoal-900 shadow-xl shadow-charcoal-900/50 hover:shadow-gold-500/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="font-display text-2xl font-medium text-gold-400 mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 rounded-lg transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
