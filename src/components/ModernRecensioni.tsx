import React, { useState } from 'react';

const ModernRecensioni = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const recensioni = [
    {
      nome: 'Maria Rossi',
      rating: 5,
      testo: 'Professionalità e competenza eccezionali. Hanno venduto la mia casa in tempi record al prezzo migliore. Consiglio vivamente!',
      immobile: 'Appartamento, Milano',
      image: '/testimonial-1.jpg' // Placeholder for image path
    },
    {
      nome: 'Giuseppe Bianchi',
      rating: 5,
      testo: 'Servizio impeccabile dall\'inizio alla fine. Mi hanno seguito passo passo con pazienza e dedizione. Esperienza fantastica!',
      immobile: 'Villa, Roma',
      image: '/testimonial-2.jpg' // Placeholder for image path
    },
    {
      nome: 'Anna Verdi',
      rating: 5,
      testo: 'Grazie al loro aiuto ho trovato la casa dei miei sogni. Hanno capito esattamente quello che cercavo e mi hanno guidato perfettamente.',
      immobile: 'Attico, Firenze',
      image: '/testimonial-3.jpg' // Placeholder for image path
    },
    {
      nome: 'Marco Ferrari',
      rating: 5,
      testo: 'Team di veri professionisti. La valutazione è stata precisa e il servizio di home staging ha fatto la differenza. Straordinari!',
      immobile: 'Villetta, Torino',
      image: '/testimonial-4.jpg' // Placeholder for image path
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon 
        key={index} 
        filled={index < rating}
      />
    ));
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === recensioni.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? recensioni.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="recensioni" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 -translate-x-1/3 -translate-y-1/3 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra migliore referenza
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured testimonial */}
          <div className="bg-white rounded-2xl shadow-modern p-8 md:p-12 mb-12 relative overflow-hidden hover-lift transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 -mt-16 -mr-16 bg-amber-50 rounded-full opacity-70 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 bg-blue-50 rounded-full opacity-70 animate-pulse-slow animation-delay-2000"></div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10 transform transition-all duration-300">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden shadow-modern-sm border-2 border-white relative">
                  {/* If you have actual images, use them here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-3xl font-medium shadow-lg">
                      {recensioni[activeIndex].nome.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-1">
                    {renderStars(recensioni[activeIndex].rating)}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <QuoteIcon className="mb-6" />
                
                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 italic">
                  "{recensioni[activeIndex].testo}"
                </p>
                
                <div>
                  <div className="font-medium text-xl text-gray-900">{recensioni[activeIndex].nome}</div>
                  <div className="text-gray-500">{recensioni[activeIndex].immobile}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-between">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-modern-sm flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover-lift-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </button>
            
            <div className="flex items-center space-x-3">
              {recensioni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === activeIndex ? 'bg-amber-500 w-6 animate-pulse-slow' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-modern-sm flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all duration-300 hover-lift-sm"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 px-6 py-3 rounded-full shadow-modern">
            <StarFilledIcon />
            <span className="font-medium">4.9/5 su oltre 200 recensioni</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom SVG icons
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M9.99984 1.66675L12.5748 6.88341L18.3332 7.72508L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72508L7.42484 6.88341L9.99984 1.66675Z" 
      fill={filled ? "#FBBF24" : "none"}
      stroke={filled ? "#FBBF24" : "#D1D5DB"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarFilledIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M9.99984 1.66675L12.5748 6.88341L18.3332 7.72508L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72508L7.42484 6.88341L9.99984 1.66675Z" 
      fill="#FBBF24"
      stroke="#FBBF24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M14.4 24H8V17.6H14.4V24ZM28.8 24H22.4V17.6H28.8V24ZM14.4 38.4V30.4C14.4 28.9913 13.8414 27.6399 12.8412 26.6397C11.8409 25.6396 10.4896 25.081 9.08097 25.081H8V20.8C8 18.1878 9.03999 15.6823 10.8903 13.832C12.7406 11.9817 15.2461 10.9417 17.8583 10.9417V14.4C16.0513 14.4 14.3185 15.1164 13.0183 16.3916C11.718 17.6669 11.0016 19.3996 11.0016 21.2067H14.4V38.4ZM28.8 38.4V30.4C28.8 28.9913 28.2414 27.6399 27.2412 26.6397C26.2409 25.6396 24.8896 25.081 23.481 25.081H22.4V20.8C22.4 18.1878 23.44 15.6823 25.2903 13.832C27.1406 11.9817 29.6461 10.9417 32.2583 10.9417V14.4C30.4513 14.4 28.7185 15.1164 27.4183 16.3916C26.118 17.6669 25.4016 19.3996 25.4016 21.2067H28.8V38.4Z" 
      fill="#E5E7EB"
    />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M15 18L9 12L15 6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M9 18L15 12L9 6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default ModernRecensioni;