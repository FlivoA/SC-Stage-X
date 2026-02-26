import React from "react";

interface EnterprisePageProps {
  onNavigate?: (page: string) => void;
}

const EnterprisePage: React.FC<EnterprisePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-24">

      {/* =========================
          1. HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-100 group isolate">

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1400"
            alt="Enterprise Security Background"
            loading="lazy"
            className="w-full h-full object-cover will-change-transform 
                 transition-transform duration-[1200ms] ease-out 
                 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr 
                    from-[#002856]/95 via-white/80 to-white/40 
                    backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative py-20 px-6 md:px-12 lg:px-16 
                  max-w-6xl mx-auto flex flex-col lg:flex-row 
                  items-center justify-between gap-12">

          {/* Left Content */}
          <div className="max-w-3xl text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full 
                      bg-blue-50 border border-blue-100 
                      text-[#002856] text-xs font-bold uppercase 
                      tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Enterprise-Grade Governance
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
                     text-[#002856] mb-8 leading-tight tracking-tight">
              Security Maturity for{" "}
              <span className="text-blue-600 block md:inline">
                Enterprise Organizations
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 
                    mb-10 leading-relaxed font-medium">
              Strengthening governance alignment, workforce awareness, and operational resilience across complex enterprise environments through structured enablement and certification frameworks.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

              <button
                onClick={() => onNavigate?.("contact")}
                className="px-8 py-4 rounded-xl bg-[#002856] text-white 
                     font-bold shadow-lg hover:bg-[#001f40] 
                     hover:-translate-y-1 transition-all duration-300"
              >
                Engage With the Council
              </button>

              <button
                onClick={() => onNavigate?.("programs")}
                className="px-8 py-4 rounded-xl border border-[#002856]/20 
                     bg-white/60 backdrop-blur 
                     text-[#002856] font-bold 
                     hover:bg-white hover:border-[#002856]/40 
                     transition-all duration-300 shadow-sm"
              >
                Explore Programs
              </button>

            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="w-72 h-72 bg-gradient-to-br 
                      from-blue-600 to-blue-900 
                      rounded-[3rem] absolute -inset-4 
                      opacity-10 animate-pulse"></div>

            <div className="w-72 h-72 bg-white/50 backdrop-blur-xl 
                      border border-white/40 rounded-[3rem] 
                      flex items-center justify-center 
                      shadow-xl relative">
              <svg
                className="w-32 h-32 text-[#002856] opacity-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          2. SECTOR OVERVIEW
      ========================== */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 font-sans">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full"></div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold text-[#002856] mb-8 tracking-tight leading-tight">
            Security Complexity in Modern Enterprises
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto">
            Enterprise organizations operate across distributed infrastructure,
            hybrid cloud environments, third-party ecosystems, and global workforce
            networks. Digital transformation initiatives have accelerated technology
            adoption while
            <span className="text-[#002856] font-semibold">
              {" "}expanding exposure risk.
            </span>
          </p>
        </div>

        {/* Grid of Challenges */}
        <div className="mb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-12 text-center">
            Common enterprise security challenges include
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fragmented Governance",
                desc: "Fragmented governance across business units.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
              {
                title: "Credential Exposure",
                desc: "Credential exposure and privilege mismanagement.",
                icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
              },
              {
                title: "Inconsistent SDLC",
                desc: "Inconsistent secure development practices.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              {
                title: "Supply Chain Risk",
                desc: "Vendor and supply chain vulnerabilities",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
              },
              {
                title: "Workforce Behavior",
                desc: "Limited visibility into workforce security behavior ",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
            ].map((challenge, idx) => (
              <div
                key={idx}
                className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 text-[#002856] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={challenge.icon}
                      />
                    </svg>
                  </div>

                  <h4 className="text-2xl font-bold text-[#002856] mb-3">
                    {challenge.title}
                  </h4>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Callout */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#002856] to-indigo-900 p-12 md:p-16 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <p className="text-2xl md:text-3xl font-light leading-relaxed">
                Security Council works with enterprise organizations to
                <span className="font-bold">
                  {" "}strengthen structural security{" "}
                </span>
                maturity through awareness programs, governance alignment
                frameworks, and certification pathways.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-sm font-semibold tracking-wide hover:bg-white/20 transition duration-300">
                Enterprise Framework v.2026
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* =========================
          3. KEY RISK DOMAINS
      ========================== */}
      <section className="relative py-24 px-6 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Enterprise security background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002856]/85 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-white">

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            Core Enterprise Risk Areas
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Identity & Access Governance",
                desc: "Role misalignment, excessive privileges, and credential exposure risks."
              },
              {
                title: "Secure Development Lifecycle Gaps",
                desc: "Inconsistent application security practices across product teams."
              },
              {
                title: "Workforce Security Behavior",
                desc: "Insufficient awareness leading to phishing susceptibility and data handling errors."
              },
              {
                title: "Third-Party & Supply Chain Risk",
                desc: "Operational exposure through vendor and partner ecosystems."
              },
              {
                title: "Governance Fragmentation",
                desc: "Disconnection between policy, implementation, and operational oversight."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      </section>

      {/* =========================
          4. PROGRAMS
      ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-24 font-sans">
        {/* Header with high-end typography */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002856] mb-6 tracking-tight">
            Structured Enablement for <span className="text-blue-600">Enterprise Environments</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Security Awareness Programs",
              desc: "Organization-wide awareness initiatives tailored to distributed workforces and role-based risk exposure.",
              img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
              icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            },
            {
              title: "Developer Security Training",
              desc: "Secure development lifecycle alignment for engineering and product teams.",
              img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600",
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            },
            {
              title: "Background Verification Governance",
              desc: "Framework-based guidance for workforce trust and access governance alignment.",
              img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
              title: "Security Maturity Evaluation",
              desc: "Advisory-led evaluation of organizational readiness and governance structure.",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            },
            {
              title: "Certification Pathway",
              desc: "Structured participation in Security Council certification to demonstrate maturity commitment.",
              img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
              icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Visual Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002856]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <svg className="w-8 h-8 mb-2 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                  </svg>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="font-bold text-xl text-[#002856] mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
                <div className="mt-auto pt-6">
                  <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card to fill the 6th spot in the grid */}
          <div className="bg-[#002856] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <h4 className="text-2xl font-bold mb-4 relative z-10 text-white">Ready to begin?</h4>
            <p className="text-blue-100 text-sm mb-8 relative z-10">Start your institutional maturity journey today.</p>
            <button className="relative z-10 px-6 py-3 bg-white text-[#002856] rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Engage Council
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          5. ENTERPRISE INTELLIGENCE
      ========================== */}
      <section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-24 px-6 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002856] mb-6 tracking-tight">
              Enterprise-Focused Intelligence & Advisory
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Security Council publishes cross-sector intelligence and maturity
              studies relevant to large-scale enterprise environments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Identity Governance in Hybrid Cloud Enterprises",
                icon: "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z M4 20v-1a7 7 0 0114 0v1"
              },
              {
                title: "Managing Third-Party Risk at Scale",
                icon: "M17 20h5V4H2v16h5m10 0v-6H7v6m10 0H7"
              },
              {
                title: "Secure DevOps Governance Models",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              },
              {
                title: "Workforce Security Behavior Trends",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">

                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-[#002856] group-hover:bg-[#002856] group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.icon}
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#002856] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <button className="inline-flex items-center gap-2 text-[#002856] font-semibold text-lg group">
              View Enterprise Intelligence
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================
          6. ENGAGEMENT MODEL
      ========================== */}
      <section className="relative py-28 px-6 overflow-hidden bg-slate-50">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Enterprise strategy background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002856] mb-6">
              How Enterprises Engage
            </h2>
            <div className="w-20 h-1 bg-[#002856] mx-auto rounded-full"></div>
          </div>

          {/* Intro */}
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
            Enterprise organizations engage through a structured and ongoing model.
          </p>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-blue-200 pl-10 space-y-14">

            {[
              "Access to research briefings and sector intelligence",
              "Organization-wide awareness initiatives",
              "Developer enablement programs",
              "Maturity evaluation sessions",
              "Certification participation"
            ].map((item, index) => (
              <div key={index} className="relative group">

                {/* Circle Icon */}
                <div className="absolute -left-[30px] top-1 w-12 h-12 rounded-full bg-white border-2 border-[#002856] flex items-center justify-center shadow-md group-hover:bg-[#002856] transition">
                  <span className="text-[#002856] group-hover:text-white font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <p className="text-lg text-gray-700 font-medium">
                    {item}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* Closing Text */}
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-20 leading-relaxed">
            Engagement is designed to support long-term governance improvement
            rather than short-term compliance response.
          </p>

        </div>
      </section>

      {/* =========================
          7. CASE PERSPECTIVES
      ========================== */}
      <section className="bg-[#f8fafc] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002856] mb-12 text-center">
            Enterprise Case Perspectives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-semibold text-lg text-[#002856] mb-3">
                Global Enterprise – Identity Governance Alignment Initiative
              </h4>
              <p className="text-gray-700">
                Participated in structured awareness and maturity evaluation to
                reduce privilege misalignment across business units.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-semibold text-lg text-[#002856] mb-3">
                Technology-Driven Enterprise – Secure SDLC Enablement
              </h4>
              <p className="text-gray-700">
                Implemented developer security training to strengthen secure
                product lifecycle governance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          8. FINAL CTA
      ========================== */}
      <section className="text-center py-20 bg-[#002856] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Advance Security Maturity Across Your Enterprise
        </h2>

        <button
          onClick={() => onNavigate?.("contact")}
          className="px-8 py-4 bg-white text-[#002856] font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Engage With the Council
        </button>
      </section>

    </div>
  );
};

export default EnterprisePage;
