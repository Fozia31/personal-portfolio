import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/foziyadamtew00@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="text-accent-neon text-sm uppercase tracking-[2px] font-semibold block mb-2">Connect With Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Collaborate <span className="gradient-text">Together</span></h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 reveal" style={{ animationDelay: '0.2s' }}>
          {/* Quick Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-6 group p-6 rounded-2xl glass-panel hover:border-accent-neon/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-glass-border flex justify-center items-center text-accent-neon group-hover:bg-accent-neon/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-muted font-medium mb-1 uppercase tracking-wider">Email</span>
                <a href="mailto:foziyadamtew00@gmail.com" className="text-base font-semibold hover:text-accent-neon transition-colors">foziyadamtew00@gmail.com</a>
                <p className="text-xs text-muted mt-1">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group p-6 rounded-2xl glass-panel hover:border-accent-blue/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-glass-border flex justify-center items-center text-accent-blue group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.8 4.8 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.8 4.8 0 0 0-.1 3.8 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 3.24V22" /><path d="M9 20c-3 1-5-1-6-3" /></svg>
              </div>
              <div>
                <span className="block text-sm text-muted mb-1">GitHub</span>
                <a href="https://github.com/Fozia31" target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-accent-blue transition-colors">github.com/Fozia31</a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group p-6 rounded-2xl glass-panel hover:border-accent-blue/50 transition-all flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-glass-border flex justify-center items-center text-accent-blue group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.8 4.8 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.8 4.8 0 0 0-.1 3.8 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 3.24V22" /><path d="M9 20c-3 1-5-1-6-3" /></svg>
              </div>
              <div>
                <span className="block text-sm text-muted font-medium mb-1 uppercase tracking-wider">GitHub</span>
                <a href="https://github.com/Fozia31" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-accent-blue transition-colors">github.com/Fozia31</a>
                <p className="text-xs text-muted mt-1">Check out my repositories</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group p-6 rounded-2xl glass-panel hover:border-emerald-400/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-glass-border flex justify-center items-center text-emerald-400 group-hover:bg-emerald-400/10 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </div>
              <div>
                <span className="block text-sm text-muted font-medium mb-1 uppercase tracking-wider">LinkedIn</span>
                <a href="https://www.linkedin.com/in/foziya-damtew-4ab859338/" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-emerald-400 transition-colors">linkedin.com/in/foziya-damtew</a>
                <p className="text-xs text-muted mt-1">Let's connect professionally</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 blur-[80px] rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Send Me a Message</h3>
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Portfolio Contact from Fozia" />
              <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I will get back to you within 24-48 hours. - Foziya Damtew" />
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted font-medium ml-1 uppercase tracking-wider">Full Name *</label>
                <input type="text" name="name" id="name" className="bg-black/5 dark:bg-black/30 border border-glass-border p-4 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent focus:bg-black/10 dark:focus:bg-black/50 transition-all duration-300" placeholder="Your name" required disabled={status === 'sending'} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted font-medium ml-1 uppercase tracking-wider">Email Address *</label>
                <input type="email" name="email" id="email" className="bg-black/5 dark:bg-black/30 border border-glass-border p-4 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent focus:bg-black/10 dark:focus:bg-black/50 transition-all duration-300" placeholder="your@email.com" required disabled={status === 'sending'} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted font-medium ml-1 uppercase tracking-wider">Message *</label>
                <textarea name="message" id="message" className="bg-black/5 dark:bg-black/30 border border-glass-border p-4 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent focus:bg-black/10 dark:focus:bg-black/50 transition-all duration-300 resize-y min-h-[160px]" placeholder="Tell me about your project, needs, and timeline..." required disabled={status === 'sending'}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full mt-2 !py-4 font-semibold tracking-wide flex items-center justify-center gap-2" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Request...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Submit Inquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-start gap-3 border border-emerald-500/20 font-medium">
                  <CheckCircle2 className="flex-shrink-0 mt-0.5" size={20} />
                  <span>Inquiry received successfully! I will review your details and respond within 24-48 hours.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 text-red-500 rounded-xl flex items-start gap-3 border border-red-500/20 font-medium">
                  <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                  <span>Something went wrong while sending your message. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
