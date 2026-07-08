import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const prices = [
    t.pricing.items.menHaircut,
    t.pricing.items.womenHaircut,
    t.pricing.items.eyelashTint,
    t.pricing.items.threading,
    t.pricing.items.beardShave,
  ];

  return (
    <section id="pricing" className="py-24 bg-charcoal-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display text-4xl text-white text-center mb-12">{t.pricing.title}</h2>
        <div className="bg-charcoal-900 p-8 rounded-lg border border-gold-500/20">
          {prices.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-charcoal-800 last:border-0">
              <span className="text-charcoal-300 font-body">{item.name}</span>
              <span className="text-gold-400 font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}