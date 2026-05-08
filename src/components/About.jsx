import { Target, Package, Recycle, Code2, Layers, Cpu, Sparkles, MapPin, GraduationCap, Heart, Download } from 'lucide-react';
import profileImg from '../assets/foziya.png';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  // { value: '10+', label: 'Happy Clients' },
  { value: '99%', label: 'Code Quality' },
];

const skills = [
  { name: 'React.js', color: 'accent-blue' },
  { name: 'Node.js', color: 'accent-neon' },
  { name: 'Python', color: 'accent-purple' },
  { name: 'TypeScript', color: 'accent-blue' },
  { name: 'Tailwind CSS', color: 'accent-blue' },
  { name: 'AI Integration', color: 'accent-neon' },
  { name: 'Machine Learning', color: 'accent-purple' },
  { name: 'Data Structures', color: 'accent-neon' },
  { name: 'Algorithms', color: 'emerald-400' },
];

const valuecards = [
  {
    icon: Recycle,
    title: 'Problem Solver',
    desc: 'I tackle complex challenges on platforms like LeetCode and Codeforces, breaking them down into elegant, highly efficient algorithms.',
    color: 'accent-purple',
    delay: '0.2s',
    shadow: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Target,
    title: 'A2SVian (Backed by Google)',
    desc: 'Part of an elite cohort of African engineers focusing on Data Structures, Algorithms, and building social impact full-stack products.',
    color: 'accent-neon',
    delay: '0.3s',
    shadow: 'rgba(56,189,248,0.12)',
  },
  {
    icon: Package,
    title: 'Product Thinker',
    desc: 'I balance rigorous problem-solving with building real-world applications that solve local challenges and deliver great user experiences.',
    color: 'accent-blue',
    delay: '0.4s',
    shadow: 'rgba(59,130,246,0.12)',
  },
];

const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-blue/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-accent-neon text-sm uppercase tracking-[3px] font-semibold flex items-center justify-center gap-2 mb-3">
            <Sparkles size={15} /> Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Passionate developer, creative thinker, and lifelong learner building products that matter.
          </p>
        </div>

        {/* ── Hero Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">

          {/* Left – Profile Image Card */}
          <div className="glass-panel p-6 reveal flex flex-col items-center justify-center relative overflow-hidden group lg:col-span-4" style={{ animationDelay: '0s' }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden border border-glass-border shadow-xl z-10 bg-glass-bg">
                <img
                  src={profileImg}
                  alt="Foziya Damtew"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div
                  className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-glass-border flex items-center justify-center text-5xl font-bold text-muted hidden"
                  style={{ display: 'none' }}
                >
                  FD
                </div>
              </div>
            </div>

            {/* Name & info */}
            <h3 className="text-xl font-bold text-text mb-1 tracking-tight">Foziya Damtew</h3>
            <p className="text-accent-purple font-medium text-sm mb-5">Software Engineer</p>

            <div className="flex flex-col gap-3 text-sm text-muted mb-6 w-full px-4">
              <span className="flex items-center gap-3"><MapPin size={16} className="text-muted/60" /> Adama, ET</span>
              <span className="flex items-center gap-3"><GraduationCap size={16} className="text-muted/60" /> BSc Software Engineer</span>
            </div>

            <a
              href="/cv.pdf" download
              className="btn btn-outline text-sm w-full py-2.5"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          {/* Right – Bio + Skills */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            {/* Bio Card */}
            <div className="glass-panel p-8 sm:p-10 reveal flex-1 relative overflow-hidden group" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-3xl font-bold text-text mb-6 leading-tight">
                Architecting the future with <span className="font-light italic text-muted">scalable full-stack systems</span> and <span className="gradient-text">intelligent AI.</span>
              </h4>
              <p className="text-muted leading-relaxed mb-4 text-[15px]">
                I'm <strong className="text-text font-semibold">Foziya Damtew</strong>, a disruptive Software Engineer based in Ethiopia. I don't just write code—I engineer resilient, high-performance applications that push boundaries. My true passion lies at the intersection of modern full-stack development and bleeding-edge <strong className="text-text font-semibold">AI technologies</strong>, creating products that are not just functional, but genuinely intuitive and smart.
              </p>
              <p className="text-muted leading-relaxed text-[15px] mb-4">
                As a proud <strong className="text-emerald-400 font-semibold">A2SVian (backed by Google)</strong>, I have been forged in an elite crucible of rigorous Data Structures and Algorithms. I approach every logic bottleneck as a puzzle waiting to be annihilated, optimizing solutions to run with blazing speed.
              </p>
              <p className="text-muted leading-relaxed text-[15px]">
                My philosophy? Code matters, but <strong className="text-text font-semibold text-accent-neon">Impact matters more.</strong> Whether it's training machine learning models or designing seamless React interfaces, my mission is to build real-world digital solutions that deeply resonate with users, disrupt the status quo, and drive Africa's next wave of tech innovation.
              </p>
            </div>

            {/* Skills Card */}
            <div className="glass-panel p-8 reveal" style={{ animationDelay: '0.15s' }}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-5 flex items-center gap-2">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-glass-border bg-glass-bg text-text hover:border-accent-purple/40 hover:bg-accent-purple/5 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="glass-panel p-6 mb-8 reveal" style={{ animationDelay: '0.18s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </p>
                <p className="text-muted text-xs uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Current Focus + Value Cards Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Current Focus */}
          <div className="glass-panel p-6 reveal flex flex-col justify-center relative overflow-hidden lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-tl-full -z-10" />
            <h3 className="text-base font-bold mb-5 text-text flex items-center gap-2">
              <Target className="text-accent-neon" size={18} /> Current Focus
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-glass-bg rounded-lg border border-glass-border group-hover:border-accent-neon/50 transition-colors shrink-0">
                  <Code2 size={16} className="text-accent-neon" />
                </div>
                <div>
                  <p className="text-text font-semibold text-xs group-hover:text-accent-neon transition-colors">MERN Stack</p>
                  <p className="text-muted text-xs">Advanced Patterns</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-glass-bg rounded-lg border border-glass-border group-hover:border-accent-blue/50 transition-colors shrink-0">
                  <Layers size={16} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-text font-semibold text-xs group-hover:text-accent-blue transition-colors">Cloud Architectures</p>
                  <p className="text-muted text-xs">Scalable Deployments</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-glass-bg rounded-lg border border-glass-border group-hover:border-emerald-400/50 transition-colors shrink-0">
                  <Cpu size={16} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-text font-semibold text-xs group-hover:text-emerald-400 transition-colors">Performance</p>
                  <p className="text-muted text-xs">Smooth UX/UI</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Value Proposition Cards */}
          {valuecards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass-panel p-6 reveal hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: card.delay, '--hover-shadow': card.shadow }}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 border
                    ${card.color === 'accent-purple'
                      ? 'bg-accent-purple/10 border-accent-purple/20'
                      : card.color === 'accent-blue'
                      ? 'bg-accent-blue/10 border-accent-blue/20'
                      : 'bg-emerald-400/10 border-emerald-400/20'
                    }`}
                >
                  <Icon
                    size={22}
                    className={
                      card.color === 'accent-purple'
                        ? 'text-accent-purple'
                        : card.color === 'accent-blue'
                        ? 'text-accent-blue'
                        : 'text-emerald-400'
                    }
                  />
                </div>
                <h4 className="text-base font-bold text-text mb-2">{card.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
