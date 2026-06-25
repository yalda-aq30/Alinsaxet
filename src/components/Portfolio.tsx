import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import instagram1 from '../assets/ServicesImages/instagram1.png';  
import two from '../assets/ServicesImages/instagram2.png';  
import three from '../assets/ServicesImages/instagram3.png';  
import four from '../assets/ServicesImages/instagram4.png';  
import five from '../assets/ServicesImages/instagram5.png';  
import six from '../assets/ServicesImages/instagram6.png';  


interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: instagram1,
      alt: 'Hair transformation 1',
    },
    {
      id: 2,
      src: two,
      alt: 'Hair transformation 2',
    },
    {
      id: 3,
      src: three,
      alt: 'Hair transformation 3',
    },
    {
      id: 4,
      src: four,
      alt: 'Hair transformation 4',
    },
    {
      id: 5,
      src: five,
      alt: 'Hair transformation 5',
    },
    {
      id: 6,
      src: six,
      alt: 'Hair transformation 6',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-charcoal-900 to-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            {t.portfolio.title}
          </h2>
          <p className="font-body text-lg text-charcoal-300">
            {t.portfolio.subtitle}
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-display text-lg text-gold-400 border border-gold-400/30 px-6 py-2 rounded-sm bg-charcoal-950/80">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-gold-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
