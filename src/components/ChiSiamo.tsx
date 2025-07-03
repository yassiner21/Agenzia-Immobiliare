import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const ChiSiamo = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Chi siamo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Da oltre 15 anni accompagniamo le famiglie nel percorso di vendita e acquisto della casa dei loro sogni
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                La nostra missione
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crediamo che ogni casa abbia una storia da raccontare e ogni famiglia meriti di trovare il proprio nido perfetto. 
                Il nostro approccio va oltre la semplice transazione immobiliare: creiamo relazioni durature basate sulla fiducia, 
                la trasparenza e l'eccellenza del servizio.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Con una profonda conoscenza del mercato locale e una rete di professionisti qualificati, 
                siamo il partner ideale per accompagnarti in ogni fase del tuo progetto immobiliare.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Anni di esperienza</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Case vendute</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Clienti soddisfatti</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Il nostro team"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-sm text-gray-600">Il nostro team</div>
                <div className="font-medium text-gray-900">Esperti al tuo servizio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;