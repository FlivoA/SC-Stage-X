import React from 'react';
// import OptimizedImage from '../OptimizedImage';
import HeroImg from '../../images/68233ba8410acd57ae541d6a_Cyber attack map.webp'
import PhoneImg from '../../images/phoneimg.jpg'

import { MessageSquare,ShieldAlert, Cloud, Users, Lock, Share2, Search, ShieldCheck,  Download, ArrowRight, ExternalLink } from 'lucide-react';



const reports = [
    {
        title: "Annual Threat Landscape Outlook",
        type: "Full Report",
        date: "2026 Edition",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "A comprehensive analysis of global security shifts and long-term strategic predictions."
    },
    {
        title: "Quarterly Exposure Assessment",
        type: "Assessment",
        date: "Q1 2026",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        description: "Current snapshot of active vulnerabilities and immediate mitigation priorities."
    },
    {
        title: "Sector-Specific Risk Briefings",
        type: "Briefing",
        date: "Updated Monthly",
        src: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800",
        description: "Targeted intelligence for BFSI, Healthcare, and Enterprise Technology sectors."
    },
    {
        title: "Executive Advisory Notes",
        type: "Advisory",
        date: "Internal Only",
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        description: "High-level strategic guidance designed for C-suite and Board of Directors."
    }
];


const sectors = [
    {
        title: "BFSI Threat Trends",
        description: "Deep dive into banking-specific ransomware patterns and financial fraud vectors.",
        src: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
        link: "#bfsi"
    },
    {
        title: "Insurance Data Exposure",
        description: "Analyzing PII leakage patterns and the risk of automated claims processing exploitation.",
        src: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
        link: "#insurance"
    },
    {
        title: "Enterprise Privilege Risk",
        description: "Correlation of sprawl in admin rights and governance gaps across large-scale ecosystems.",
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        link: "#enterprise"
    },
    {
        title: "Product & Engineering",
        description: "Evaluating security trends within the SDLC and secret management in modern pipelines.",
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        link: "#engineering"
    }
];


const riskBlocks = [
    {
        title: "Credential-Based Attacks",
        description: "Rising exploitation of leaked credentials and privilege misalignment.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
        accent: "border-orange-500"
    },
    {
        title: "Third-Party & Vendor Risk",
        description: "Increased exposure through integrated ecosystems.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
        accent: "border-blue-500"
    },
    {
        title: "Cloud & Infrastructure Misconfiguration",
        description: "Governance gaps in hybrid and multi-cloud environments.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        accent: "border-purple-500"
    },
    {
        title: "Development Pipeline Exploitation",
        description: "Weak controls within CI/CD and DevOps processes.",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
        accent: "border-emerald-500"
    }
];

const threats = [
    { icon: <Lock size={20} />, title: "Credential Compromise", desc: "Exploiting identity vulnerabilities." },
    { icon: <ShieldAlert size={20} />, title: "Ransomware & Extortion", desc: "Sophisticated data holding and leak models." },
    { icon: <Cloud size={20} />, title: "API & Cloud Exposure", desc: "Misconfigurations in modern infrastructure." },
    { icon: <Share2 size={20} />, title: "Supply Chain Infiltration", desc: "Targeting third-party vendor networks." },
    { icon: <Users size={20} />, title: "Insider-Enabled Incidents", desc: "Intentional or accidental internal risks." },
];


// const frameworkItems = [
//     { icon: <LayoutGrid size={20} />, text: "Sector segmentation (BFSI, Insurance, Enterprise, Technology)" },
//     { icon: <Target size={20} />, text: "Attack vector categorization" },
//     { icon: <FileWarning size={20} />, text: "Governance gap correlation" },
//     { icon: <Fingerprint size={20} />, text: "Identity and access risk mapping" },
//     { icon: <Users size={20} />, text: "Workforce behavioral risk indicators" },
// ];



const frameworkData = [
    {
        title: "Sector Segmentation",
        desc: "BFSI, Insurance, Enterprise, Technology",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        alt: "Digital world map representing global sectors"
    },
    {
        title: "Attack Vector Categorization",
        desc: "Methodical breakdown of entry points",
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        alt: "Cyber security dashboard"
    },
    {
        title: "Governance Gap Correlation",
        desc: "Identifying policy and compliance lapses",
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
        alt: "Legal documents and a pen representing governance"
    },
    {
        title: "Identity & Access Mapping",
        desc: "Risk assessment of user permissions",
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        alt: "Biometric thumbprint scan"
    },
    {
        title: "Behavioral Risk Indicators",
        desc: "Analyzing workforce activity patterns",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        alt: "Team collaborating in a modern office"
    }
];


const ThreatAnalysis: React.FC = () => (


    <main>
        {/* 01 hero section  */}
        <section className="bg-[#002B54] py-10 flex flex-row items-center justify-around text-white">
            <div>
                <h1 className="text-7xl font-bold mb-4 mt-6 p-5">
                    Threat <br /> Landscape Analysis
                </h1>
                <p className="text-2xl font-bold mb-6 p-5">
                    Structured evaluation of emerging cyber risk patterns, <br />
                    sector-specific attack trends, and governance exposure <br />
                    indicators across regulated and enterprise environments.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <img
                    src={HeroImg}
                    alt="Cyber attack map"
                    className="w-65 md:w-72 lg:w-110 h-40 md:h-52 lg:h-64 object-cover rounded-xl shadow-lg"
                />
                <p className="mt-6 text-lg font-semibold cursor-pointer hover:underline">
                    View Latest Threat Reports →
                </p>
            </div>
        </section>

        {/* 2. OVERVIEW */}
        <section className="max-w-6xl mx-auto px-6 py-12 bg-slate-50 text-slate-900 font-sans">
            {/* Header Section */}
            <div className="mb-12 border-b border-slate-200 pb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Understanding the Evolving Threat Environment
                </h2>
                <p className="text-2xl text-slate-600 max-w-3xl ">
                    Digital transformation, cloud adoption, and distributed workforce models have reshaped the modern landscape, creating a perimeter-less security challenge.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Side: Threat List */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Search className="text-blue-600" />
                        Core Institutional Risks
                    </h3>
                    <div className="space-y-4">
                        {threats.map((threat, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-blue-600 transition-colors">
                                <div className="text-blue-500 bg-blue-50 p-2 rounded-md h-fit">
                                    {threat.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold">{threat.title}</h4>
                                    <p className="text-sm text-slate-500">{threat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visuals & Analysis */}
                <div className="space-y-8">
                    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                        <img
                            src={PhoneImg}
                            alt="Cyber Security Network Visualization"
                            className="w-full h-64 object-cover"
                        />
                    </div>

                    <div className="bg-blue-900 text-white p-6 rounded-xl shadow-inner">
                        <h3 className="text-lg font-semibold mb-2">Security Council Analysis</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            We analyze macro and sector-specific patterns to provide structured visibility into emerging risk dynamics. Our focus remains on proactive resilience over reactive defense.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. ANALYSIS FRAMEWORK */}


        <div className="bg-slate-50 min-h-screen py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 border-l-4 border-indigo-600 pl-6">
                    <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase">
                        3. ANALYSIS FRAMEWORK
                    </h2>
                    <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">
                        Our Analytical Approach
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        Security Council evaluates threats through a structured framework:
                    </p>
                </header>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frameworkData.map((item, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Closing Statement Card */}
                    <div className="lg:col-span-1 bg-indigo-600 rounded-2xl p-8 flex items-center shadow-lg">
                        <p className="text-white text-lg font-medium leading-snug">
                            "This allows leadership and operational teams to understand not only what is happening — <span className="underline decoration-indigo-300 underline-offset-4">but why exposure occurs.</span>"
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* 4. CURRENT FOCUS AREAS? */}


        <section className="bg-slate-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-emerald-400 font-mono text-sm tracking-tighter uppercase mb-2">
                        Critical Vectors // 04
                    </h2>
                    <h3 className="text-3xl font-bold text-white">Structured Blocks</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {riskBlocks.map((block, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-2xl border-l-8 ${block.accent} bg-slate-800 transition-all hover:bg-slate-750`}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section */}
                                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                    <img
                                        src={block.image}
                                        alt={block.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {block.title}
                                    </h4>
                                    <p className="text-slate-400 leading-relaxed">
                                        {block.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>



        <section className="bg-white py-20 px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 border-b border-gray-100 pb-8">
                <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                    5. SECTOR-SPECIFIC INTELLIGENCE
                </h2>
                <h1 className="text-4xl font-light text-slate-900">
                    Sector <span className="font-bold">Threat Perspectives</span>
                </h1>
            </div>

            {/* Insight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sectors.map((sector, index) => (
                    <div
                        key={index}
                        className="group relative h-96 overflow-hidden rounded-xl bg-slate-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Background Image */}
                        <img
                            src={sector.src}
                            alt={sector.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                            <h3 className="text-xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                                {sector.title}
                            </h3>

                            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                    {sector.description}
                                </p>
                                <a
                                    href={sector.link}
                                    className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center hover:text-white"
                                >
                                    View Insights <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>





        <section className="bg-slate-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-indigo-600 font-bold tracking-tighter text-lg mb-1">
                            6. INTELLIGENCE OUTPUT
                        </h2>
                        <h1 className="text-4xl font-black text-slate-900">
                            Published Threat Reports
                        </h1>
                    </div>
                    <button className="flex items-center text-slate-600 hover:text-indigo-600 font-semibold transition-colors">
                        View Archive <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>

                {/* Reports List */}
                <div className="space-y-4">
                    {reports.map((report, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6"
                        >
                            {/* Thumbnail */}
                            <div className="w-full md:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={report.src}
                                    alt={report.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex-grow text-center md:text-left">
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                                        {report.type}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">{report.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">{report.title}</h3>
                                <p className="text-sm text-slate-500 line-clamp-1">{report.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm">
                                    <Download size={20} />
                                </button>
                                <button className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>




        <section className="relative overflow-hidden bg-slate-950 py-24 px-6">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Cybersecurity Command Center"
                                className="w-full h-[400px] object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                                <div className="bg-blue-500 p-2 rounded-lg">
                                    <ShieldCheck className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-blue-300 font-bold uppercase tracking-wider">Status</p>
                                    <p className="text-white font-medium">Council Active</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-6">
                            7. ENGAGEMENT LINK
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                            Translate Threat Intelligence into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Governance Action</span>
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                Engage With the Council
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-full transition-all flex items-center gap-3">
                                <MessageSquare size={18} />
                                Request Briefing
                            </button>
                        </div>

                        <p className="mt-8 text-slate-500 text-sm">
                            Connect with our operational teams to align your risk framework with real-time intelligence.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    </main>

);

export default ThreatAnalysis;