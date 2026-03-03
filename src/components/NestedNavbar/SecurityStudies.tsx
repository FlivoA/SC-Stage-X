import React from 'react';
import { ShieldCheck, Users, ArrowRight, Activity, Code2, Fingerprint, BarChart3, CheckCircle2, Shield, ShieldAlert, ShieldEllipsis, Award, FileBarChart, LineChart, Globe2 } from "lucide-react";


const outputs = [
  {
    title: "Annual Maturity Benchmark Reports",
    description: "A comprehensive deep-dive into your year-over-year progress, identifying growth trends and remaining security gaps.",
    icon: <FileBarChart className="text-blue-600" size={28} />,
    tag: "Strategic"
  },
  {
    title: "Executive Governance Indicators",
    description: "High-level KPIs designed for Board-level reporting, translating technical posture into institutional risk metrics.",
    icon: <LineChart className="text-blue-600" size={28} />,
    tag: "Governance"
  },
  {
    title: "Sector Readiness Comparisons",
    description: "Anonymized benchmarking data allowing you to measure your maturity against industry peers and global standards.",
    icon: <Globe2 className="text-blue-600" size={28} />,
    tag: "Intelligence"
  }
];

const levels = [
  {
    id: 1,
    title: "Level 1 – Reactive",
    description: "Initial security measures are ad-hoc and disorganized. Responses are triggered by incidents rather than proactive planning.",
    icon: <ShieldAlert className="text-rose-500" />,
    color: "border-rose-200 bg-rose-50",
    dotColor: "bg-rose-500"
  },
  {
    id: 2,
    title: "Level 2 – Policy-Defined",
    description: "Basic security policies are documented. Requirements are identified, but implementation remains inconsistent across departments.",
    icon: <ShieldEllipsis className="text-orange-500" />,
    color: "border-orange-200 bg-orange-50",
    dotColor: "bg-orange-500"
  },
  {
    id: 3,
    title: "Level 3 – Governance Aligned",
    description: "Security is integrated into business processes. Governance structures ensure alignment with institutional risk management.",
    icon: <Shield className="text-blue-500" />,
    color: "border-blue-200 bg-blue-50",
    dotColor: "bg-blue-500"
  },
  {
    id: 4,
    title: "Level 4 – Integrated Security Culture",
    description: "Security awareness is embedded in the workforce. Development and operations teams collaborate under a unified security mindset.",
    icon: <ShieldCheck className="text-indigo-500" />,
    color: "border-indigo-200 bg-indigo-50",
    dotColor: "bg-indigo-500"
  },
  {
    id: 5,
    title: "Level 5 – Structured & Certified",
    description: "Continuous improvement is automated. Independent certification validates a resilient, mature, and transparent security posture.",
    icon: <Award className="text-emerald-500" />,
    color: "border-emerald-200 bg-emerald-50",
    dotColor: "bg-emerald-500"
  }
];

const evaluationCriteria = [
  {
    title: "Governance Structure",
    desc: "Review of leadership oversight, policy frameworks, and accountability chains.",
    icon: <ShieldCheck className="text-blue-600" size={24} />
  },
  {
    title: "Workforce Awareness",
    desc: "Measuring the human firewall through culture audits and behavioral testing.",
    icon: <Users className="text-blue-600" size={24} />
  },
  {
    title: "Secure Development",
    desc: "Integration of security protocols directly into the CI/CD pipeline (DevSecOps).",
    icon: <Code2 className="text-blue-600" size={24} />
  },
  {
    title: "Identity Governance",
    desc: "Evaluation of IAM maturity, least-privilege access, and lifecycle management.",
    icon: <Fingerprint className="text-blue-600" size={24} />
  },
  {
    title: "Risk Transparency",
    desc: "Clarity in reporting and data-driven decision making for stakeholders.",
    icon: <BarChart3 className="text-blue-600" size={24} />
  }
];



const pillars = [
  {
    title: "Governance Readiness",
    description: "Strategic Frameworks & Compliance",
    icon: <ShieldCheck className="w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Operational Alignment",
    description: "Tactical Integration & Efficiency",
    icon: <Activity className="w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Institutional Security Culture",
    description: "Human Element & Awareness",
    icon: <Users className="w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  }
];

const SecurityStudies: React.FC = () => (
  <main>

    
    <section className="bg-white py-16 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            Security Maturity Studies
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Structured evaluation of <span className="font-semibold text-slate-900 underline decoration-blue-500 decoration-2 underline-offset-4">governance readiness</span>,
            <span className="font-semibold text-slate-900 underline decoration-blue-500 decoration-2 underline-offset-4 mx-1">operational alignment</span>, and
            <span className="font-semibold text-slate-900 underline decoration-blue-500 decoration-2 underline-offset-4">institutional security culture</span>.
          </p>

          <div className="mt-10">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all group">
              Request a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 transition-all hover:shadow-2xl hover:-translate-y-2">
              {/* Image Container */}
              <div className="h-64 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="absolute -top-10 left-8 p-4 bg-white rounded-xl shadow-lg border border-slate-100">
                  {pillar.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold tracking-widest text-blue-600 uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-slate-500 font-medium italic">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: The Philosophy */}
        <div className="lg:col-span-5">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
            The Philosophy
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Security maturity extends beyond compliance checklists.
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            True resilience isn't found in a "pass/fail" audit. It is a continuous measurement of how deeply security is woven into the fabric of your operations.
          </p>
          <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <CheckCircle2 className="text-emerald-400 shrink-0" />
            <p className="text-slate-200 font-medium">Verified Security Council Methodology</p>
          </div>
        </div>

        {/* Right Column: The Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {evaluationCriteria.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800/60 transition-colors ${idx === 4 ? 'sm:col-span-2' : ''}`}
            >
              <div className="mb-4 bg-blue-500/10 w-fit p-3 rounded-lg">
                {item.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Security Maturity Model
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            A standardized roadmap for evolving from perimeter defense to a resilient, 
            culture-driven security institution.
          </p>
        </div>

        {/* Timeline / Level List */}
        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-6 space-y-12">
          {levels.map((level) => (
            <div key={level.id} className="relative pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-125 ${level.dotColor}`} />

              {/* Card Content */}
              <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:translate-x-2 ${level.color}`}>
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {level.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {level.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed max-w-3xl">
                      {level.description}
                    </p>
                    
                    {/* Level Badge (Optional) */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Maturity Phase 0{level.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action */}
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl text-center">
          <h4 className="text-white text-2xl font-bold mb-2">Where does your organization stand?</h4>
          <p className="text-slate-400 mb-6">Our studies provide the data you need to move to the next level.</p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors">
            Start Your Assessment
          </button>
        </div>
      </div>
    </section>


    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              Deliverables
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              Study Output
            </h3>
            <p className="mt-4 text-slate-600 text-lg">
              Our evaluations culminate in actionable intelligence, providing leadership with the clarity needed to prioritize security investments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outputs.map((output, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl">
                {output.icon}
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">
                {output.tag}
              </span>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {output.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {output.description}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group">
                View Sample Output
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>


    




  </main>
);

export default SecurityStudies;