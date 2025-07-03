import React from 'react';
import { Search, FileText, Users, Key, CheckCircle } from 'lucide-react';

const FasiVendita = () => {
  const fasi = [
    {
      numero: 1,
      icon: Search,
      title: 'Valutazione',
      description: 'Analizziamo il tuo immobile e definiamo il prezzo ottimale di mercato',
      durata: '1-2 giorni'
    },
    {
      numero: 2,
      icon: FileText,
      title: 'Preparazione',
      description: 'Raccogliamo la documentazione e prepariamo il piano di marketing',
      durata: '3-5 giorni'
    },
    {
      numero: 3,
      icon: Users,
      title: 'Promozione',
      description: 'Pubblichiamo l\'annuncio e organizziamo le visite con potenziali acquirenti',
      durata: '2-8 settimane'
    },
    {
      numero: 4,
      icon: Key,
      title: 'Negoziazione',
      description: 'Gestiamo le trattative per ottenere le migliori condizioni di vendita',
      durata: '1-2 settimane'
    },
    {
      numero: 5,
      icon: CheckCircle,
      title: 'Rogito',
      description: 'Ti accompagniamo fino alla firma del contratto definitivo',
      durata: '30-60 giorni'
    }
  ];

  return (
    <section id="fasi-vendita" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Il processo di vendita
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un percorso strutturato e trasparente che ti guida passo dopo passo verso il successo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {fasi.map((fase, index) => {
            const IconComponent = fase.icon;
            const isLast = index === fasi.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {fase.numero}
                    </div>
                    {!isLast && (
                      <div className="w-1 h-16 bg-blue-200 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-16">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">{fase.title}</h3>
                          <div className="text-sm text-blue-600 font-medium">{fase.durata}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{fase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tempo medio di vendita: 45-90 giorni
            </h3>
            <p className="text-gray-600">
              Il 85% dei nostri immobili viene venduto entro 3 mesi dalla pubblicazione dell'annuncio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasiVendita;