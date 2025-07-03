import React, { useState } from 'react';

const ModernFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Start with first FAQ open

  const faqs = [
    {
      domanda: 'Quanto costa la valutazione del mio immobile?',
      risposta: 'La valutazione del tuo immobile è completamente gratuita e senza impegno. Il nostro obiettivo è fornirti una stima accurata basata sui dati di mercato più aggiornati per aiutarti a prendere la decisione migliore.'
    },
    {
      domanda: 'Quanto tempo ci vuole per vendere una casa?',
      risposta: 'Il tempo di vendita dipende da diversi fattori come la tipologia dell\'immobile, la zona, il prezzo e le condizioni di mercato. In media, i nostri immobili vengono venduti entro 45-90 giorni dalla pubblicazione dell\'annuncio.'
    },
    {
      domanda: 'Quali sono le vostre commissioni?',
      risposta: 'Le nostre commissioni sono competitive e trasparenti. Vengono calcolate solo in caso di vendita effettiva e includono tutti i servizi: valutazione, marketing, gestione visite, negoziazione e assistenza fino al rogito. Ti forniremo un preventivo dettagliato durante il primo incontro.'
    },
    {
      domanda: 'Offrite il servizio di home staging?',
      risposta: 'Sì, offriamo servizi di home staging professionale per valorizzare al meglio il tuo immobile. Questo include la riorganizzazione degli spazi, l\'arredamento e la decorazione per creare un ambiente accogliente che attragga i potenziali acquirenti.'
    },
    {
      domanda: 'Come promuovete gli immobili?',
      risposta: 'Utilizziamo una strategia di marketing multicanale che include: pubblicazione sui principali portali immobiliari, social media marketing, campagne pubblicitarie mirate, newsletter ai nostri clienti e network di agenti partner. Ogni immobile ha un piano di marketing personalizzato.'
    },
    {
      domanda: 'Posso seguire l\'andamento delle visite?',
      risposta: 'Certamente! Ti forniamo report regolari sull\'andamento delle visite, i feedback dei potenziali acquirenti e le statistiche di visualizzazione degli annunci. Manteniamo una comunicazione costante e trasparente durante tutto il processo.'
    },
    {
      domanda: 'Assistete anche nell\'acquisto di un nuovo immobile?',
      risposta: 'Sì, offriamo assistenza completa anche per l\'acquisto. Possiamo aiutarti a trovare la casa dei tuoi sogni, negoziare le migliori condizioni, gestire le pratiche burocratiche e coordinarci con la vendita del tuo attuale immobile per un passaggio senza stress.'
    },
    {
      domanda: 'Cosa succede se non riuscite a vendere?',
      risposta: 'Lavoriamo sempre per il successo della vendita, ma se dopo un periodo concordato non dovessimo riuscire a vendere, analizziamo insieme le cause e rivediamo la strategia. Non ci sono penali o costi aggiuntivi - paghiamo solo in caso di vendita effettiva.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Domande frequenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Risposte alle domande più comuni sui nostri servizi immobiliari
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-modern-lg p-2 md:p-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-2 last:mb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full rounded-xl p-6 text-left transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${openIndex === index ? 'bg-gradient-to-r from-amber-50 to-blue-50' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.domanda}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-amber-100 text-amber-600 rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 py-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.risposta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Non hai trovato la risposta che cercavi?
            </h3>
            <p className="text-gray-600 mb-6">
              Il nostro team è sempre disponibile per rispondere a qualsiasi domanda tu possa avere sui nostri servizi immobiliari.
            </p>
            <button className="btn-modern btn-modern-primary px-8 py-3 rounded-lg font-medium hover-lift">
              Contattaci direttamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;