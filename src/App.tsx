import { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail,
  Heart,
  ArrowLeft
} from 'lucide-react';

// --- CASE STUDY COMPONENT (TECHNICAL MANUAL) ---
function VulcanCaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20 animate-in fade-in duration-500">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
        
        {/* Top Nav */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium font-mono uppercase tracking-widest mb-24 md:mb-32 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </button>

        {/* 2-Column Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6 items-start">
          
          {/* Left Column: Sticky Specs */}
          <div className="md:col-span-4 md:sticky md:top-24 space-y-8">
            <div>
              <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-4">
                03 / VULCAN-AUTO
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Graphics and Prepress Automation
              </h1>
              <p className="text-zinc-400 text-sm leading-relaxed">
                VBA scripting to automate CorelDraw graphics manipulation and print-ready prepress tasks, alongside Excel scripts for mass data manipulation.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <div className="text-emerald-400 font-mono text-sm font-bold tracking-widest uppercase mb-1">
                $23k Annual Savings
              </div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-4">
                Architecture: VBA / Corel API / Excel
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Video Specs */}
          <div className="md:col-span-7 md:col-start-6 space-y-24">
             
             {/* Feature 1 */}
             <div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-4 flex gap-4">
                  <span>Fig 1.0</span>
                  <span className="text-zinc-300">BATCH COLOR CONVERSION</span>
                </div>
                {/* Video Container */}
                <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden relative group cursor-crosshair">
                   <video 
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100"
                     src="/videos/color-conversion.mp4"
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                     <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest bg-zinc-950/80 px-4 py-2 rounded-full border border-zinc-800">Video Signal Offline</span>
                   </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  Automated parsing of vector objects to convert customer color profiles to strict internal print standards. Eliminates manual swatch replacement.
                </p>
             </div>
             
             {/* Feature 2 */}
             <div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-4 flex gap-4">
                  <span>Fig 2.0</span>
                  <span className="text-zinc-300">AUTOMATED PREPRESS RIP</span>
                </div>
                <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden relative group cursor-crosshair">
                   <video 
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100"
                     src="/videos/prepress-rip.mp4"
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                     <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest bg-zinc-950/80 px-4 py-2 rounded-full border border-zinc-800">Video Signal Offline</span>
                   </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  One-click generation of print-ready PDF files. Bypasses manual export dialogues and standardizes bleed, crop, and output settings.
                </p>
             </div>

             {/* Feature 3 */}
             <div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-4 flex gap-4">
                  <span>Fig 3.0</span>
                  <span className="text-zinc-300">EXCEL DATA SYNC</span>
                </div>
                <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden relative group cursor-crosshair">
                   <video 
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100"
                     src="/videos/data-sync.mp4"
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                     <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest bg-zinc-950/80 px-4 py-2 rounded-full border border-zinc-800">Video Signal Offline</span>
                   </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  Bidirectional data flow. Automatically updates job statuses and logs material usage directly back to the master production tracking spreadsheet.
                </p>
             </div>
          </div>
        </div>
        
        <footer className="border-t border-zinc-800 mt-32 pt-8 flex justify-between text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          <p>Ryan McCullough © 2026</p>
        </footer>
      </div>
    </div>
  );
}


// --- MAIN PORTFOLIO COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const projects = [
    {
      id: "01",
      short: "YIELD-CALC",
      title: "Yield Calculator",
      description: "Automated material yield estimation. Calculates and auto-searches real-world ERP data for matching part references, reducing calculation time by 75%.",
      tech: "REACT / FIREBASE",
      link: "https://calc.ryanmccullough.dev",
      internalRoute: null,
      cols: "col-span-1"
    },
    {
      id: "02",
      short: "OSHA-AI",
      title: "OSHA AI Generator",
      description: "AI-powered compliance engine that generates vector-perfect safety signage from natural language prompts.",
      tech: "OPENAI / NEXT.JS",
      link: "https://signai.ryanmccullough.dev",
      internalRoute: null,
      cols: "col-span-1"
    },
    {
      id: "03",
      short: "VULCAN-AUTO",
      title: "Graphics and Prepress Automation",
      description: "VBA scripting to automate CorelDraw graphics manipulation and print-ready prepress tasks, alongside Excel scripts for mass data manipulation.",
      tech: "VBA / SCRIPTING",
      link: "https://auto.ryanmccullough.dev",
      internalRoute: "vulcan-case-study", // Triggers internal component
      cols: "col-span-1",
      highlight: "$23k SAVINGS"
    }
  ];

  // Routing Logic
  if (currentView === 'vulcan-case-study') {
    return <VulcanCaseStudy onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-24">
        
        {/* HEADER / NAV */}
        <header className="mb-36 grid grid-cols-2 gap-8 items-start">
          <div>
             <div className="font-bold text-sm tracking-tight">Ryan McCullough</div>
          </div>
          
          <div className="flex gap-6 justify-end text-zinc-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:ryanbmcc@gmail.com" className="hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </header>

        <main className="space-y-36">
          
          {/* 1. HERO SECTION */}
          <section>
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-14 max-w-[830px] flex flex-wrap items-center gap-x-4">
              <span>GRAPHIC DESIGNER WHO</span>
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
               <a 
                 href={project.link} 
                 key={project.id}
                 onClick={(e) => {
                   if (project.internalRoute) {
                     e.preventDefault();
                     setCurrentView(project.internalRoute);
                   }
                 }}
                 className="group relative border-t border-zinc-800 pt-6 hover:border-zinc-500 transition-colors duration-500 block h-full cursor-pointer"
               >
                 
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
