import React from 'react';
// import OptimizedImage from '../OptimizedImage';
import HeroImg from '../../images/68233ba8410acd57ae541d6a_Cyber attack map.webp'

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
        <section className="bg-[#002B54] py-10 flex flex-row items-center justify-around text-white">
            <div>
                
            </div>


            <div>
                
            </div>

        </section>


    </main>

);

export default ThreatAnalysis;