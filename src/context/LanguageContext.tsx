import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface Translations {
  nav: {
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    paragraph1: string;
    paragraph2: string;
  };
  whyChooseUs: {
    title: string;
    quality: {
      title: string;
      description: string;
    };
    staff: {
      title: string;
      description: string;
    };
    atmosphere: {
      title: string;
      description: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    haircut: {
      title: string;
      description: string;
    };
    styling: {
      title: string;
      description: string;
    };
    coloring: {
      title: string;
      description: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    followUs: string;
  };
  footer: {
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  fi: {
    nav: {
      about: 'Tietoa meistä',
      services: 'Palvelut',
      portfolio: 'Galleria',
      contact: 'Yhteystiedot',
    },
    hero: {
      title: 'Tervetuloa Alin Saxetiin',
      subtitle: 'Tyylisi, Meidän Intohimomme',
      cta: 'Tutustu palveluihin',
    },
    about: {
      title: 'Tietoa meistä',
      description: 'Löydä tarinamme',
      paragraph1: 'Alin Saxet on perustettu intohimosta hiusten kauneuteen ja laatuun. Olemme ammattitaitoinen hiusstudio, joka tarjoaa upeita hiustenleikkaus-, muotoilu- ja värjäyspalveluja. Meidän tavoitteemme on auttaa jokaista asiakasta tuntemaan itsensä kauniiksi ja itsevarmaksi.',
      paragraph2: 'Vuosien kokemuksella ja jatkuvalla koulutuksella, meidän tiimimme pysyy ajan tasalla uusimmista trendeistä ja tekniikoista. Tulostaan ja kokeile itse – annamme hiustesi loistaa.',
    },
    whyChooseUs: {
      title: 'Miksi valita meidät?',
      quality: {
        title: 'Laadukkaat tuotteet',
        description: 'Käytämme vain parhaita, hiuksille turvallisia tuotteita ja ammattilaisvälineitä.',
      },
      staff: {
        title: 'Ammattitaitoinen henkilökunta',
        description: 'Kokeneet stylistimme ovat intohimoisia työstään ja pysyvät ajan tasalla uusimmista trendeistä.',
      },
      atmosphere: {
        title: 'Viihtyisä tunnelma',
        description: 'Moderni ja rentouttava studio, jossa voit nauttia hoitokokemuksesta täysin siemarin.',
      },
    },
    services: {
      title: 'Palvelut',
      subtitle: 'Ammattitaitoisia hiustenhoitopalveluja',
      haircut: {
        title: 'Hiustenleikkaukset',
        description: 'Täydellinen leikkaus, joka sopii kasvojesi muotoon ja elämäntyyliisi. Konsultointi sisältyy aina palveluumme.',
      },
      styling: {
        title: 'Muotoilu',
        description: 'Juhla-, morsiam-, tai arkimuotoilua – me luomme juuri sinulle sopivan lookin joka tilanteeseen.',
      },
      coloring: {
        title: 'Värjäykset',
        description: 'Hienovaraisista korostuksista dramaattisiin värimuutoksiin – saat upean värin, joka kestää.',
      },
    },
    portfolio: {
      title: 'Galleria',
      subtitle: 'Tutustu töihimme',
    },
    contact: {
      title: 'Yhteystiedot',
      subtitle: 'Tule käymään tai ota yhteyttä',
      address: 'Osoite',
      phone: 'Puhelin',
      followUs: 'Seuraa meitä',
    },
    footer: {
      copyright: '© 2026 Alin Saxet. Kaikki oikeudet pidätetään.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      portfolio: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Welcome to Alin Saxet',
      subtitle: 'Your Style, Our Passion',
      cta: 'Explore Our Services',
    },
    about: {
      title: 'About Us',
      description: 'Discover Our Story',
      paragraph1: 'Alin Saxet was founded out of a passion for hair beauty and quality. We are a professional hair studio offering excellent hair cutting, styling, and coloring services. Our goal is to help every client feel beautiful and confident.',
      paragraph2: 'With years of experience and continuous education, our team stays up-to-date with the latest trends and techniques. Come visit us and experience it yourself – let your hair shine.',
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      quality: {
        title: 'High-Quality Products',
        description: 'We use only the finest, hair-friendly products and professional tools.',
      },
      staff: {
        title: 'Professional Staff',
        description: 'Our experienced stylists are passionate about their craft and stay current with the latest trends.',
      },
      atmosphere: {
        title: 'Comfortable Atmosphere',
        description: 'A modern and relaxing studio where you can fully enjoy your treatment experience.',
      },
    },
    services: {
      title: 'Services',
      subtitle: 'Professional Hair Care Services',
      haircut: {
        title: 'Haircuts',
        description: 'A perfect cut that suits your face shape and lifestyle. Consultation is always included.',
      },
      styling: {
        title: 'Styling',
        description: 'Party, bridal, or everyday styling – we create the perfect look for you in any situation.',
      },
      coloring: {
        title: 'Coloring',
        description: 'From subtle highlights to dramatic color changes – get a beautiful color that lasts.',
      },
    },
    portfolio: {
      title: 'Gallery',
      subtitle: 'Explore Our Work',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Visit us or get in touch',
      address: 'Address',
      phone: 'Phone',
      followUs: 'Follow Us',
    },
    footer: {
      copyright: '© 2026 Alin Saxet. All rights reserved.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
