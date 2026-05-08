import { Layout, Database, Server, Terminal, Code2, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout size={24} />,
      color: "from-accent-purple to-pink-500",
      lightColor: "text-accent-purple",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "JavaScript/TypeScript", level: "Advanced" },
        { name: "Framer Motion", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      color: "from-accent-blue to-cyan-500",
      lightColor: "text-accent-blue",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "GraphQL", level: "Beginner" }
      ]
    },
    {
      title: "Databases & Architecture",
      icon: <Database size={24} />,
      color: "from-emerald-400 to-teal-500",
      lightColor: "text-emerald-400",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Redis", level: "Beginner" },
        { name: "System Design", level: "Intermediate" },
        { name: "Microservices", level: "Intermediate" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cpu size={24} />,
      color: "from-orange-400 to-red-500",
      lightColor: "text-orange-400",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "CI/CD (GitHub Actions)", level: "Intermediate" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "Nginx", level: "Beginner" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={24} />,
      color: "from-gray-400 to-gray-600",
      lightColor: "text-gray-300",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Jest / Testing", level: "Intermediate" }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Code2 size={24} />,
      color: "from-indigo-400 to-blue-600",
      lightColor: "text-indigo-400",
      skills: [
        { name: "Data Structures", level: "Advanced" },
        { name: "Algorithms", level: "Advanced" },
        { name: "Object Oriented", level: "Advanced" },
        { name: "Clean Architecture", level: "Intermediate" },
        { name: "Agile/Scrum", level: "Advanced" }
      ]
    }
  ];

  return (
    <section id="skills" className="section relative bg-black/20">
      {/* Background Decorators */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl">
        <div className="text-center mb-20 reveal">
          <span className="text-accent-neon text-sm uppercase tracking-[3px] font-bold block mb-3">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-lg">A comprehensive overview of the technologies, tools, and paradigms I leverage to build robust digital solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="glass-panel p-8 reveal hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group relative overflow-hidden" 
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card Gradient Hover Overlay */}
              <div val className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${category.color} transition-opacity duration-500`}></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-3.5 rounded-xl bg-white/5 border border-glass-border shadow-sm group-hover:scale-110 transition-transform duration-300 ${category.lightColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 group/skill">
                    <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                    <span className="text-xs uppercase tracking-wider text-muted group-hover/skill:text-gray-400 font-semibold">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
