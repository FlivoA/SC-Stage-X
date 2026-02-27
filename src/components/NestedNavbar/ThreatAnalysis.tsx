import React from 'react';
// import OptimizedImage from '../OptimizedImage';
import HeroImg from '../../images/68233ba8410acd57ae541d6a_Cyber attack map.webp'
import PhoneImg from '../../images/phoneimg.jpg'


import { ShieldAlert, Cloud, Users, Lock, Share2, Search } from 'lucide-react';
import { Briefcase, ShieldCheck, FileText, Fingerprint, Activity } from 'lucide-react';



const threats = [
    { icon: <Lock size={20} />, title: "Credential Compromise", desc: "Exploiting identity vulnerabilities." },
    { icon: <ShieldAlert size={20} />, title: "Ransomware & Extortion", desc: "Sophisticated data holding and leak models." },
    { icon: <Cloud size={20} />, title: "API & Cloud Exposure", desc: "Misconfigurations in modern infrastructure." },
    { icon: <Share2 size={20} />, title: "Supply Chain Infiltration", desc: "Targeting third-party vendor networks." },
    { icon: <Users size={20} />, title: "Insider-Enabled Incidents", desc: "Intentional or accidental internal risks." },
];


const framework = [
    { icon: <Briefcase size={24} />, title: "Sector Segmentation", desc: "BFSI, Insurance, Enterprise, & Tech-specific insights." },
    { icon: <ShieldCheck size={24} />, title: "Attack Vector Categorization", desc: "Granular tracking of adversary tactics." },
    { icon: <FileText size={24} />, title: "Governance Gap Correlation", desc: "Linking policy failures to real-world risk." },
    { icon: <Fingerprint size={24} />, title: "Identity & Access Mapping", desc: "Securing the perimeter of identity." },
    { icon: <Activity size={24} />, title: "Workforce Behavior", desc: "Proactive detection of behavioral anomalies." },
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

        {/*  */}


        <div className='bg-[#40B3E1]'>
            <section className="max-w-6xl mx-auto px-6 py-12 ">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Analytical Approach</h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                    We strip away the noise to provide structured visibility, enabling teams to understand the root causes of exposure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {framework.map((item, idx) => (
                    <div key={idx} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all hover:border-blue-500 group">
                        <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        </div>


    </main>

);

export default ThreatAnalysis;