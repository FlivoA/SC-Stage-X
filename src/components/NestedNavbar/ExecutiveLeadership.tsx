import React from "react";
import person from '../../../public/event_page_components/person.png'

interface ExecutiveLeadershipProps {
  onNavigate?: (page: string) => void;
}

const ExecutiveLeadership: React.FC<ExecutiveLeadershipProps> = ({onNavigate}) => {
    return (
        <div className="w-full bg-white text-gray-900">

            {/* 🟦 1. HERO SECTION */}
            {/* =========================
    1. EXECUTIVE HERO SECTION
========================== */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#002147] text-white rounded-[3rem] shadow-2xl border border-white/10">

                {/* Sophisticated Background Visuals */}
                <div className="absolute inset-0 z-0">
                    {/* Subtle Motion Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#003366] to-[#001a35]"></div>

                    {/* Architectural Line Art Pattern */}
                    <svg className="absolute right-0 top-0 h-full w-1/2 opacity-10" viewBox="0 0 400 800" fill="none">
                        <defs>
                            <pattern id="executive-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#executive-grid)" />
                    </svg>

                    {/* Soft Radial Highlight */}
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content Narrative */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            Institutional Governance
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Security Governance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
                                at the Executive Level
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed font-light">
                            Enabling executive leaders to strengthen organizational security maturity through structured awareness, governance alignment, and independent certification frameworks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => onNavigate?.("contact")}
                                className="px-10 py-5 bg-white text-[#002147] font-bold rounded-2xl shadow-2xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                            >
                                Engage With the Council
                            </button>

                            <button
                                onClick={() => onNavigate?.("briefing")}
                                className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                            >
                                Request Executive Briefing
                            </button>
                        </div>
                    </div>

                    {/* Right: Abstract "Maturity" Visualization */}
                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative p-1 w-80 h-80 rounded-[4rem] bg-gradient-to-tr from-blue-500/20 to-white/10 backdrop-blur-2xl border border-white/20 rotate-3 shadow-2xl flex items-center justify-center">
                            <div className="text-center p-8">
                                <svg className="w-16 h-16 text-blue-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <div className="space-y-3">
                                    <div className="h-1.5 w-32 bg-white/20 rounded-full mx-auto"></div>
                                    <div className="h-1.5 w-24 bg-white/10 rounded-full mx-auto"></div>
                                    <div className="h-1.5 w-28 bg-white/20 rounded-full mx-auto"></div>
                                </div>
                                <p className="mt-8 text-xs font-mono text-blue-300 tracking-[0.3em] uppercase">Governance_Certified</p>
                            </div>
                        </div>
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-400/20 blur-[100px] -z-10 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* =========================
    2. STRATEGIC CONTEXT
========================== */}
            <section className="max-w-7xl mx-auto px-6 py-24 bg-white font-sans">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left Column: Executive Narrative */}
                    <div className="lg:w-5/12 sticky top-12">
                        <div className="inline-flex items-center space-x-2 text-[#002147] mb-6">
                            <div className="w-8 h-[2px] bg-[#002147]"></div>
                            <span className="text-sm font-bold uppercase tracking-widest">Strategic Perspective</span>
                        </div>

                        <h2 className="text-4xl font-extrabold text-[#002147] mb-8 leading-tight">
                            Security as a <br />
                            <span className="text-blue-600">Governance Responsibility</span>
                        </h2>

                        <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                            <p className="font-semibold text-slate-900">
                                Security risk is no longer an operational concern alone. It is a board-level responsibility.
                            </p>
                            <p>
                                Digital transformation, regulatory oversight, and workforce distribution have reshaped enterprise risk landscapes. Executive leaders must balance innovation, compliance, resilience, and reputational integrity.
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <p className="text-base text-slate-500 italic">
                                    Security Council supports executive leadership through structured awareness and
                                    certification pathways that reinforce institutional credibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Challenge Pillars */}
                    <div className="lg:w-7/12 grid gap-6">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Primary Oversight Challenges</p>

                        {[
                            { title: "Maturity Visibility", desc: "Limited visibility into true security maturity." },
                            { title: "Fragmented Reporting", desc: "Fragmented reporting across technology and business units." },
                            { title: "Regulatory Pressure", desc: "Escalating regulatory expectations." },
                            { title: "Response Readiness", desc: "Incident response preparedness." },
                            { title: "Operational Alignment", desc: "Alignment between policy and operational execution." }
                        ].map((challenge, idx) => (
                            <div
                                key={idx}
                                className="group flex items-center p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#002147] font-bold text-lg group-hover:bg-[#002147] group-hover:text-white transition-all">
                                    {idx + 1}
                                </div>
                                <div className="ml-8">
                                    <h4 className="text-xl font-bold text-[#002147] mb-1">{challenge.title}</h4>
                                    <p className="text-slate-600 leading-snug">{challenge.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 🟦 3. EXECUTIVE RISK PRIORITIES */}
            <section className="py-20 px-6 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Core Executive Risk Considerations
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
                        {[
                            {
                                title: "Governance Alignment",
                                desc: "Ensuring policy, controls, and operational practices are aligned across the enterprise."
                            },
                            {
                                title: "Regulatory & Compliance Exposure",
                                desc: "Maintaining alignment with sector-specific and cross-border regulatory expectations."
                            },
                            {
                                title: "Reputation & Trust Risk",
                                desc: "Managing public trust in the event of data exposure or operational disruption."
                            },
                            {
                                title: "Third-Party & Ecosystem Risk",
                                desc: "Oversight of vendor, partner, and supply chain dependencies."
                            },
                            {
                                title: "Organizational Security Culture",
                                desc: "Embedding security awareness at all levels of the workforce."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gray-50 rounded-xl border hover:shadow-lg transition duration-300 hover:bg-[#40B3E1]"
                            >
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🟦 4. EXECUTIVE PROGRAMS */}
            <section className="py-20 px-6 md:px-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={person}
                            alt="Executive Workshop"
                            className="w-full h-[450px] object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Structured Engagement for Leadership Teams
                        </h2>

                        <div className="mt-8 space-y-6 text-gray-300">
                            <div>
                                <h4 className="text-xl font-semibold text-white">
                                    Executive Security Briefings
                                </h4>
                                <p>Board-level and CXO-level awareness sessions focused on emerging risk landscapes and governance responsibilities.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white">
                                    Governance Alignment Workshops
                                </h4>
                                <p>Advisory-led discussions on aligning security posture with organizational strategy.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white">
                                    Security Maturity Evaluation
                                </h4>
                                <p>Independent evaluation framework providing leadership with structured insight into organizational readiness.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-white">
                                    Certification Participation
                                </h4>
                                <p>Institutional certification pathway reflecting commitment to structured security governance. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🟦 5. INTELLIGENCE */}
            <section className="py-20 px-6 md:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Strategic Intelligence & Advisory Notes
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {[
                            "Board Oversight in Cyber Governance",
                            "Measuring Security Maturity Beyond Compliance",
                            "Executive Accountability in Data Protection",
                            "Managing Security Risk During Digital Transformation"
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white rounded-xl border hover:shadow-md transition hover:bg-[#6dbcdb]"
                            >
                                <h3 className="font-semibold text-lg">{item}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <button className="text-blue-600 font-medium hover:underline">
                            Access Executive Intelligence →
                        </button>
                    </div>
                </div>
            </section>

            {/* 🟦 6. ENGAGEMENT MODEL */}
            <section className="py-20 px-6 md:px-16 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        How Leadership Teams Engage
                    </h2>

                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Engagement with Security Council is structured and voluntary.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10 text-gray-700">
                        <div className="p-6 border rounded-lg">Executive-level briefings</div>
                        <div className="p-6 border rounded-lg">Participation in governance workshops</div>
                        <div className="p-6 border rounded-lg">Access to strategic intelligence reports</div>
                        <div className="p-6 border rounded-lg">Structured maturity evaluations</div>
                        <div className="p-6 border rounded-lg">Certification participation</div>
                    </div>
                </div>
            </section>

            {/* 🟦 7. CASE PERSPECTIVES */}
            <section className="py-20 px-6 md:px-16 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">
                        Executive Case Perspectives
                    </h2>

                    <div className="mt-12 grid md:grid-cols-2 gap-10">
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <h3 className="font-semibold text-xl mb-4">
                                Board-Level Governance Alignment Initiative
                            </h3>
                            <p className="text-gray-600">
                                Leadership participated in structured evaluation and governance
                                workshop to improve cross-functional reporting clarity.
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <h3 className="font-semibold text-xl mb-4">
                                Enterprise Risk Oversight Enhancement
                            </h3>
                            <p className="text-gray-600">
                                Executive advisory engagement focused on strengthening third-party
                                risk governance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🟦 8. FINAL CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Strengthen Executive Oversight in Security Governance
                </h2>

                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <button className="px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition">
                        Engage With the Council
                    </button>
                    <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-blue-900 transition">
                        Request Executive Briefing
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ExecutiveLeadership;
