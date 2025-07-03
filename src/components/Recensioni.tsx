import React from 'react';
import { Star, Quote } from 'lucide-react';

const Recensioni = () => {
  const recensioni = [
    {
      nome: 'Maria Rossi',
      rating: 5,
      testo: 'Professionalità e competenza eccezionali. Hanno venduto la mia casa in tempi record al prezzo migliore. Consiglio vivamente!',
      immobile: 'Appartamento, Milano'
    },
    {
      nome: 'Giuseppe Bianchi',
      rating: 5,
      testo: 'Servizio impeccabile dall\'inizio alla fine. Mi hanno seguito passo passo con pazienza e dedizione. Esperienza fantastica!',
      immobile: 'Villa, Roma'
    },
    {
      nome: 'Anna Verdi',
      rating: 5,
      testo: 'Grazie al loro aiuto ho trovato la casa dei miei sogni. Hanno capito esattamente quello che cercavo e mi hanno guidato perfettamente.',
      immobile: 'Attico, Firenze'
    },
    {
      nome: 'Marco Ferrari',
      rating: 5,
      testo: 'Team di veri professionisti. La valutazione è stata precisa e il servizio di home staging ha fatto la differenza. Straordinari!',
      immobile: 'Villetta, Torino'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="recensioni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra migliore referenza
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {recensioni.map((recensione, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-300" />
              
              <div className="flex items-center mb-4">
                {renderStars(recensione.rating)}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{recensione.testo}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">{recensione.nome}</div>
                  <div className="text-sm text-gray-500">{recensione.immobile}</div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                  {recensione.nome.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">4.9/5 su oltre 200 recensioni</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recensioni;