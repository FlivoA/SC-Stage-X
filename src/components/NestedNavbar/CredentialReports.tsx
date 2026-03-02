import React from 'react';
import {
  Fingerprint,
  Activity,
  ChevronRight,
  Users,
  Key,
  RefreshCw,
  ShieldCheck,
  Globe,
  Code2,
  CloudCog,
  ArrowRight,
  FileBarChart,
  Zap,
  Download,
  Lock,
  Target,
  TrendingUp,
  Layout
} from 'lucide-react';

const programs = [
  { title: "Risk Diagnostic", detail: "Initial baseline assessment", icon: <Target size={24} /> },
  { title: "Governance Sync", detail: "Policy alignment workshop", icon: <Zap size={24} /> },
  { title: "Maturity Roadmap", detail: "Long-term scaling strategy", icon: <Layout size={24} /> }
];

const exposureFactors = [
  { icon: <Key size={20} />, text: "Weak password hygiene" },
  { icon: <Activity size={20} />, text: "Credential reuse" },
  { icon: <ShieldCheck size={20} />, text: "Inadequate multi-factor enforcement" },
  { icon: <TrendingUp size={20} />, text: "Privilege escalation mismanagement" },
  { icon: <Users size={20} />, text: "Insider access misuse" },
];

const reports = [
  {
    title: "Sector Credential Risk Reports",
    desc: "Deep-dive analysis of industry-specific leak patterns and targeting trends.",
    icon: <FileBarChart className="text-blue-500" size={28} />,
    tag: "Bi-Weekly Update",
    color: "border-blue-500"
  },
  {
    title: "Identity Governance Advisory Notes",
    desc: "Strategic guidance on remediating systemic access control failures.",
    icon: <ShieldCheck className="text-indigo-500" size={28} />,
    tag: "Executive Brief",
    color: "border-indigo-500"
  },
  {
    title: "Access Maturity Indicators",
    desc: "Quantitative benchmarking of institutional security posture vs. global peers.",
    icon: <Zap className="text-amber-500" size={28} />,
    tag: "Quarterly Metric",
    color: "border-amber-500"
  }
];

const domains = [
  {
    title: "Identity Lifecycle Governance",
    desc: "End-to-end management of digital identities from onboarding to offboarding.",
    icon: <RefreshCw className="text-blue-500" size={24} />,
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Privileged Access Management",
    desc: "Securing high-value administrative accounts and sensitive system entry points.",
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Third-Party Credential Risk",
    desc: "Monitoring and mitigating exposure originating from vendor and partner ecosystems.",
    icon: <Globe className="text-purple-500" size={24} />,
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    title: "Developer Credential Exposure",
    desc: "Identifying leaked secrets, API keys, and hardcoded credentials in CI/CD pipelines.",
    icon: <Code2 className="text-orange-500" size={24} />,
    gradient: "from-orange-500/10 to-transparent"
  },
  {
    title: "Cloud Access Misconfiguration",
    desc: "Governance of IAM roles and entitlement sprawl within multi-cloud environments.",
    icon: <CloudCog className="text-cyan-500" size={24} />,
    gradient: "from-cyan-500/10 to-transparent"
  }
];

const CredentialReports: React.FC = () => (
  <main className="bg-white min-h-screen">
    {/* HERO SECTION */}
    <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden font-sans px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-700/30 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Security Council Intelligence
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          Credential
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
            Exposure Intelligence
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Structured analysis of identity-based risk, credential compromise trends,
          and access governance failures across industries.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-2 group">
            View Intelligence Report
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-3 px-6 border-l border-slate-800">
            <Activity className="text-slate-500" size={24} />
            <div className="text-left">
              <p className="text-white font-bold leading-none">Real-Time</p>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mt-1">
                Threat Mapping
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative group">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-3 shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
              alt="Dashboard"
              className="w-full h-[450px] object-cover rounded-2xl opacity-70 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Risk Card */}
          <div className="absolute -top-6 right-6 bg-slate-950/90 backdrop-blur-md border border-slate-700 p-5 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <Fingerprint className="text-blue-400" size={18} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Identity Risk
              </span>
            </div>
            <div className="text-3xl font-black text-red-500">CRITICAL</div>
          </div>
        </div>

      </div>
    </section>

    {/* OVERVIEW SECTION */}
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">Overview</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              Identity remains the most <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">exploited attack vector.</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Institutions face significant exposure through a combination of systemic vulnerabilities and behavioral risks.
            </p>
            <div className="p-6 bg-slate-900 rounded-2xl border-l-8 border-blue-500 shadow-xl">
              <p className="text-slate-200 font-medium italic leading-relaxed">
                "Security Council evaluates credential exposure trends and governance gaps affecting institutional security maturity."
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="grid gap-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Exposure Drivers:</p>
              {exposureFactors.map((factor, index) => (
                <div key={index} className="group flex items-center p-5 bg-slate-50 border border-slate-100 rounded-xl transition-all hover:bg-white hover:shadow-lg hover:border-blue-200">
                  <div className="mr-5 p-3 bg-white rounded-lg shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {factor.icon}
                  </div>
                  <span className="text-lg font-semibold text-slate-800">{factor.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* RISK DOMAINS */}
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-3">Risk Domains</h2>
          <h3 className="text-3xl font-black text-slate-900">Critical Infrastructure Verticals</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div key={index} className="group relative bg-white border border-slate-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform">{domain.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{domain.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{domain.desc}</p>
                <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                  View Domain Specs <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
          <div className="bg-blue-600 p-8 rounded-2xl flex flex-col justify-center text-white shadow-lg">
            <h4 className="text-xl font-bold mb-2">Continuous Oversight</h4>
            <p className="text-blue-100 text-sm opacity-90">Each domain is subjected to real-time risk assessment and governance gap correlation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* REPORT OUTPUT */}
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-3">Report Output</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Intelligence Deliverables</h3>
          <p className="text-slate-500 max-w-2xl">The Council provides high-fidelity outputs designed to convert complex identity data into remediable governance workflows.</p>
        </div>
        <div className="space-y-6">
          {reports.map((report, index) => (
            <div key={index} className={`group flex flex-col md:flex-row items-center gap-6 p-8 bg-slate-50 rounded-2xl border-l-4 ${report.color} transition-all hover:bg-white hover:shadow-xl`}>
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">{report.icon}</div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-200/50 px-2 py-0.5 rounded">{report.tag}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{report.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{report.desc}</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-all">
                <Download size={16} /> Download PDF
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-slate-400 text-xs">
          <Lock size={14} /> <span>All reports are encrypted and intended for authorized institutional stakeholders only.</span>
        </div>
      </div>
    </section>

    {/* ENGAGEMENT SECTION */}
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-blue-500"></div>
                <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em]">Engagement</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                Structured identity risk evaluation <br />
                <span className="text-blue-500">available through Council programs.</span>
              </h2>
              <button className="group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center gap-4">
                Initialize Program Engagement <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="grid gap-4">
              {programs.map((program, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-slate-900/80 border border-slate-700 rounded-2xl group hover:border-blue-500 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {program.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{program.title}</h4>
                    <p className="text-slate-500 text-sm">{program.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


    
  </main>
);

export default CredentialReports;