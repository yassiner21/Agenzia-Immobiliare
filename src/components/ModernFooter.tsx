import React from 'react';

const ModernFooter = () => {
  return (
    <footer id="contatti" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-blue-500 to-amber-400"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-5 translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full opacity-5 -translate-x-1/3 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Informazioni Azienda */}
          <div>
            <div className="mb-6">
              <img 
                src="/src/assets/logo.png" 
                alt="Logo Casa & Sogni" 
                className="h-12 w-auto mb-2" 
              />
              <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Da oltre 15 anni accompagniamo le famiglie nel percorso di vendita e acquisto della casa dei loro sogni.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-glow-blue">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all hover:-translate-y-1 hover:shadow-glow-pink">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:-translate-y-1 hover:shadow-glow-blue">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-xl font-light mb-6 text-white">Contatti</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <PhoneIcon />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+39 02 1234 5678</span>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <MailIcon />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@casaesogni.it</span>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors mt-0.5">
                  <MapPinIcon />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Via Roma 123<br />20121 Milano (MI)</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors mt-0.5">
                  <ClockIcon />
                </div>
                <div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Lun-Ven: 9:00-19:00<br />Sab: 9:00-13:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-xl font-light mb-6 text-white">Servizi</h4>
            <ul className="space-y-3">
              <FooterLink href="#valutazione" text="Valutazione Immobili" />
              <FooterLink href="#servizi" text="Vendita Casa" />
              <FooterLink href="#servizi" text="Acquisto Casa" />
              <FooterLink href="#servizi" text="Home Staging" />
              <FooterLink href="#servizi" text="Consulenza Mutui" />
              <FooterLink href="#servizi" text="Gestione Affitti" />
            </ul>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="text-xl font-light mb-6 text-white">Link Utili</h4>
            <ul className="space-y-3">
              <FooterLink href="#chi-siamo" text="Chi Siamo" />
              <FooterLink href="#servizi" text="Servizi" />
              <FooterLink href="#recensioni" text="Testimonianze" />
              <FooterLink href="#fasi-vendita" text="Processo di Vendita" />
              <FooterLink href="#faq" text="FAQ" />
              <FooterLink href="#valutazione" text="Valutazione" />
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 py-8 px-6 bg-gray-800 bg-opacity-50 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h4 className="text-xl font-light mb-2">Rimani aggiornato</h4>
              <p className="text-gray-300">Iscriviti alla nostra newsletter per ricevere aggiornamenti sul mercato immobiliare e offerte esclusive.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex w-full">
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="flex-grow px-4 py-3 bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-6 py-3 rounded-r-lg text-white font-medium transition-all"
                >
                  Iscriviti
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 <img src="/src/assets/logo.png" alt="Logo Casa & Sogni" className="h-4 w-auto inline-block mx-1" />. Tutti i diritti riservati.
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
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

// Helper component for footer links
const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <a 
      href={href} 
      onClick={(e) => { e.preventDefault(); document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' }); }} 
      className="text-gray-300 hover:text-white transition-colors flex items-center group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-amber-500 mr-2 transition-colors"></span>
      {text}
    </a>
  </li>
);

// Custom SVG icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23651 4.68007 9.47141 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ModernFooter;