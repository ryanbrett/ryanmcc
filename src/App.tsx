import React from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail
} from 'lucide-react';

function App() {

  const projects = [
    {
      id: "01",
      short: "GRAPHICS-AUTO",
      title: "CorelDraw Automation",
      description: "Custom scripting to handle repetitive prepress tasks. Includes color palette conversion, scale checks, and instant PDF export.",
      tech: "VBA / SCRIPTING",
      link: "#",
      cols: "col-span-1"
    },
    {
      id: "02",
      short: "OSHA-AI",
      title: "Signage Request App",
      description: "An AI-powered compliance engine. Generates vector-perfect safety signage from natural language prompts for industrial use.",
      tech: "OPENAI / NEXT.JS",
      link: "https://signai.ryandd.com",
      cols: "col-span-1"
    },
    {
      id: "03",
      short: "LOCAL-TOOLS",
      title: "React Reference Systems",
      description: "Secure, localized calculators and database apps designed to replace dated paper-based reference materials.",
      tech: "REACT / FIREBASE",
      link: "https://calculator.ryandd.com",
      cols: "col-span-1"
    },
    {
      id: "04",
      short: "PERSONAL-FINANCE",
      title: "Beer Budget",
      description: "A dedicated financial tracking tool built to manage craft beer expenses.",
      tech: "REACT / ANALYTICS",
      link: "#",
      cols: "col-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* HEADER / NAV */}
        <header className="border-t border-zinc-800 pt-6 mb-32 grid grid-cols-2 gap-8 items-start">
          <div>
             <div className="font-bold text-sm tracking-tight">Ryan McCullough</div>
          </div>
          
          {/* Socials - Simple and Right Aligned */}
          <div className="flex gap-6 justify-end text-zinc-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:ryan@ryandd.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </header>

        <main className="space-y-32">
          
          {/* 1. HERO SECTION */}
          <section>
            {/* Headline: High Contrast with Dimmed Punctuation */}
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-12 max-w-5xl">
              Designer<span className="text-zinc-600">.</span> Coder<span className="text-zinc-600">.</span> <br className="hidden md:block" />
              Former Chef<span className="text-zinc-600">.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-900 pt-8 max-w-4xl">
               <div className="text-base text-zinc-400 leading-relaxed">
                 <p>
                    My first build was a Dragon Ball Z polling site with inline styles. Today, I engineer React-based automation to modernize legacy industrial workflows. 
                 </p>
                 <p className="mt-4">
                    I build tools that make manual tasks obsolete.
                 </p>
               </div>
               
               <div className="flex flex-col gap-4 items-start md:items-start md:pl-12">
                  <button className="text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all text-sm font-medium flex items-center gap-2 group">
                    View Case Studies 
                    <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
                  </button>
                  <button className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                    Download Resume
                  </button>
               </div>
            </div>
          </section>

          {/* 2. THE WORK */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            
            {projects.map((project) => (
               <a href={project.link} key={project.id} className="group relative border-t border-zinc-800 pt-6 hover:border-zinc-500 transition-colors duration-500 block h-full">
                 
                 {/* Spec Sheet Header */}
                 <div className="flex justify-between items-start mb-12">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-white" size={20} />
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase group-hover:text-zinc-300 transition-colors">
                      {project.id} <span className="text-zinc-700">/</span> {project.short}
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex flex-col justify-between min-h-[160px]">
                   <div>
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-zinc-600">
                        {project.title}
                     </h3>
                     <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                       {project.description}
                     </p>
                   </div>

                   <div className="flex justify-between items-baseline mt-8 border-t border-zinc-900/50 pt-4">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {project.tech}
                      </span>
                   </div>
                 </div>
               </a>
            ))}
          </section>
        </main>
        
        <footer className="border-t border-zinc-800 mt-32 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          <p>Ryan McCullough © 2026</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>React</span>
             <span>Tailwind</span>
             <span>Vite</span>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
