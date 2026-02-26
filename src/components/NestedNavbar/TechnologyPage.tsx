import React from "react";

interface TechnologyPageProps {
  onNavigate?: (page: string) => void;
}

const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-28">

      {/* =========================
          1. HERO SECTION
      ========================== */}
      {/* =========================
    1. HERO SECTION (DevSecOps Edition)
========================== */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-[#020617] text-white shadow-2xl border border-white/5">

        {/* Dynamic "Code Pulse" Background */}
        <div className="absolute inset-0 z-0">
          {/* Grid with radial mask for depth */}
          <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Animated Glow Orbs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 py-24 px-6 md:px-16 lg:py-32 flex flex-col items-center">



          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Secure Development & <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Product Governance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Strengthening secure development lifecycle practices, engineering
              governance, and application resilience across modern product  and technology environments
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                onClick={() => onNavigate?.("contact")}
                className="px-10 py-4 rounded-xl bg-white text-[#020617] font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
              >
                Engage With the Council
              </button>

              <button
                onClick={() => onNavigate?.("programs")}
                className="px-10 py-4 rounded-xl border-2 border-white/10 bg-white/5 bg-blur-md text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Explore Programs
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* =========================
          2. CONTEXT OVERVIEW
      ========================== */}
      {/* =========================
    2. CONTEXT OVERVIEW
========================== */}
      <section className="max-w-6xl mx-auto px-6 py-12 font-sans">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Narrative Context */}
          <div className="lg:w-5/12">
          <div className="p-5"></div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Security Challenges in <br />
              <span className="text-indigo-600">Modern Product</span> Environments
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Technology and product teams operate at high velocity. Rapid releases,
                cloud-native architecture, API integrations, and distributed engineering
                teams have transformed product development.
              </p>
              <p className="border-l-4 border-indigo-600 pl-6 italic">
                However, accelerated innovation often introduces structural security gaps.
              </p>
              <p className="text-base">
                Security Council works with technology and product teams to strengthen
                <span className="text-slate-900 font-bold"> secure development governance </span>
                through structured enablement and evaluation frameworks.
              </p>
            </div>
          </div>

          {/* Right Column: Challenge Grid */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Critical Risk Vectors
              </h4>

              <div className="space-y-4">
                {[
                  { title: "Inconsistent secure coding standards", code: "" },
                  { title: "Weak integration of security into DevOps pipelines", code: "" },
                  { title: "Limited visibility into dependency and supply chain risks", code: "" },
                  { title: "Privilege misalignment within engineering environments", code: "" },
                  { title: "Insufficient developer-focused security awareness", code: "" }
                ].map((challenge, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-indigo-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                      </div>
                      <span className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {challenge.title}
                      </span>
                    </div>
                    <span className="hidden sm:block font-mono text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {challenge.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* =========================
    3. CORE RISK DOMAINS (Clean Panel UI)
========================== */}
      <section className="max-w-5xl mx-auto px-6 py-5">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4">
            Key Risk Areas for Technology & Product Teams
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Secure Development Lifecycle (SDLC) Gaps",
              content: "Security controls introduced late in development cycles."
            },
            {
              num: "02",
              title: "DevOps & CI/CD Governance",
              content: "Limited oversight of build pipelines, access controls, and deployment environments."
            },
            {
              num: "03",
              title: "Dependency & Supply Chain Exposure",
              content: "Risks from third-party libraries and open-source components."
            },
            {
              num: "04",
              title: "Cloud & Infrastructure Misconfiguration",
              content: "Exposure caused by mismanaged permissions and configuration drift."
            },
            {
              num: "05",
              title: "Privileged Access & Credential Management",
              content: "Improper role management within engineering teams."
            }
          ].map((risk, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row md:items-center p-6 bg-slate-50 border border-slate-200 rounded-lg hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex-shrink-0 mb-2 md:mb-0 md:w-16">
                <span className="text-sm font-mono font-bold text-blue-600">
                  {risk.num}
                </span>
              </div>

              <div className="md:w-2/5">
                <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {risk.title}
                </h4>
              </div>

              <div className="md:w-3/5 md:pl-8 text-slate-600 text-sm md:text-base leading-relaxed">
                {risk.content}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* =========================
          4. PROGRAMS
      ========================== */}

      <section className="max-w-5xl mx-auto px-6 py-20 bg-white">
        {/* Header with simple underline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Structured Enablement for Engineering Environments
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* Program List */}
        <div className="space-y-6">
          {[
            {
              title: "Developer Security Training",
              desc: "Practical, role-specific training aligned to secure coding, threat modeling, and secure architecture principles."
            },
            {
              title: "Secure SDLC Framework Alignment",
              desc: "Guidance on embedding security checkpoints across planning, development, testing, and deployment stages."
            },
            {
              title: "DevOps Governance Advisory",
              desc: "Evaluation of CI/CD pipeline controls, access governance, and automation security."
            },
            {
              title: "Security Awareness for Product Leaders",
              desc: "Strategic awareness programs for product and technology leadership teams."
            },
            {
              title: "Certification Pathway",
              desc: "Structured participation in Security Council certification for teams demonstrating governance alignment."
            }
          ].map((program, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row gap-4 md:gap-12 p-8 border border-slate-100 bg-slate-50/50 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              {/* Title Column */}
              <div className="md:w-1/3">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {program.title}
                </h4>
              </div>

              {/* Description Column */}
              <div className="md:w-2/3">
                <p className="text-slate-600 leading-relaxed">
                  {program.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* =========================
          5. INTELLIGENCE
      ========================== */}
      {/* =========================
    5. INTELLIGENCE FOR TECHNOLOGY LEADERS (Extraordinary)
========================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-24 rounded-[3rem] shadow-2xl border border-gray-800">
        {/* Background Pattern - subtle tech grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Radial Gradient Glows */}
        <div className="absolute -top-1/4 left-1/2 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-1/4 right-1/4 w-2/3 h-2/3 bg-indigo-500/10 rounded-full blur-[150px]"></div>


        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Title, Intro, CTA */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Engineering & Product
                </span> <br /> Intelligence
              </h2>
              <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Security Council publishes research and advisory insights focused on
                secure development governance and emerging engineering risks.
              </p>
              <a
                href="#"
                className="inline-flex items-center group text-white font-bold text-lg px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                View Technology Intelligence
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right Column: Interactive Insight Blocks with Image */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Background Image - subtle and thematic */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dce87d23?auto=format&fit=crop&q=80&w=800"
                  alt="Intelligence Dashboard"
                  className="w-full h-full object-cover opacity-15 saturate-0 group-hover:opacity-20 transition-opacity duration-700"
                />
              </div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 relative z-10">
                {[
                  {
                    label: "DevOps",
                    title: "Secure DevOps Governance Models",
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Code icon
                  },
                  {
                    label: "Supply Chain",
                    title: "Managing Open-Source Risk in Enterprise Products",
                    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" // Box/Delivery icon
                  },
                  {
                    label: "Credentials",
                    title: "Credential Exposure Trends in Development Environments",
                    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 11-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" // Key icon
                  },
                  {
                    label: "Agile",
                    title: "Embedding Threat Modeling in Agile Workflows",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" // Shield/Check icon
                  }
                ].map((insight, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 flex items-start space-x-4 backdrop-blur-md"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-blue-600/20 text-blue-300 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={insight.icon} />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-blue-300 uppercase tracking-widest mb-1">
                        {insight.label}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                        {insight.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    6. ENGAGEMENT MODEL (Blueprint UI)
========================== */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-white font-sans">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Engagement Flow */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-[#002856] mb-4">
                How Technology Teams Engage
              </h2>
              <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                Engagement is structured and advisory-led. 
              </p>
            </div>

            <div className="space-y-0 border-l-2 border-slate-100 ml-4">
              {[
                "Developer training programs",
                "SDLC maturity evaluation",
                "Governance alignment workshops",
                "Access to engineering-focused intelligence",
                "Participation in certification evaluation"
              ].map((item, idx) => (
                <div key={idx} className="relative pl-10 pb-8 last:pb-0">
                  {/* Dot on the line */}
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>

                  <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Objective Box */}
          <div className="lg:w-1/2">
            <div className="relative p-12 bg-slate-900 rounded-[2.5rem] overflow-hidden text-center lg:text-left">
              {/* Decorative Graphic Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="relative z-10">
                <svg className="w-12 h-12 text-blue-400 mb-6 mx-auto lg:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>

                <h3 className="text-2xl font-bold text-white mb-6">The Strategic Objective</h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  The objective is <span className="text-white font-bold">sustainable integration</span> of security within product lifecycle governance.
                </p>

                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-slate-500 text-sm font-mono">Engagement Framework</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>








      {/* =========================
          7. CASE PERSPECTIVES
      ========================== */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Technology Case Perspectives
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-semibold text-slate-900 mb-3">
                Digital Product Team – Secure SDLC Alignment Initiative
              </h4>
              <p className="text-slate-600">
                Integrated structured security checkpoints across development lifecycle phases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h4 className="font-semibold text-slate-900 mb-3">
                Enterprise Engineering Division – DevOps Governance Evaluation
              </h4>
              <p className="text-slate-600">
                Participated in maturity evaluation focused on pipeline access and privilege governance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          8. FINAL CTA
      ========================== */}
      <section className="bg-[#0f172a] text-white text-center py-24 rounded-3xl mx-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Strengthen Security Governance Across Your Product Lifecycle
        </h2>

        <button
          onClick={() => onNavigate?.("contact")}
          className="px-8 py-4 bg-white text-[#0f172a] font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Engage With the Council
        </button>
      </section>

    </div>
  );
};

export default TechnologyPage;
