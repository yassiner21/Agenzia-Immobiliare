import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Domande frequenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Risposte alle domande più comuni sui nostri servizi immobiliari
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.domanda}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-2 px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.risposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Non hai trovato la risposta che cercavi?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contattaci direttamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;