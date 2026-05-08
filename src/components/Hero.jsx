import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import profileImg from '../assets/foziya.png';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-accent-blue/5 to-accent-purple/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/5 to-accent-neon/10 rounded-full blur-[100px] -z-10" />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10"
        >
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] text-text">
            Software Engineer <br />
            <span className="text-muted font-light">&</span> <span className="gradient-text bg-gradient-to-r from-accent-purple via-accent-neon to-accent-blue bg-clip-text text-transparent">Problem Solver</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products utilizing the MERN stack.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <a href="#projects" className="btn btn-primary px-8 py-3.5 text-sm sm:text-base w-full sm:w-auto">
              View Work <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Fozia31" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-glass-bg border border-glass-border hover:bg-accent-purple/10 hover:border-accent-purple/30 transition-all text-muted hover:text-accent-purple" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57.99 1.95 1.69.61 1.07 1.66.76 2.07.58.06-.45.25-.76.45-.93-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.15-3.02-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.8 1.15 3.02 0 4.32-2.64 5.27-5.16 5.55.26.22.49.65.49 1.31 0 .95-.01 1.72-.01 1.95 0 .3.21.65.78.54C19.03 20.92 22.25 16.72 22.25 11.76 22.25 5.48 17.27.5 11 .5z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/foziya-damtew-4ab859338/" className="p-3.5 rounded-full bg-glass-bg border border-glass-border hover:bg-accent-blue/10 hover:border-accent-blue/30 transition-all text-muted hover:text-accent-blue" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.05c.54-1.02 1.86-2.09 3.84-2.09 4.11 0 4.87 2.7 4.87 6.21V24h-4v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.98V24h-4V8z" fill="currentColor"/>
                </svg>
              </a>
              <a href="foziyadamtew00@gmail.com" className="p-3.5 rounded-full bg-glass-bg border border-glass-border hover:bg-emerald-400/10 hover:border-emerald-400/30 transition-all text-muted hover:text-emerald-400">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:flex justify-end items-center"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-glass-border bg-glass-bg">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-transparent mix-blend-overlay z-10" />
            <img 
              src={profileImg} 
              alt="Foziya Damtew" 
              className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute -left-6 top-1/4 glass-panel p-4 rounded-2xl shadow-xl z-20 backdrop-blur-xl animate-float-1 border-white/10 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <span className="font-bold text-lg">{"{ }"}</span>
               </div>
               <div>
                 <p className="text-xs text-muted font-medium uppercase tracking-wider">Stack</p>
                 <p className="font-semibold text-text text-sm">MERN Specialist</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
