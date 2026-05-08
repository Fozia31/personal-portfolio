const Experience = () => {
  return (
    <section id="experience" className="section relative bg-slate-900/30">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="text-accent-neon text-sm uppercase tracking-[2px] font-semibold block mb-2">My journey</span>
          <h2 className="text-4xl md:text-5xl font-bold">Experience & <span className="gradient-text">Timeline</span></h2>
        </div>

        <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-purple before:via-accent-blue before:to-emerald-500">
          
          {/* Current */}
          <div className="relative pl-14 md:pl-0 mb-12 md:w-1/2 md:pr-12 group reveal">
            <div className="absolute left-3.5 md:left-auto md:-right-[7px] top-6 w-3.5 h-3.5 bg-accent-purple rounded-full shadow-[0_0_15px_#8b5cf6] z-10 transition-transform duration-300 group-hover:scale-150"></div>
            <div className="font-poppins font-bold text-xl text-accent-blue mb-2">2026</div>
            <div className="glass-panel p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent-purple">
              <div className="inline-block px-3 py-1 bg-accent-purple/20 text-accent-neon rounded text-xs font-semibold mb-4 border border-accent-purple/30">
                💼 Current
              </div>
              <h3 className="text-xl font-bold mb-2">Full Stack Developer — Freelance</h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">Building full-stack MERN applications for clients across e-commerce, fintech, and productivity. Integrating payment gateways, real-time features, and cloud deployments.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-text/80">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>MERN Stack</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>Payment APIs</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Vercel Deploy</span>
              </div>
            </div>
          </div>

          {/* 2025 */}
          <div className="relative pl-14 md:pl-12 md:ml-auto mb-12 md:w-1/2 group reveal" style={{ animationDelay: '0.1s' }}>
            <div className="absolute left-3.5 md:-left-[7px] top-6 w-3.5 h-3.5 bg-accent-blue rounded-full shadow-[0_0_15px_#3b82f6] z-10 transition-transform duration-300 group-hover:scale-150"></div>
            <div className="font-poppins font-bold text-xl text-accent-blue mb-2">2025</div>
            <div className="glass-panel p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent-blue">
              <div className="inline-block px-3 py-1 bg-accent-blue/20 text-blue-300 rounded text-xs font-semibold mb-4 border border-accent-blue/30">
                🎓 Internship
              </div>
              <h3 className="text-xl font-bold mb-2">Software Development Intern</h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">Worked on developing REST APIs, implementing authentication systems, and contributing to frontend components for a SaaS product. Gained real-world experience in agile teams.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-text/80">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>REST APIs</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>React</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>Node.js</span>
              </div>
            </div>
          </div>

          {/* 2024 */}
          <div className="relative pl-14 md:pl-0 mb-12 md:w-1/2 md:pr-12 group reveal" style={{ animationDelay: '0.2s' }}>
            <div className="absolute left-3.5 md:left-auto md:-right-[7px] top-6 w-3.5 h-3.5 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] z-10 transition-transform duration-300 group-hover:scale-150"></div>
            <div className="font-poppins font-bold text-xl text-emerald-500 mb-2">2024</div>
            <div className="glass-panel p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-500">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs font-semibold mb-4 border border-emerald-500/30">
                📚 Learning
              </div>
              <h3 className="text-xl font-bold mb-2">Learning & Building Projects</h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">Deep-dived into the MERN stack, system design fundamentals, and data structures & algorithms. Built and shipped multiple portfolio projects to solidify skills.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-text/80">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>DSA</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>System Design</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Open Source</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
