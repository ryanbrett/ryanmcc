import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail,
  Heart
} from 'lucide-react';

export default function App() {

  const projects = [
    {
      id: "01",
      short: "YIELD-CALC",
      title: "Yield Calculator",
      description: "Automated material yield estimation. Calculates and auto-searches real-world ERP data for matching part references, reducing calculation time by 75%.",
      tech: "REACT / FIREBASE",
      link: "https://calc.ryanmccullough.dev",
      cols: "col-span-1"
    },
    {
      id: "02",
      short: "OSHA-AI",
      title: "OSHA AI Generator",
      description: "AI-powered compliance engine that generates vector-perfect safety signage from natural language prompts.",
      tech: "OPENAI / NEXT.JS",
      link: "https://signai.ryanmccullough.dev",
      cols: "col-span-1"
    },
    {
      id: "03",
      short: "VULCAN-AUTO",
      title: "Graphics and Prepress Automation",
      description: "VBA scripting to automate CorelDraw graphics manipulation and print-ready prepress tasks, alongside Excel scripts for mass data manipulation.",
      tech: "VBA / SCRIPTING",
      link: "https://auto.ryanmccullough.dev",
      cols: "col-span-1",
      highlight: "$23k SAVINGS"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-24">
        
        {/* HEADER / NAV - Spacing set to 144px (Fibonacci) */}
        <header className="mb-36 grid grid-cols-2 gap-8 items-start">
          <div>
             <div className="font-bold text-sm tracking-tight">Ryan McCullough</div>
          </div>
          
          <div className="flex gap-6 justify-end text-zinc-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:ryan@ryandd.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </header>

        {/* Spacing set to 144px (Fibonacci) */}
        <main className="space-y-36">
          
          {/* 1. HERO SECTION */}
          <section>
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-14 max-w-[830px] flex flex-wrap items-center gap-x-4">
              <span>GRAPHIC DESIGNER WHO</span>
              {/* SVG Heart with Stylized 's */}
              <span className="flex items-end">
                <Heart 
                  className="inline-block text-red-500 animate-pulse w-12 h-12 md:w-24 md:h-24" 
                  fill="currentColor" 
                  strokeWidth={0}
                />
                <span className="text-red-500 font-serif italic text-4xl md:text-5xl -ml-1 md:-ml-3 mb-1 md:mb-8 animate-pulse">'s</span>
              </span>
              <span>TO CODE</span>
            </h1>
            
            {/* Swiss Grid Adjustment:
              Switched from symmetric grid-cols-2 to asymmetric grid-cols-12.
              Text spans 7 cols, Buttons span 5 cols.
              This creates a ~1.4 ratio, approaching the Golden Ratio (1.618).
              Removed border and padding-top to clean up lines.
              Gap set to 56px (Fibonacci 55 approximation).
            */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-14 max-w-4xl">
               <div className="md:col-span-7 text-base text-zinc-400 leading-relaxed">
                 <p>
                    Graphics Department Lead specializing in <strong>Workflow Automation</strong>, <strong>React Development</strong>, and <strong>Industrial Design</strong>.
                 </p>
                 <p className="mt-4">
                    I build secure internal apps and automation tools that streamline production—saving time and reducing error.
                 </p>
               </div>
               
               <div className="md:col-span-5 flex flex-col gap-4 items-start md:items-start md:pl-4">
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
                 
                 {/* Header */}
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
                      {project.highlight && (
                        <span className="text-emerald-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                          {project.highlight}
                        </span>
                      )}
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
