import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const projectsData = [
  {
    id: 'ecommerce',
    title: 'E-commerce Web Application',
    desc: 'A full-stack e-commerce web application featuring a responsive, dynamic frontend and a robust backend API.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React 19', 'Node.js', 'Express.js 5', 'Tailwind CSS v4'],
    demo: 'https://e-commerce-olive-delta.vercel.app/',
    github: 'https://github.com/CSEC-PROJECT/E-commerce',
    featured: true,
    details: {
      problem: 'Building a full-stack e-commerce solution with responsive frontend and robust backend.',
      solution: 'Developed a dynamic frontend with React 19, Tailwind CSS v4, Radix UI, and Shadcn UI. Created a backend API using Node.js and Express.js 5.',
      tech: 'Frontend: React 19, Tailwind CSS, Radix UI. Backend: Node.js, Express.js 5, CORS, dotenv.'
    }
  },
  {
    id: 'taskmanager',
    title: 'Task Management App',
    desc: 'Real-time Kanban board with drag & drop, team collaboration, deadlines, and notification system.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2669&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demo: '#',
    github: 'https://github.com/Fozia31',
    featured: false,
    details: {
      problem: 'Teams lack real-time synchronization in standard to-do apps when moving tasks across boards.',
      solution: 'Integrated Socket.io to push board updates to all connected clients instantly.',
      tech: 'Used Redux for precise state management and React DnD for drag-and-drop actions.'
    }
  },
  {
    id: 'grantflow',
    title: 'GrantFlow Platform',
    desc: 'A responsive frontend web application for grant discovery and management, featuring interactive dashboards and analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demo: 'https://grant-flow-sigma.vercel.app/',
    github: 'https://github.com/Fozia31/GrantFlow',
    featured: true,
    details: {
      problem: 'Needed an intuitive and interactive user interface for grant discovery and performance analytics.',
      solution: 'Developed a responsive frontend dashboard with interactive charts, state management, and modern UI components.',
      tech: 'Frontend logic built entirely with React, utilizing modern hooks and context for state management.'
    }
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="text-accent-neon text-sm uppercase tracking-[2px] font-semibold block mb-2">What I've built</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted max-w-lg mx-auto">Click any project card to see the full case study</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-panel overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-500 flex flex-col reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-accent-neon z-10 text-xs font-semibold text-white shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-bg/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn btn-outline" onClick={() => openModal(project)}>
                    View Case Study →
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_#10b981]"></span> 
                  {project.demo !== '#' ? 'Live' : 'In Development'}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-6 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demo !== '#' ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 btn btn-primary py-2 text-sm !rounded-xl">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <button disabled className="flex-1 btn py-2 text-sm !rounded-xl border border-glass-border opacity-50 cursor-not-allowed">
                      In Development
                    </button>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 btn btn-ghost py-2 text-sm !rounded-xl border border-glass-border">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.8 4.8 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.8 4.8 0 0 0-.1 3.8 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 3.24V22" /><path d="M9 20c-3 1-5-1-6-3" /></svg> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <div className={`fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${activeProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeModal}>
        <div className={`bg-bg border border-glass-border rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative transition-transform duration-300 ${activeProject ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`} onClick={e => e.stopPropagation()}>
          <button className="absolute top-4 right-4 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-text w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10" onClick={closeModal}>
            <X size={20} />
          </button>
          
          {activeProject && (
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 pr-12">{activeProject.title}</h2>
              <img src={activeProject.image} alt={activeProject.title} className="w-full rounded-2xl mb-12 shadow-2xl border border-glass-border" />
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h4 className="text-accent-neon font-bold text-lg mb-3 flex items-center gap-2">🎯 Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{activeProject.details.problem}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-accent-blue font-bold text-lg mb-3 flex items-center gap-2">💡 Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{activeProject.details.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-accent-purple font-bold text-lg mb-3">⚙️ Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 h-fit">
                  <h4 className="text-accent-purple font-bold text-lg mb-4 flex items-center gap-2">📋 Additional Details</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{activeProject.details.tech}</p>
                  
                  <div className="mt-8 pt-6 border-t border-glass-border">
                    <div className="flex gap-3">
                      {activeProject.demo !== '#' && (
                        <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 btn btn-primary py-2 text-sm">
                          Visit <ExternalLink size={14} />
                        </a>
                      )}
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 btn btn-outline py-2 text-sm hover:border-accent-purple">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
