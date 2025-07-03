import React from 'react';
import { ChevronDown } from 'lucide-react';
import Navigation from './Navigation';

const Hero = () => {
  const scrollToValutazione = () => {
    document.getElementById('valutazione')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Navigation />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Bella casa moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
          La tua casa racconta
          <span className="block font-medium">la tua storia</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Siamo qui per ascoltarla e darle il valore che merita
        </p>
        <button
          onClick={scrollToValutazione}
          className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Richiedi Valutazione Gratuita
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;