import React, { useState } from 'react';
import Modal from './Modal';

interface StepProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  detailedDescription: string;
  keyPoints: string[];
  duration: string;
}

const ModernFasiVendita = () => {
  const [selectedStep, setSelectedStep] = useState<StepProps | null>(null);

  const steps: StepProps[] = [
    {
      id: 1,
      title: 'Valutazione Iniziale',
      description: 'Analisi approfondita del valore di mercato del tuo immobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/7578939/pexels-photo-7578939.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
      detailedDescription: 'La fase di valutazione iniziale è fondamentale per determinare il giusto valore di mercato del tuo immobile. Il nostro team di esperti effettua un\'analisi approfondita considerando molteplici fattori come la posizione, le caratteristiche dell\'immobile, le condizioni del mercato locale e le recenti compravendite nella zona.',
      keyPoints: [
        'Sopralluogo dettagliato dell\'immobile',
        'Analisi comparativa di mercato',
        'Valutazione delle caratteristiche strutturali',
        'Considerazione della posizione e dei servizi',
        'Elaborazione di un report di valutazione completo'
      ],
      duration: '3-5 giorni'
    },
    {
      id: 2,
      title: 'Preparazione e Marketing',
      description: 'Strategia personalizzata per massimizzare l\'appeal del tuo immobile',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>`,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      detailedDescription: 'In questa fase, prepariamo il tuo immobile per il mercato. Sviluppiamo una strategia di marketing personalizzata che include servizi fotografici professionali, home staging se necessario, e la creazione di materiali promozionali di alta qualità. L\'obiettivo è presentare il tuo immobile nel modo più attraente possibile per i potenziali acquirenti.',
      keyPoints: [
        'Servizio fotografico professionale',
        'Creazione di virtual tour e planimetrie',
        'Home staging e valorizzazione degli spazi',
        'Sviluppo di materiali promozionali',
        'Pianificazione della strategia di marketing'
      ],
      duration: '1-2 settimane'
    },
    {
      id: 3,
      title: 'Promozione e Visite',
      description: 'Massima visibilità e gestione professionale delle visite',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>`,
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-violet-50 to-violet-100',
      detailedDescription: 'Durante questa fase, implementiamo la strategia di marketing per garantire la massima visibilità al tuo immobile. Pubblichiamo l\'annuncio sui principali portali immobiliari, sui social media e attraverso la nostra rete di contatti. Organizziamo e gestiamo le visite con potenziali acquirenti, fornendo feedback dettagliati dopo ogni visita.',
      keyPoints: [
        'Pubblicazione su portali immobiliari e social media',
        'Promozione attraverso la nostra rete di contatti',
        'Organizzazione e gestione professionale delle visite',
        'Feedback dettagliati dopo ogni visita',
        'Aggiornamenti regolari sull\'andamento delle attività'
      ],
      duration: '4-8 settimane'
    },
    {
      id: 4,
      title: 'Negoziazione',
      description: 'Gestione esperta delle trattative per ottenere le migliori condizioni',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>`,
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-sky-50 to-sky-100',
      detailedDescription: 'La fase di negoziazione è cruciale per il successo della vendita. Il nostro team di esperti gestisce tutte le trattative con i potenziali acquirenti, lavorando per ottenere le migliori condizioni possibili. Valutiamo attentamente ogni offerta, consigliandoti sulla strategia più vantaggiosa da adottare in base alle tue esigenze e alle condizioni di mercato.',
      keyPoints: [
        'Valutazione delle offerte ricevute',
        'Consulenza strategica sulle controproposte',
        'Gestione professionale delle trattative',
        'Mediazione tra le parti',
        'Definizione delle condizioni finali di vendita'
      ],
      duration: '1-3 settimane'
    },
    {
      id: 5,
      title: 'Compromesso',
      description: 'Preparazione e gestione del contratto preliminare di vendita',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>`,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-rose-50 to-rose-100',
      detailedDescription: 'Una volta raggiunto l\'accordo, procediamo con la preparazione del contratto preliminare di vendita (compromesso). In questa fase, collaboriamo con notai e consulenti legali per garantire che tutti gli aspetti del contratto siano conformi alla normativa vigente e tutelino i tuoi interessi. Assistiamo entrambe le parti nella definizione delle clausole e nella gestione del versamento della caparra.',
      keyPoints: [
        'Preparazione della documentazione necessaria',
        'Collaborazione con notai e consulenti legali',
        'Definizione delle clausole contrattuali',
        'Assistenza durante la firma del compromesso',
        'Gestione della caparra confirmatoria'
      ],
      duration: '1-2 settimane'
    },
    {
      id: 6,
      title: 'Rogito e Consegna',
      description: 'Assistenza completa fino al trasferimento definitivo della proprietà',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>`,
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      detailedDescription: 'L\'ultima fase del processo di vendita comprende la preparazione e la gestione del rogito notarile, il trasferimento definitivo della proprietà e la consegna dell\'immobile. Il nostro team ti assiste in tutti gli adempimenti necessari, collaborando con il notaio per garantire che il passaggio di proprietà avvenga senza intoppi. Ci occupiamo anche della gestione delle utenze e della consegna delle chiavi.',
      keyPoints: [
        'Preparazione della documentazione per il rogito',
        'Assistenza durante la firma dell\'atto definitivo',
        'Gestione del saldo del prezzo',
        'Coordinamento per il passaggio delle utenze',
        'Assistenza durante la consegna delle chiavi'
      ],
      duration: '1-2 settimane'
    }
  ];

  const openModal = (step: StepProps) => {
    setSelectedStep(step);
  };

  const closeModal = () => {
    setSelectedStep(null);
  };

  return (
    <section id="fasi-vendita" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Il nostro processo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un percorso guidato verso la vendita del tuo immobile
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`w-full md:w-1/2 p-6 ${step.color} rounded-2xl shadow-modern mb-6 md:mb-0 ${index % 2 !== 0 ? 'md:ml-6' : 'md:mr-6'} hover-lift transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-modern-sm mr-4">
                    <div className="w-6 h-6 text-gray-800" dangerouslySetInnerHTML={{ __html: step.icon }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Fase {step.id}</span>
                    <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {step.duration}
                  </span>
                  <button 
                    onClick={() => openModal(step)}
                    className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center hover-lift-sm"
                  >
                    <span>Dettagli</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 transform transition-all duration-300 hover:scale-[1.02]">
                <div className="rounded-2xl overflow-hidden shadow-modern h-64">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Detail Modal */}
      <Modal isOpen={selectedStep !== null} onClose={closeModal}>
        {selectedStep && (
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: selectedStep.color.split(' ')[1]}}>
                <div className="w-6 h-6 text-gray-800" dangerouslySetInnerHTML={{ __html: selectedStep.icon }} />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Fase {selectedStep.id}</span>
                <h3 className="text-2xl font-medium text-gray-900">{selectedStep.title}</h3>
              </div>
            </div>
            
            <div className="mb-6 rounded-xl overflow-hidden h-48">
              <img 
                src={selectedStep.image} 
                alt={selectedStep.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedStep.detailedDescription}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h4 className="font-medium text-gray-900 mb-4">Punti chiave:</h4>
              <ul className="space-y-2">
                {selectedStep.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-500 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Durata media: {selectedStep.duration}</span>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={closeModal}
                className="btn-modern btn-modern-primary px-6 py-2 rounded-lg font-medium hover-lift-sm"
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

export default ModernFasiVendita;