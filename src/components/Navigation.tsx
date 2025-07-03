import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };
  
  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'valutazione',
        'chi-siamo',
        'servizi',
        'recensioni',
        'fasi-vendita',
        'faq',
        'contatti'
      ];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto brightness-0 invert" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem 
            id="valutazione" 
            label="Valutazione" 
            active={activeSection === 'valutazione'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="chi-siamo" 
            label="Chi Siamo" 
            active={activeSection === 'chi-siamo'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="servizi" 
            label="Servizi" 
            active={activeSection === 'servizi'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="recensioni" 
            label="Recensioni" 
            active={activeSection === 'recensioni'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="fasi-vendita" 
            label="Processo" 
            active={activeSection === 'fasi-vendita'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="faq" 
            label="FAQ" 
            active={activeSection === 'faq'} 
            onClick={scrollToSection} 
          />
          <NavItem 
            id="contatti" 
            label="Contatti" 
            active={activeSection === 'contatti'} 
            onClick={scrollToSection} 
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-gray-900/95 absolute top-full left-0 w-full py-4 px-4 transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex flex-col space-y-2">
          <MobileNavItem 
            id="valutazione" 
            label="Valutazione" 
            active={activeSection === 'valutazione'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="chi-siamo" 
            label="Chi Siamo" 
            active={activeSection === 'chi-siamo'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="servizi" 
            label="Servizi" 
            active={activeSection === 'servizi'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="recensioni" 
            label="Recensioni" 
            active={activeSection === 'recensioni'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="fasi-vendita" 
            label="Processo" 
            active={activeSection === 'fasi-vendita'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="faq" 
            label="FAQ" 
            active={activeSection === 'faq'} 
            onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="contatti" 
            label="Contatti" 
            active={activeSection === 'contatti'} 
            onClick={scrollToSection} 
          />
        </div>
      </div>
    </nav>
  );
};

// NavItem component for desktop navigation
interface NavItemProps {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, active, onClick }) => {
  return (
    <button 
      onClick={() => onClick(id)} 
      className={`relative px-3 py-2 text-white font-medium transition-all duration-300 hover:text-white group`}
    >
      <span className={`relative z-10 ${active ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{label}</span>
      {/* Animated underline */}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ${active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}
      ></span>
      {/* Hover background glow */}
      <span 
        className={`absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
      ></span>
    </button>
  );
};

// MobileNavItem component for mobile navigation
const MobileNavItem: React.FC<NavItemProps> = ({ id, label, active, onClick }) => {
  return (
    <button 
      onClick={() => onClick(id)} 
      className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
    >
      <div className="flex items-center">
        <span className={`flex-1 ${active ? 'font-medium' : ''}`}>{label}</span>
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        )}
      </div>
    </button>
  );
};

export default Navigation;