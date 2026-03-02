import React from 'react';



const reports = [
    {
      title: "BFSI Risk Mapping Study",
      description: "Macro-level analysis of systemic vulnerabilities within banking and financial infrastructures.",
      tag: "Financial Systems"
    },
    {
      title: "Insurance Exposure Analysis",
      description: "Evaluating actuarial risk models against emerging cyber threat vectors and ransomware trends.",
      tag: "Risk Transfer"
    },
    {
      title: "Enterprise Governance Index",
      description: "Benchmarking corporate oversight maturity across Fortune 500 operational frameworks.",
      tag: "Governance"
    },
    {
      title: "Technology Maturity Indicators",
      description: "Critical assessment of product-led growth security and DevOps-to-DevSecOps transitions.",
      tag: "Product & Tech"
    }
  ];


const sectors = [
    { name: "BFSI", icon: "🏛️" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Enterprise", icon: "🏢" },
    { name: "Technology & Product", icon: "⚙️" }
  ];



const pillars = [
    { title: "Governance Alignment", desc: "Ensuring security strategy mirrors corporate objectives and regulatory mandates." },
    { title: "Identity & Access Risk", desc: "Evaluating the lifecycle of credentials and the perimeter of least-privileged access." },
    { title: "Workforce Security Culture", desc: "Measuring the human element through behavioral analysis and security awareness maturity." },
    { title: "Third-Party Risk", desc: "Quantifying the security posture of the supply chain and external vendor ecosystems." },
    { title: "Development Lifecycle Governance", desc: "Integrating security oversight into the heart of the product build and deployment pipe." }
  ];


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

    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Label */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-4 h-4 bg-blue-600 rounded-sm" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Overview
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Each industry presents unique structural security challenges.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Security Council conducts structured assessments across critical 
              infrastructure and commercial ecosystems:
            </p>
          </div>

          {/* Sector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((sector) => (
              <div 
                key={sector.name} 
                className="group p-6 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block opacity-80 group-hover:opacity-100 transition-opacity">
                  {sector.icon}
                </span>
                <h3 className="font-bold text-slate-800 tracking-wide uppercase text-sm">
                  {sector.name}
                </h3>
              </div>
            ))}
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="mt-20 border-t border-slate-100 w-full" />
      </div>
    </section>


    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">
            Methodology
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 italic">
            ASSESSMENT FRAMEWORK
          </h3>
          <div className="h-1 w-20 bg-blue-600 mt-6" />
        </div>

        {/* Framework Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-slate-200">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white border-r border-b border-slate-200 last:border-r-0 hover:bg-slate-900 transition-all duration-500"
            >
              {/* Pillar Number */}
              <span className="text-xs font-mono text-slate-400 group-hover:text-blue-500 transition-colors">
                0{index + 1}
              </span>
              
              <h4 className="mt-4 mb-4 text-xl font-bold text-slate-800 group-hover:text-white transition-colors leading-tight">
                {pillar.title}
              </h4>
              
              <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {pillar.desc}
              </p>

              {/* Interaction Decorator */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 group-hover:h-1 transition-all" />
            </div>
          ))}
        </div>

        {/* Technical Context Footer */}
        <p className="mt-10 text-slate-400 text-xs italic">
          * Each pillar is evaluated against ISO/IEC 27001 and NIST Cybersecurity Framework standards.
        </p>
      </div>
    </section>

    <section className="bg-white py-24 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-blue-600 font-mono text-sm tracking-widest uppercase">
              Intelligence
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
              SECTOR REPORTS
            </h3>
          </div>
          <button className="text-slate-500 hover:text-blue-600 font-semibold text-sm transition-colors border-b-2 border-slate-100 hover:border-blue-600 pb-1">
            Access Full Archive →
          </button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <div 
              key={index} 
              className="group p-8 border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between bg-slate-50/50"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {report.tag}
                </span>
                <h4 className="text-2xl font-bold text-slate-800 mb-4 leading-snug">
                  {report.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {report.description}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-blue-600 font-bold text-sm cursor-pointer uppercase tracking-tighter">
                <span>Download Executive Summary</span>
                <div className="h-[1px] w-8 bg-blue-600 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Visual Footer */}
        <div className="mt-20 p-12 bg-slate-900 text-center">
          <h4 className="text-white text-xl font-medium mb-4">Request a custom industry deep-dive.</h4>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
            Our analysts provide bespoke risk mapping for specialized industrial sectors not listed in our public repository.
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 font-bold hover:bg-blue-500 hover:text-white transition-all">
            Contact the Council
          </button>
        </div>

      </div>
    </section>


  </main>
);

export default IndustryAddessments;