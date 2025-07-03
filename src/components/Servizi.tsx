import React from 'react';
import { Calculator, Palette, CreditCard, FileText, Camera, TrendingUp } from 'lucide-react';

const Servizi = () => {
  const servizi = [
    {
      icon: Calculator,
      title: 'Valutazione Gratuita',
      description: 'Stima accurata del valore del tuo immobile basata su analisi di mercato approfondite',
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Home Staging',
      description: 'Valorizzazione degli spazi per presentare al meglio il tuo immobile ai potenziali acquirenti',
      color: 'purple'
    },
    {
      icon: CreditCard,
      title: 'Consulenza Mutui',
      description: 'Supporto nella ricerca delle migliori soluzioni di finanziamento per i tuoi acquirenti',
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Gestione Pratiche',
      description: 'Assistenza completa in tutte le pratiche burocratiche e legali della compravendita',
      color: 'orange'
    },
    {
      icon: Camera,
      title: 'Servizi Fotografici',
      description: 'Reportage fotografico professionale e virtual tour per valorizzare il tuo immobile',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Immobiliare',
      description: 'Strategie di marketing mirate per massimizzare la visibilità del tuo immobile',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            I nostri servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un servizio completo a 360° per accompagnarti in ogni fase del tuo progetto immobiliare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servizi.map((servizio, index) => {
            const IconComponent = servizio.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(servizio.color)}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {servizio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servizio.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Vuoi saperne di più sui nostri servizi?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contattaci per una consulenza
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servizi;