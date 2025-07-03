import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contatti" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informazioni Azienda */}
          <div>
            <h3 className="text-xl font-medium mb-6">Casa & Sogni</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Da oltre 15 anni accompagniamo le famiglie nel percorso di vendita e acquisto della casa dei loro sogni.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">info@casaesogni.it</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-300">Via Roma 123<br />20121 Milano (MI)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Lun-Ven: 9:00-19:00<br />Sab: 9:00-13:00</span>
              </div>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-lg font-medium mb-6">Servizi</h4>
            <ul className="space-y-2">
              <li><a href="#valutazione" onClick={(e) => { e.preventDefault(); document.getElementById('valutazione')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Valutazione Immobili</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Vendita Casa</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Acquisto Casa</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Home Staging</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Consulenza Mutui</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Gestione Affitti</a></li>
            </ul>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="text-lg font-medium mb-6">Link Utili</h4>
            <ul className="space-y-2">
              <li><a href="#chi-siamo" onClick={(e) => { e.preventDefault(); document.getElementById('chi-siamo')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" onClick={(e) => { e.preventDefault(); document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#recensioni" onClick={(e) => { e.preventDefault(); document.getElementById('recensioni')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Testimonianze</a></li>
              <li><a href="#fasi-vendita" onClick={(e) => { e.preventDefault(); document.getElementById('fasi-vendita')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Processo di Vendita</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#valutazione" onClick={(e) => { e.preventDefault(); document.getElementById('valutazione')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-300 hover:text-white transition-colors">Valutazione</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Casa & Sogni. Tutti i diritti riservati.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termini di Servizio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;