import React from 'react';
import { Newspaper, Bell, ArrowUpRight, Search } from "lucide-react";
import { Info, AlertTriangle, Scale, ArrowRight, Shield, UserCheck, Code, Globe } from 'lucide-react';
import { ShieldCheck, Target, Zap, BarChart, Layout } from 'lucide-react';



const achievements = [
  {
    text: "Each page has institutional tone",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    bg: "bg-slate-800/50"
  },
  {
    text: "Each page supports certification positioning",
    icon: <Target className="text-blue-400" size={24} />,
    bg: "bg-slate-800/50"
  },
  {
    text: "Each page supports advisory engagement",
    icon: <Zap className="text-amber-400" size={24} />,
    bg: "bg-slate-800/50"
  },
  {
    text: "No blog feel",
    icon: <Layout className="text-rose-400" size={24} />,
    bg: "bg-slate-800/50"
  },
  {
    text: "No marketing feel",
    icon: <BarChart className="text-indigo-400" size={24} />,
    bg: "bg-slate-800/50"
  }
];

const examples = [
  {
    id: "RB-2026-01",
    title: "Executive Oversight in Cyber Governance",
    focus: "Board Accountability",
    icon: <Shield className="text-blue-500" size={20} />,
  },
  {
    id: "RB-2026-02",
    title: "Managing Identity Risk in Distributed Teams",
    focus: "Zero-Trust Architecture",
    icon: <UserCheck className="text-blue-500" size={20} />,
  },
  {
    id: "RB-2026-03",
    title: "Secure Development in Agile Environments",
    focus: "DevSecOps Integration",
    icon: <Code className="text-blue-500" size={20} />,
  },
  {
    id: "RB-2026-04",
    title: "Third-Party Risk Governance Essentials",
    focus: "Supply Chain Resilience",
    icon: <Globe className="text-blue-500" size={20} />,
  }
];

const structureElements = [
  {
    title: "Context",
    desc: "Historical framing and the specific market or technological shift triggering the brief.",
    icon: <Info className="text-blue-600" size={20} />,
    bgColor: "bg-blue-50"
  },
  {
    title: "Risk Indicator",
    desc: "Quantifiable or qualitative signals that suggest an escalating threat or vulnerability.",
    icon: <AlertTriangle className="text-amber-600" size={20} />,
    bgColor: "bg-amber-50"
  },
  {
    title: "Governance Consideration",
    desc: "Regulatory implications and the specific 'Duty of Care' required from the Board.",
    icon: <Scale className="text-emerald-600" size={20} />,
    bgColor: "bg-emerald-50"
  },
  {
    title: "Recommended Structural Focus",
    desc: "Concrete architectural or organizational changes needed to mitigate the identified risk.",
    icon: <Target className="text-indigo-600" size={20} />,
    bgColor: "bg-indigo-50"
  }
];

const ResearchBriefs: React.FC = () => (
  <main>
    <section className="relative bg-white pt-20 pb-16 px-6 overflow-hidden border-b border-slate-100">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">

          {/* Text Content */}
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Bell size={14} className="text-blue-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">New Analysis Published Today</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Research Briefs
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
              Concise <span className="text-slate-900 font-medium">advisory notes</span> addressing
              emerging <span className="text-slate-900 font-medium">risk trends</span> and
              governance themes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search risk trends (e.g. 'Post-Quantum', 'AI Bias')..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-xl shadow-slate-200">
                Browse Archive
              </button>
            </div>
          </div>

          {/* Featured "Brief" Card - Visual Anchor */}
          <div className="lg:w-1/3">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-12">
                <Newspaper size={32} className="text-blue-400" />
                <span className="text-xs font-mono text-slate-400">Vol. 26-04</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">The Impact of AI Governance on Maturity Scores</h4>
              <p className="text-slate-400 text-sm mb-6">An analysis of how regulatory shifts are redefining 'Operational Alignment' in 2026.</p>
              <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Read Full Brief <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Filter Tags */}
        <div className="mt-16 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Top Themes:</span>
          {['Quantum Resilience', 'Supply Chain', 'Board Reporting', 'Zero Trust Architecture'].map((tag) => (
            <button key={tag} className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>



    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-slate-300 flex-grow"></div>
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
            Brief Anatomy
          </h2>
          <div className="h-px bg-slate-300 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Interactive Preview */}
          <div className="bg-white rounded-3xl p-1 shadow-2xl border border-slate-200 overflow-hidden transform -rotate-1 hidden lg:block">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <span className="text-xs font-mono opacity-50">SEC-COUNCIL-RESEARCH-DOC</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              {structureElements.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl ${item.bgColor} border border-black/5 flex gap-4 animate-pulse`}>
                  <div className="shrink-0">{item.icon}</div>
                  <div className="space-y-2 flex-grow">
                    <div className="h-4 bg-black/10 rounded w-1/4"></div>
                    <div className="h-3 bg-black/5 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed List */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              Standardized Analysis for <br />
              <span className="text-blue-600">Rapid Executive Decisioning.</span>
            </h3>
            <p className="text-slate-600">
              Every Research Brief follows a rigid four-pillar structure to ensure consistency across governance themes and risk landscapes.
            </p>

            <div className="space-y-6">
              {structureElements.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                  <div className={`mt-1 p-3 rounded-xl ${item.bgColor} transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors pt-4">
              Explore Research Methodology <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 border-l-4 border-blue-600 pl-6">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
            Archive Highlights
          </h2>
          <h3 className="text-3xl font-bold">Research Examples</h3>
        </div>

        {/* The Index Table */}
        <div className="border-t border-slate-800">
          {examples.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-800/30 transition-all px-4 cursor-pointer"
            >
              {/* Left Side: ID and Title */}
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="font-mono text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                  {item.id}
                </span>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block p-2 bg-slate-800 rounded text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Right Side: Focus and Action */}
              <div className="flex items-center justify-between md:justify-end gap-12">
                <div className="text-right">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                    Structural Focus
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    {item.focus}
                  </span>
                </div>
                <div className="p-3 rounded-full border border-slate-700 group-hover:border-blue-500 transition-colors">
                  <ArrowRight size={18} className="text-slate-500 group-hover:text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metadata */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs font-mono border-t border-slate-800 pt-6">
          <p>CONFIDENTIALITY: PUBLIC ADVISORY</p>
          <p>© 2026 SECURITY COUNCIL RESEARCH DIVISION</p>
        </div>
      </div>
    </section>



    <section className="relative py-24 bg-[#0a0f1a] overflow-hidden">
      {/* Background Technical Image / Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=2000&q=80" 
          alt="Technical Network" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-transparent to-[#0a0f1a]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-black text-4xl md:text-5xl tracking-tighter uppercase italic">
            🔥 What This Achieves
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
          <p className="text-slate-400 mt-8 text-lg font-medium max-w-2xl mx-auto">
            Now your <span className="text-white">“Our Intelligence”</span> dropdown is fully structured:
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 p-6 rounded-xl border border-slate-700/50 backdrop-blur-md ${item.bg} hover:border-slate-500 transition-all group`}
            >
              <div className="shrink-0 p-2 bg-slate-900 rounded-lg border border-slate-700 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-slate-200 font-semibold leading-tight tracking-tight">
                {item.text}
              </p>
            </div>
          ))}
          
          {/* Decorative Terminal Card */}
          <div className="hidden lg:flex items-center justify-center p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 backdrop-blur-md italic text-blue-400 text-xs font-mono">
            // Intelligence Structure Verified_
          </div>
        </div>
      </div>
    </section>

  </main>
);

export default ResearchBriefs;