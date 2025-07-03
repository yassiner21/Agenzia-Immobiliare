import React from 'react';

const ModernChiSiamo = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-full animate-pulse-slow animation-delay-2000"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full animate-pulse-slow"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-modern">
                <img 
                  src="https://images.pexels.com/photos/7641829/pexels-photo-7641829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team Casa & Sogni" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="inline-block bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium mb-2">
                    Dal 2005 al tuo fianco
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:pl-12 transform transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Chi Siamo
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <span className="text-gray-900 font-medium">Casa & Sogni</span> è un'agenzia immobiliare che unisce esperienza, professionalità e un approccio personalizzato per guidarti in ogni fase del tuo percorso immobiliare.
              </p>
              
              <p className="leading-relaxed">
                Fondata nel 2005, la nostra agenzia si è affermata come punto di riferimento nel mercato immobiliare locale grazie alla profonda conoscenza del territorio e alla capacità di offrire soluzioni su misura per ogni cliente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 border-l-4 border-amber-400 pl-6 py-6 mb-8 rounded-r-2xl shadow-modern-sm hover-lift-sm transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">La nostra missione</h3>
                  <p className="text-gray-600">
                    Trasformare l'esperienza immobiliare in un percorso sereno e soddisfacente, guidando i nostri clienti verso le scelte più adatte alle loro esigenze.
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-blue-500 pl-6 py-6 mb-8 rounded-r-2xl shadow-modern-sm hover-lift-sm transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">I nostri valori</h3>
                  <p className="text-gray-600">
                    Trasparenza, professionalità e attenzione al cliente sono i principi che guidano ogni nostra azione, costruendo relazioni di fiducia durature.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <a 
                  href="#servizi" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-modern btn-modern-primary px-6 py-3 rounded-lg font-medium hover-lift-sm transition-all duration-300 flex items-center justify-center shadow-modern"
                >
                  Scopri i nostri servizi
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernChiSiamo;