import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// فرض می‌کنیم عکس‌های محصولات را هم در پوشه assets داری
import instagram1 from '../assets/ServicesImages/instagram1.png'; 
import client1 from '../assets/ServicesImages/client1.jpeg'; 
import instagram3 from '../assets/ServicesImages/instagram3.png'; 
import instagram4 from '../assets/ServicesImages/instagram4.png'; 
import instagram5 from '../assets/ServicesImages/instagram5.png'; 
import client2 from '../assets/ServicesImages/client2.jpeg'; 
import product1 from '../assets/ServicesImages/product1.png'; 
import product2 from '../assets/ServicesImages/product2.png'; 
import product3 from '../assets/ServicesImages/product3.png'; 
import product4 from '../assets/ServicesImages/product4.jpeg'; 
import product5 from '../assets/ServicesImages/product5.jpeg'; 
import product6 from '../assets/ServicesImages/product6.jpeg'; 
import product7 from '../assets/ServicesImages/product7.jpeg'; 
import product8 from '../assets/ServicesImages/product8.jpeg'; 
import product9 from '../assets/ServicesImages/product9.jpeg'; 
import product10 from '../assets/ServicesImages/product10.jpeg'; 
import product11 from '../assets/ServicesImages/product11.jpeg'; 

// ... عکس‌های خودت را اینجا import کن

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<'clients' | 'products'>('clients');

  const clientImages: GalleryImage[] = [
    { id: 1, src: instagram1, alt: 'Client 1' },
    { id: 2, src: client1, alt: 'Client 2' },
    { id: 3, src: instagram3, alt: 'Client 3' },
    { id: 4, src: instagram4, alt: 'Client 4' },
    { id: 5, src: instagram5, alt: 'Client 5' },
    { id: 6, src: client2, alt: 'Client 6' },
    // عکس‌های مشتریانت را اینجا اضافه کن
  ];

  const productImages: GalleryImage[] = [
    { id: 1, src: product1, alt: 'Product 1' },
    { id: 2, src: product2, alt: 'Product 2' },
    { id: 3, src: product3, alt: 'Product 3' },
    { id: 4, src: product4, alt: 'Product 4' },
    { id: 5, src: product5, alt: 'Product 5' },
    { id: 6, src: product6, alt: 'Product 6' },
    { id: 7, src: product7, alt: 'Product 7' },
    { id: 8, src: product8, alt: 'Product 8' },
    { id: 9, src: product9, alt: 'Product 9' },
    { id: 10, src: product10, alt: 'Product 10' },
    { id: 11, src: product11, alt: 'Product 11' },
  ];

  const currentImages = activeTab === 'clients' ? clientImages : productImages;

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-charcoal-900 to-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            {t.portfolio.title}
          </h2>
          
          {/* دکمه‌های تب */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('clients')}
              className={`px-8 py-2 border transition-all ${activeTab === 'clients' ? 'bg-gold-500 text-charcoal-950 border-gold-500' : 'text-gold-500 border-gold-500 hover:bg-gold-500/10'}`}
            >
              Clients
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2 border transition-all ${activeTab === 'products' ? 'bg-gold-500 text-charcoal-950 border-gold-500' : 'text-gold-500 border-gold-500 hover:bg-gold-500/10'}`}
            >
              Products
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gold-400" onClick={() => setSelectedImage(null)}><X className="w-8 h-8" /></button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}