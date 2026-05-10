import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import resumeFile from '../upload/Foziya-Resume.pdf';

const Navbar = ({ scrollY, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/90 backdrop-blur-md border-b border-glass-border py-4' : 'py-6'}`}>
      <div className="container flex justify-between items-center">
        <a href="#hero" className="font-poppins text-2xl font-bold tracking-tight">
          <span className="text-accent-purple">&lt;</span>
          Fozia
          <span className="text-accent-blue">/&gt;</span>
        </a>

        <div className={`flex gap-8 md:static absolute top-full left-0 w-full md:w-auto flex-col md:flex-row bg-bg/95 backdrop-blur-lg md:bg-transparent p-6 md:p-0 border-b border-glass-border md:border-none duration-300 transition-all ${isOpen ? 'top-[70px] opacity-100 visible shadow-xl' : 'top-[-400px] opacity-0 invisible md:opacity-100 md:visible'}`}>
          <a href="#about" className="text-muted hover:text-accent-neon font-medium transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-muted hover:text-accent-neon font-medium transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="text-muted hover:text-accent-neon font-medium transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="text-muted hover:text-accent-neon font-medium transition-colors" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" className="text-muted hover:text-accent-neon font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          {isOpen && (
             <a href={resumeFile} download="Foziya_Resume.pdf" className="btn btn-outline mt-4" onClick={() => setIsOpen(false)}>
               Download CV
             </a>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-glass-border text-text hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href={resumeFile} download="Foziya_Resume.pdf" className="btn btn-outline hidden md:inline-flex px-4 py-2 text-sm">Download CV</a>
          <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
