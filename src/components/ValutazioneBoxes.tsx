import React, { useState } from 'react';
import { Home, Monitor, X } from 'lucide-react';
import Modal from './Modal';

const ValutazioneBoxes = () => {
  const [modalType, setModalType] = useState<'presenza' | 'online' | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    indirizzo: '',
    tipologia: '',
    metratura: '',
    anno: '',
    note: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { type: modalType, data: formData });
    setModalType(null);
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      indirizzo: '',
      tipologia: '',
      metratura: '',
      anno: '',
      note: ''
    });
    alert('Richiesta inviata con successo! Ti contatteremo presto.');
  };

  return (
    <section id="valutazione" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Scegli la tua modalità di valutazione
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo due modalità per valutare il tuo immobile, entrambe gratuite e senza impegno
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Valutazione in Presenza */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Valutazione in Presenza</h3>
              <p className="text-gray-600 mb-6">
                Un nostro esperto verrà a visitare il tuo immobile per una valutazione accurata e dettagliata
              </p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li>• Analisi completa dell'immobile</li>
                <li>• Valutazione stato conservativo</li>
                <li>• Consigli per valorizzare</li>
                <li>• Report dettagliato</li>
              </ul>
              <button
                onClick={() => setModalType('presenza')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Prenota Sopralluogo
              </button>
            </div>
          </div>

          {/* Valutazione Online */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Valutazione Online</h3>
              <p className="text-gray-600 mb-6">
                Ricevi una stima rapida del tuo immobile compilando il nostro form dettagliato
              </p>
              <ul className="text-left text-gray-600 mb-8 space-y-2">
                <li>• Stima in 24 ore</li>
                <li>• Basata su dati di mercato</li>
                <li>• Completamente gratuita</li>
                <li>• Senza impegno</li>
              </ul>
              <button
                onClick={() => setModalType('online')}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Valuta Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal per form */}
      <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-medium text-gray-900">
              {modalType === 'presenza' ? 'Prenota Sopralluogo' : 'Valutazione Online'}
            </h3>
            <button
              onClick={() => setModalType(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cognome *</label>
                <input
                  type="text"
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {modalType === 'online' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Indirizzo Immobile *</label>
                  <input
                    type="text"
                    name="indirizzo"
                    value={formData.indirizzo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipologia *</label>
                    <select
                      name="tipologia"
                      value={formData.tipologia}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Seleziona</option>
                      <option value="appartamento">Appartamento</option>
                      <option value="villa">Villa</option>
                      <option value="villetta">Villetta</option>
                      <option value="attico">Attico</option>
                      <option value="loft">Loft</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Metratura *</label>
                    <input
                      type="number"
                      name="metratura"
                      value={formData.metratura}
                      onChange={handleInputChange}
                      required
                      placeholder="mq"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anno costruzione</label>
                    <input
                      type="number"
                      name="anno"
                      value={formData.anno}
                      onChange={handleInputChange}
                      placeholder="es. 1990"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Note aggiuntive</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descrivi brevemente il tuo immobile o le tue esigenze..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {modalType === 'presenza' ? 'Prenota Sopralluogo' : 'Richiedi Valutazione'}
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ValutazioneBoxes;