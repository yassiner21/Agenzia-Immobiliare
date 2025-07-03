import React from 'react';
import Navigation from './Navigation';

const ModernHero = () => {
  const scrollToValutazione = () => {
    const element = document.getElementById('valutazione');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 animate-fade-in">
            Casa & Sogni
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto animate-fade-in">
            Trasformiamo le case in sogni e i sogni in realtà.
            La tua esperienza immobiliare su misura, guidata da esperti del settore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <button 
              onClick={scrollToValutazione}
              className="btn-modern btn-modern-primary px-8 py-4 rounded-xl text-lg shadow-modern-lg hover-lift"
            >
              Richiedi una valutazione gratuita
            </button>
            <button 
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-modern btn-modern-secondary px-8 py-4 rounded-xl text-lg shadow-modern hover-lift"
            >
              Scopri i nostri servizi
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default ModernHero;