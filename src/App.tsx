import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-charcoal-950 font-body">
        <Header />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
