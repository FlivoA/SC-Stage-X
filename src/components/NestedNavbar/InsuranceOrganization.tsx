import React from "react";

import { FaShieldAlt, FaUsers } from "react-icons/fa";

interface InsurancePageProps {
  onNavigate?: (page: string) => void;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-24">

      {/* =========================
          1. HERO SECTION
      ========================== */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Security Readiness for Insurance Organizations
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Strengthening governance, data protection, and operational resilience across life, general, and health insurance institutions through structured awareness, enablement, and certification frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => onNavigate?.("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-lg transition transform hover:scale-105"
              >
                <FaShieldAlt /> Engage With the Council
              </button>

              <button
                onClick={() => onNavigate?.("programs")}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-100 shadow transition transform hover:scale-105"
              >
                <FaUsers /> Explore Programs
              </button>
            </div>
          </div>

          {/* RIGHT SINGLE IMAGE */}
          <div className="relative w-full h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1920" alt="" />
          </div>

        </div>
      </section>


      {/* =========================
          2. SECTOR OVERVIEW
      ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 font-sans">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Visual Content */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#002856] to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Cybersecurity and Insurance Data Protection"
                className="w-full h-[400px] md:h-[550px] object-cover transform transition duration-500 group-hover:scale-105"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border-l-4 border-[#002856]">
                <p className="text-[#002856] font-bold text-sm uppercase tracking-wider">Enterprise Security</p>
                <p className="text-gray-600 text-xs">Certified Protection Framework</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002856] leading-tight mb-8">
              The Security Imperative <br className="hidden md:block" /> in Insurance
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Insurance organizations manage highly sensitive personal, medical,
                and financial data while operating across distributed agency
                networks, third-party vendors, and digital claims ecosystems.
              </p>

              <p className="border-l-4 border-[#002856]/20 pl-4 italic text-gray-600">
                Digital onboarding, API integrations, telematics, and insurtech
                partnerships have expanded operational complexity and attack surfaces.
              </p>

              <div className="mt-8">
                <p className="font-bold text-[#002856] mb-4 flex items-center">
                  Common structural challenges:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Exposure of policyholder data",
                    "Inconsistent access governance",
                    "Weak secure development",
                    "Third-party and vendor risk",
                    "Regulatory compliance pressures"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="mr-2 text-[#002856]">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#002856] to-[#004080] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Security Council works with insurance institutions to improve
              structural security maturity through awareness, governance
              alignment, and <span className="font-bold underline decoration-blue-400">certification pathways.</span>
            </p>
          </div>
          {/* Subtle background pattern decoration */}
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
            <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================
          3. KEY RISK DOMAINS
      ========================== */}
      <section className="bg-[#001a35] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header with "Audited" aesthetic */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight whitespace-nowrap">
                Critical Risk Areas in the <span className="text-blue-500">Insurance Sector</span>
              </h2>
            </div>

          </div>

          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left: Interactive Risk List */}
            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  title: "Policyholder Data Protection",
                  desc: "Safeguarding sensitive personal and health information across digital platforms.",
                  id: "ID-01",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                },
                {
                  title: "Third-Party & Agency Network Risk",
                  desc: "Extended risk through intermediaries, TPAs, and technology vendors.",
                  id: "ID-02",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: "Claims Platform Vulnerabilities",
                  desc: "Application security gaps in online claims and underwriting systems.",
                  id: "ID-03",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                {
                  title: "Identity & Access Governance",
                  desc: "Credential exposure, role misalignment, and privilege misuse.",
                  id: "ID-04",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                {
                  title: "Regulatory Compliance Alignment",
                  desc: "Adherence to IRDAI and sector-specific governance requirements.",
                  id: "ID-05",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <span className="text-blue-500 font-mono text-xs mt-1">{item.id}</span>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: The "Visual Focus" (Fixed/Sticky on Scroll) */}
            <div className="lg:col-span-7 sticky top-24 h-[600px]">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10">
                {/* Main Visual Image */}
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&auto=format"
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  alt="Insurance Governance Background"
                />

                {/* Tech Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-black/60"></div>

                {/* Floating Data Display */}
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Institutional Oversight</h3>
                    <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      Active_Monitoring
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Risk Sensitivity</p>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Governance Coverage</p>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abstract Grid Decor */}
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="white">
                    <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                    <path d="M50 10V90M10 50H90" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          4. PROGRAMS
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 font-sans">
        {/* Header with decorative underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#002856] mb-4">
            Structured Enablement for Insurance Institutions
          </h2>
          <div className="flex justify-center">
            <span className="w-16 h-1.5 bg-blue-500 rounded-full mr-1"></span>
            <span className="w-4 h-1.5 bg-blue-300 rounded-full"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: List of Services */}
          <div className="lg:col-span-7 space-y-10 relative">
            {/* Vertical connector line for visual flow */}
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100 hidden md:block"></div>

            {[
              {
                title: "Security Awareness Programs",
                desc: "Targeted awareness initiatives addressing insider risk, phishing resilience, and data handling practices.",
                icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              },
              {
                title: "Developer Security Training",
                desc: "Secure SDLC alignment for digital claims, underwriting, and policy management systems",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              },
              {
                title: "Background Verification Governance",
                desc: "Framework-based guidance for workforce and agent verification processes.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Security Maturity Evaluation",
                desc: "Advisory-led evaluation of governance alignment and operational security posture.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Certification Pathway",
                desc: "Structured participation in Security Council certification for institutional recognition.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-0 md:pl-16 group">
                {/* Icon Badge */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-slate-100 rounded-xl flex items-center justify-center shadow-sm group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300 z-10 hidden md:flex">
                  <svg className="w-6 h-6 text-[#002856] group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>

                <div>
                  <h4 className="font-bold text-xl text-[#002856] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Reinforcement */}
          <div className="lg:col-span-5 space-y-6 hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                alt="Professional Training"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
                alt="Security Certification"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          5. INSIGHTS
      ========================== */}
      <section className="relative bg-[#f8fafc] py-24 px-6 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
            alt="Data Visualization"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#002856] mb-6 tracking-tight">
              Sector Intelligence & Advisory Notes
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Security Council publishes sector-focused research and advisory briefings for insurance organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Emerging Risks in Digital Claims Processing", tag: "Research", read: "8 min" },
              { title: "Identity Governance in Distributed Agency Networks", tag: "Governance", read: "12 min" },
              { title: "Data Exposure Trends in Health Insurance Platforms", tag: "Threat Intel", read: "10 min" },
              { title: "Secure API Practices for Insurtech Integrations", tag: "Technical", read: "15 min" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.read}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002856] group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 flex items-center text-[#002856] font-bold text-sm">
                  <span>Download Briefing</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-[#002856] text-white font-bold rounded-full hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all duration-300 group">
               View Insurance Intelligence
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          6. ENGAGEMENT MODEL
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 font-sans">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Visual Engagement Path */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-[#002856] mb-8 leading-tight">
              How Insurance <br /> Organizations Engage
            </h2>

            <div className="relative space-y-8">
              {/* Decorative Vertical Line */}
              <div className="absolute left-[1.6rem] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

              {[
                { title: "Access Intelligence", desc: "Access to industry-specific intelligence", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Structured Training", desc: "Structured training programs", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                { title: "Advisory & Workshops", desc: "Advisory sessions and workshops", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "Maturity Evaluation", desc: "Maturity evaluation processes", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 022 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "Certification", desc: "Eligibility for certification evaluation", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors shadow-sm">
                    <svg className="w-6 h-6 text-[#002856]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold text-[#002856]">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Focus Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden group">
              {/* Background Image Decoration */}
              <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Governance Document" className="object-cover w-full h-full" />
              </div>

              <div className="relative z-10">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-200">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.283a2 2 0 01-1.186.128l-2.019-.451a2 2 0 00-1.042.118l-1.162.465a2 2 0 01-.997.023l-3.09-.618m4.845-12.587l1.503 4.509a1 1 0 00.948.684h4.741a1 1 0 00.587-1.811l-3.837-2.788a1 1 0 00-.363-1.118l1.465-4.394a1 1 0 00-1.537-1.117l-3.838 2.788a1 1 0 00-.363 1.118l1.503 4.509a1 1 0 00.948.684h4.741a1 1 0 00.587-1.811l-3.837-2.788a1 1 0 00-.363-1.118l1.465-4.394a1 1 0 00-1.537-1.117l-3.838 2.788z" />
                  </svg>
                </div>

                <p className="text-[#002856] font-medium text-lg leading-relaxed mb-6">
                  Engagement with Security Council is
                  <span className="font-bold underline decoration-blue-500 decoration-2 underline-offset-4 ml-1">structured and voluntary.</span>
                </p>

                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "The objective is sustained governance improvement, not one-time compliance activity."
                  </p>
                </div>

                <div className="mt-8 flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Trusted by Industry Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          7. CASE PERSPECTIVES
      ========================== */}
      <section className="bg-[#f8fafc] py-24 px-6 relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#002856] mb-4 tracking-tight">
              Institutional Case Perspectives
            </h2>
            {/* <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
              Proven Governance Frameworks in Action
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Case Study 1 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-[#002856] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#002856] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Health Sector</span>
              </div>

              <h4 className="text-2xl font-bold text-[#002856] mb-4 leading-snug">
                Health Insurance Provider – <span className="text-blue-600">Strengthening Data Governance</span>
              </h4>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Participated in awareness and governance alignment initiatives across underwriting operations.
              </p>

              <div className="flex items-center text-sm font-semibold text-[#002856]">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Governance Alignment Achieved
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-[#002856] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#002856] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">General Insurance</span>
              </div>

              <h4 className="text-2xl font-bold text-[#002856] mb-4 leading-snug">
                General Insurance Firm – <span className="text-blue-600">Secure Claims Platform Initiative</span>
              </h4>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Implemented structured developer security training aligned with digital transformation roadmap.
              </p>

              <div className="flex items-center text-sm font-semibold text-[#002856]">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Secure SDLC Integrated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          8. FINAL CTA
      ========================== */}
      <section className="relative py-24 bg-[#002856] text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" fill="none" viewBox="0 0 400 400">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>

        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
            Strengthen Security  <br className="hidden md:block" />
            Governance Across Your Insurance Operations
          </h2>

          

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onNavigate?.("contact")}
              className="group relative px-10 py-5 bg-white text-[#002856] font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Engage With the Council</span>
              <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 opacity-60 text-sm font-medium tracking-wide">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Institutional Privacy
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Sector Intelligence
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InsurancePage;
