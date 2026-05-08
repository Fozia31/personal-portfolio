import { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-40 animate-float-1" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40 animate-float-2" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}></div>
      </div>
      
      <Navbar scrollY={scrollY} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer id="footer" className="bg-glass-bg backdrop-blur-md text-muted pt-16 pb-8 border-t border-glass-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="font-poppins text-2xl font-bold mb-4 text-text inline-flex items-center">
                <span className="text-accent-purple mr-1">&lt;</span>
                Fozia
                <span className="text-accent-blue ml-1">/&gt;</span>
              </div>
              <p className="text-center md:text-left text-sm max-w-xs leading-relaxed opacity-80">
                A passionate Software Engineer dedicated to crafting beautiful, scalable, and user-centric digital experiences. Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-text font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
              <ul className="flex flex-col space-y-2 items-center text-sm opacity-80">
                <li><a href="#about" className="hover:text-accent-blue transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-accent-purple transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-accent-neon transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Links & Back to top */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-text font-bold mb-4 uppercase tracking-wider text-sm">Let's Connect</h3>
              <div className="flex space-x-4 mb-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-glass-border rounded-full hover:border-accent-purple hover:text-accent-purple transition-all hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-glass-border rounded-full hover:border-accent-blue hover:text-accent-blue transition-all hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="mailto:contact@example.com" className="p-2 border border-glass-border rounded-full hover:border-accent-neon hover:text-accent-neon transition-all hover:-translate-y-1">
                  <Mail size={18} />
                </a>
              </div>
              
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider hover:text-accent-blue transition-colors group"
              >
                Back to top
                <span className="p-1 bg-surface-2 rounded border border-glass-border group-hover:border-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                  <ArrowUp size={14} />
                </span>
              </button>
            </div>
          </div>

          <div className="w-full h-px bg-glass-border mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
            <p>&copy; {new Date().getFullYear()} Fozia Damtew. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Designed & Built with <span className="text-red-500 animate-pulse">❤️</span> by Fozia
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
