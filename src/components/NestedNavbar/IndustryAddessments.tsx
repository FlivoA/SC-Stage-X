import React from 'react';

const IndustryAddessments: React.FC = () => (
  <main>
    {/* hero sections */}
    <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-start gap-6">
          
          {/* Visual Indicator */}
          <div className="text-4xl animate-pulse">
            🟦
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Industry Risk Assessments
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Sector-focused evaluation of governance maturity, 
              exposure indicators, and operational security alignment.
            </p>
          </div>

          {/* Optional Action Line */}
          <div className="pt-8 flex gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
              Initiate Assessment
            </button>
            <button className="px-8 py-3 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all">
              Methodology
            </button>
          </div>

        </div>
      </div>
      
      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50" />
    </section>

    

  </main>
);

export default IndustryAddessments;