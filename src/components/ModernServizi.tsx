import React, { useState } from 'react';
import Modal from './Modal';

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  detailedDescription: string;
  features: string[];
}

const ModernServizi = () => {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);

  const services: ServiceProps[] = [
    {
      id: 1,
      title: 'Valutazione Immobiliare',
      description: 'Analisi approfondita del valore di mercato del tuo immobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20V8H2z"></path>
        <path d="M6 4v4"></path>
        <path d="M18 4v4"></path>
        <circle cx="8" cy="14" r="2"></circle>
        <circle cx="16" cy="14" r="2"></circle>
        <path d="M8 14h8"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
      detailedDescription: 'La nostra valutazione immobiliare si basa su un\'analisi approfondita del mercato locale, delle caratteristiche specifiche dell\'immobile e delle tendenze attuali. Utilizziamo strumenti avanzati e la nostra esperienza per determinare il valore ottimale del tuo immobile.',
      features: [
        'Analisi comparativa di mercato',
        'Valutazione delle caratteristiche strutturali',
        'Considerazione della posizione e dei servizi',
        'Report dettagliato con stima del valore',
        'Consulenza personalizzata'
      ]
    },
    {
      id: 2,
      title: 'Home Staging',
      description: 'Valorizzazione degli spazi per massimizzare l\'appeal del tuo immobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
        <path d="M5 8v1"></path>
        <path d="M19 8v1"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      detailedDescription: 'L\'Home Staging è l\'arte di preparare una casa per la vendita, mettendone in risalto i punti di forza e minimizzando i difetti. Il nostro team di esperti trasformerà il tuo immobile per renderlo più attraente agli occhi dei potenziali acquirenti.',
      features: [
        'Consulenza sulla disposizione degli arredi',
        'Suggerimenti per piccole ristrutturazioni',
        'Decorazione e styling professionale',
        'Servizio fotografico dopo l\'intervento',
        'Aumento del valore percepito dell\'immobile'
      ]
    },
    {
      id: 3,
      title: 'Marketing Immobiliare',
      description: 'Strategie digitali avanzate per promuovere il tuo immobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"></path>
        <path d="M18 20V4"></path>
        <path d="M6 20v-6"></path>
        <path d="M2 8h20"></path>
        <path d="M2 16h20"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-violet-50 to-violet-100',
      detailedDescription: 'Il nostro approccio al marketing immobiliare combina strategie tradizionali e digitali per massimizzare la visibilità del tuo immobile. Utilizziamo i canali più efficaci per raggiungere potenziali acquirenti qualificati.',
      features: [
        'Presenza sui principali portali immobiliari',
        'Campagne sui social media',
        'Virtual tour e materiali fotografici professionali',
        'Email marketing mirato',
        'Monitoraggio e reportistica delle performance'
      ]
    },
    {
      id: 4,
      title: 'Consulenza Legale',
      description: 'Supporto completo per tutti gli aspetti legali della compravendita',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-sky-50 to-sky-100',
      detailedDescription: 'La nostra consulenza legale ti guida attraverso tutti gli aspetti giuridici della compravendita immobiliare. Dal preliminare al rogito, i nostri esperti ti assistono per garantire una transazione sicura e conforme alla normativa vigente.',
      features: [
        'Verifica della documentazione',
        'Assistenza nella redazione dei contratti',
        'Consulenza su aspetti fiscali',
        'Supporto nelle pratiche catastali',
        'Presenza durante la stipula del rogito'
      ]
    },
    {
      id: 5,
      title: 'Servizi Fotografici',
      description: 'Fotografie professionali e virtual tour per valorizzare gli spazi',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>`,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-rose-50 to-rose-100',
      detailedDescription: 'Le immagini sono fondamentali nella presentazione di un immobile. Il nostro servizio fotografico professionale cattura la vera essenza degli spazi, mentre i virtual tour offrono un\'esperienza immersiva che aumenta l\'interesse dei potenziali acquirenti.',
      features: [
        'Fotografie ad alta risoluzione',
        'Virtual tour 360°',
        'Video professionali',
        'Riprese con drone (per esterni)',
        'Editing professionale delle immagini'
      ]
    },
    {
      id: 6,
      title: 'Consulenza Mutui',
      description: 'Assistenza nella ricerca delle migliori soluzioni di finanziamento',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
        <path d="M7 15h0M12 15h0"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      detailedDescription: 'La nostra consulenza sui mutui ti aiuta a navigare nel complesso mondo dei finanziamenti immobiliari. Collaboriamo con i principali istituti di credito per offrirti le soluzioni più vantaggiose in base alle tue esigenze.',
      features: [
        'Analisi della capacità di indebitamento',
        'Comparazione delle offerte di diversi istituti',
        'Assistenza nella preparazione della documentazione',
        'Supporto durante l\'istruttoria',
        'Consulenza sulle agevolazioni fiscali disponibili'
      ]
    }
  ];

  const openModal = (service: ServiceProps) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 -translate-x-1/3 -translate-y-1/3 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-100 rounded-full opacity-20 translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            I nostri servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluzioni complete per ogni fase del tuo progetto immobiliare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-up">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-2xl p-8 shadow-modern hover-lift transition-all duration-300 ${service.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <div className="w-8 h-8 text-gray-800" dangerouslySetInnerHTML={{ __html: service.icon }} />
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button 
                onClick={() => openModal(service)}
                className="w-full bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <span>Scopri di più</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal isOpen={selectedService !== null} onClose={closeModal}>
        {selectedService && (
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: selectedService.color.split(' ')[1]}}>
                <div className="w-6 h-6 text-gray-800" dangerouslySetInnerHTML={{ __html: selectedService.icon }} />
              </div>
              <h3 className="text-2xl font-medium text-gray-900">{selectedService.title}</h3>
            </div>
            
            <div className="mb-6 rounded-xl overflow-hidden h-48">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedService.detailedDescription}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-medium text-gray-900 mb-4">Caratteristiche del servizio:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                onClick={closeModal}
                className="btn-modern btn-modern-primary px-6 py-2 rounded-lg font-medium hover-lift-sm transition-all duration-300"
              >
                Chiudi
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ModernServizi;