import React from 'react';
// Import original components (commented out)
// import Hero from './components/Hero';
// import ValutazioneBoxes from './components/ValutazioneBoxes';
// Import modern components
import ModernHero from './components/ModernHero';
import ModernValutazioneBoxes from './components/ModernValutazioneBoxes';
// import ChiSiamo from './components/ChiSiamo';
import ModernChiSiamo from './components/ModernChiSiamo';
// Import original components (commented out)
// import Servizi from './components/Servizi';
// import FasiVendita from './components/FasiVendita';
// import Recensioni from './components/Recensioni';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// Import modern components
import ModernServizi from './components/ModernServizi';
import ModernFasiVendita from './components/ModernFasiVendita';
import ModernRecensioni from './components/ModernRecensioni';
import ModernFAQ from './components/ModernFAQ';
import ModernFooter from './components/ModernFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Hero /> */}
      <ModernHero />
      <ModernValutazioneBoxes />
      {/* <ChiSiamo /> */}
      <ModernChiSiamo />
      {/* <Servizi /> */}
      <ModernServizi />
      <ModernRecensioni />
      {/* <FasiVendita /> */}
      <ModernFasiVendita />
      {/* <FAQ /> */}
      <ModernFAQ />
      {/* <Footer /> */}
      <ModernFooter />
    </div>
  );
}

export default App;