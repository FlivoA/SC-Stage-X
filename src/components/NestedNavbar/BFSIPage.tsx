import OptimizedImage from '../OptimizedImage';
import { UserLock, UserCheck, ShieldAlert, FileWarning, Code, Award, Users, Server } from "lucide-react";
// import background1 from "../../../public/images/background.png"

interface HeroProps {
    onNavigate?: (path: string) => void;
}

const BFSIPage = ({ onNavigate }: HeroProps) => (
    <>
        {/* HERO SECTION ________*/}
        <section className="relative overflow-hidden bg-[#0b2f57] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-20">

                {/* LEFT CONTENT */}
                <div className="z-10 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#40B3E1]">
                        Security Readiness
                        <br className="hidden sm:block" />
                        for  BFSI Institutions
                    </h1>

                    <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Strengthening governance, data protection, and operational security maturity across banking and financial institutions through structured awareness, enablement, and certification frameworks.
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6">
                        <button
                            onClick={() => onNavigate?.("register")}
                            className="w-full sm:w-auto bg-[#40B3E1] hover:bg-[#40B3E1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow-lg transition"
                        >
                            Engage With the Council
                        </button>

                        <button
                            onClick={() => onNavigate?.("learn-more")}
                            className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white hover:text-[#0b2f57] transition"
                        >
                            Explore Programs
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 order-1 md:order-2">

                    {/* Orange Curved Background */}
                    <div className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#40B3E1] to-[#2284ab] rounded-full right-1/2 md:-right-10 translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 z-0 " />


                    {/* Circular Image */}
                    <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[6px] sm:border-[8px] md:border-[10px] border-[#0b2f57] shadow-2xl z-10 ">
                        <img src="/images/conference-panel.jpg" alt="Conference Panel" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>




        {/* //  SECTOR OVERVIEW____ */}
        <section className="relative py-24 bg-gray-50 overflow-hidden">

            {/* Decorative Side Accent */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#002856] to-blue-500" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#002856] leading-tight mb-6">
                        The Security Imperative in BFSI
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Banking and Financial Services Institutions operate in one of the
                        most regulated and risk-intensive environments globally.
                        Rapid digitization, ecosystem integrations, and evolving
                        threat vectors demand structured security governance.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left: Challenges Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

                        {[
                            "Credential exposure and insider risk",
                            "Inconsistent secure development practices",
                            "Vendor and third-party security gaps",
                            "Governance fragmentation across business units",
                            "Regulatory compliance pressure",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl border border-gray-200 
                   shadow-sm hover:shadow-xl hover:-translate-y-1 
                   transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">

                                    {/* Number Badge */}
                                    <div
                                        className="w-11 h-11 flex items-center justify-center rounded-xl 
                       bg-[#002856]/10 text-[#002856] font-semibold 
                       group-hover:bg-[#002856] group-hover:text-white 
                       transition-colors duration-300"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        {item}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Right: Optional Info / Spacer / Card */}
                    <div className="hidden lg:flex items-center">
                        <div className="bg-gradient-to-br from-[#002856] to-blue-700 
                    text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                Structural Security Challenges
                            </h3>
                            <p className="text-blue-100 leading-relaxed">
                                Security Council works with BFSI institutions to strengthen foundational security awareness and maturity alignment — not as an enforcement body, but as an advisory and standards-oriented partner.                             </p>
                        </div>
                    </div>

                </div>

              

            </div>
        </section>




        {/* 3. KEY RISK AREAS (Structured Grid Section)  */}
        <section className="relative py-24 overflow-hidden bg-gray-100">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <OptimizedImage
                    src="./images/bfsi-risk-bg.webp"
                    alt="BFSI Risk Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/6 to-white/0"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl  md:text-6xl font-extrabold text-[#002856]">
                        Common Risk Domains in BFSI
                    </h2>
                    <div className="w-20 h-1 bg-[#002856] mx-auto mt-4 rounded"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 hover:bg-[#40B3E1] hover:shadow-xl transition duration-300">
                        <div className="mb-5">
                            <UserLock className="w-6 h-6 text-[#e14040]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Identity & Credential Exposure
                        </h3>
                        <p className="text-gray-900 leading-relaxed">
                            Unauthorized access through leaked credentials and weak access governance.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 hover:bg-[#40B3E1] hover:shadow-xl transition duration-300">
                        <div className="mb-5">
                            <ShieldAlert className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Secure Development Gaps
                        </h3>
                        <p className="text-gray-900 leading-relaxed">
                            Inconsistent application security practices and SDLC governance failures.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 hover:bg-[#40B3E1] hover:shadow-xl transition duration-300">
                        <div className="mb-5">
                            <UserCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Human Risk & Insider Exposure
                        </h3>
                        <p className="text-gray-900 leading-relaxed">
                            Background verification gaps and privilege misuse.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 hover:bg-[#40B3E1] hover:shadow-xl transition duration-300">
                        <div className="mb-5">
                            <FileWarning className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Regulatory Misalignment
                        </h3>
                        <p className="text-gray-900  leading-relaxed ">
                            Fragmented compliance alignment across RBI, SEBI, IRDAI, and global frameworks.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* 🟦 4. PROGRAMS FOR BFSI  */}
        <section className="relative py-24 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img src="/images/background.png" alt="BFSI Programs Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/6 to-white/0"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold text-[#002856]">
                        Structured Enablement for Financial Institutions
                    </h2>
                    <div className="w-24 h-1 bg-[#002856] mx-auto mt-4 rounded"></div>
                </div>

                {/* Programs List */}
                <div className="space-y-10">

                    {/* 1 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#40B3E1] hover:border-3 hover:bg-white transition-all duration-300">
                        <div>
                            <h3 className="text-xl font-semibold text-[#002856] mb-2">
                                Security Awareness Programs
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Industry-specific training addresses credential exposure, phishing resilience, and operational security behaviors.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#40B3E1] hover:border-3 hover:bg-white transition-all duration-300">
                        <Code className="w-6 h-6 text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#002856] mb-2">
                                Developer Security Training
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Secure development lifecycle alignment tailored to financial application environments.
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#40B3E1] hover:border-3 hover:bg-white transition-all duration-300">
                        <UserCheck className="w-6 h-6 text-green-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#002856] mb-2">
                                Background Verification (BGV) Guidance
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Framework-driven evaluation and governance alignment for workforce risk management.
                            </p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#40B3E1] hover:border-3 hover:bg-white transition-all duration-300">
                        <UserCheck className="w-6 h-6 text-green-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#002856] mb-2">
                                Security Maturity Evaluation
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Advisory-led maturity review against defined governance and operational standards.
                            </p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-[#40B3E1] hover:border-3 hover:bg-white transition-all duration-300">
                        <Award className="w-6 h-6 text-yellow-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-[#002856] mb-2">
                                Certification Pathway
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Structured participation in Security Council certification aligned to sector-specific risk domains.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>






        <section className="relative py-24 overflow-hidden bg-[#40B3E1]">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <OptimizedImage
                    src=""
                    alt="BFSI Intelligence Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#002856]/95 via-white/95 to-white/100"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-6xl font-bold text-[#002856]">
                        Sector Intelligence & Analysis
                    </h2>
                    <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed text-2xl">
                        Security Council publishes research and structured analysis specific to the financial services ecosystem.
                    </p>
                    <div className="w-24 h-1 bg-[#002856] mx-auto mt-6 rounded"></div>
                </div>

                {/* Insight Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
                        <UserCheck className="w-6 h-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Emerging Credential Exposure Trends in Banking
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Structured analysis of credential leakage patterns, identity compromise vectors, and emerging phishing models across banking environments.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
                        <Users className="w-6 h-6 text-red-600" />
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Third-Party Risk in Financial Ecosystems
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Examination of vendor exposure pathways, supply-chain trust breakdowns, and governance implications within regulated institutions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
                        <Server className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Secure API Governance in Fintech Integrations
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Risk modeling for API ecosystems, authentication weaknesses, and architectural control alignment for fintech partnerships.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
                        <Server className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-semibold text-[#002856] mb-3">
                            Insider Risk Indicators in Regulated Institutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Behavioral signal mapping and governance alignment frameworks to detect and manage insider threat vectors.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="inline-block bg-[#002856] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition shadow-lg"
                    >
                        View BFSI Intelligence →
                    </a>
                </div>

            </div>
        </section>




        {/* CLIENT STORIES / CASE EXAMPLES  */}
        <section className="relative py-24 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <OptimizedImage
                    src=""
                    alt="BFSI Engagement Model Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002856]">
                        How BFSI Institutions Engage
                    </h2>
                    <div className="w-24 h-1 bg-[#002856] mx-auto mt-6 rounded"></div>
                </div>

                {/* Intro Paragraph */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Engagement with Security Council is voluntary and structured through a subscription-based model.
                        Institutions participate in awareness programs, enablement workshops, maturity evaluations,
                        and certification pathways.
                    </p>
                </div>

                {/* Engagement Blocks */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Block 1 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">
                        <h3 className="text-xl font-semibold text-[#002856] mb-4">
                            Access to Sector-Specific Intelligence
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Curated research publications and structured analysis tailored to financial services risk domains.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">
                        <h3 className="text-xl font-semibold text-[#002856] mb-4">
                            Participation in Structured Training Programs
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Industry-aligned awareness and enablement initiatives designed for financial institutions.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">
                        <h3 className="text-xl font-semibold text-[#002856] mb-4">
                            Advisory Interaction Sessions
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Structured discussions and governance-aligned advisory engagements with sector experts.
                        </p>
                    </div>

                    {/* Block 4 */}
                    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-100">
                        <h3 className="text-xl font-semibold text-[#002856] mb-4">
                            Eligibility for Certification Evaluation
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Participation pathway toward formal certification aligned with financial sector risk frameworks.
                        </p>
                    </div>

                </div>

            </div>
        </section>


        {/* FINAL CTA */}
        <section className="relative py-32 overflow-hidden bg-[#002856]">
            {/* High-Impact Background Image with darkened overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
                    alt="Corporate Headquarters"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#002856]/90 via-[#002856]/70 to-[#002856]"></div>
            </div>

            {/* Decorative "Circuit" SVG Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                {/* Floating Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Global Partnership Program 2026</span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                    Advance Security Maturity <br />
                    <span className="text-blue-400">In Your Institution</span>
                </h2>

                {/* Subtext */}
                <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Align your organization with industry-leading governance frameworks
                    and build a resilient culture of security.
                </p>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#"
                        className="group relative w-full sm:w-auto px-10 py-5 bg-white text-[#002856] rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        Engage With the Council
                    </a>

                    <a
                        href="#"
                        className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                        Review Program Details
                    </a>
                </div>

                {/* Footer Reassurance */}
                <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/50 text-sm font-medium uppercase tracking-widest">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                        Compliance Ready
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" /></svg>
                        Sector Intelligence
                    </div>
                </div>
            </div>
        </section>



    </>
);

export default BFSIPage;
