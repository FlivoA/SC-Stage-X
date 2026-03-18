// import React from "react";

// interface CaseStudy {
//   id: number;
//   title: string;
//   sector: string;
//   summary: string;
// }

// const caseStudies: CaseStudy[] = [
//   {
//     id: 1,
//     title: "Strengthening BFSI Security Maturity",
//     sector: "Banking & Financial Services",
//     summary:
//       "A structured engagement supporting governance alignment, risk visibility, and workforce security awareness across enterprise teams.",
//   },
//   {
//     id: 2,
//     title: "Enterprise AI Policy Enablement",
//     sector: "Technology & AI",
//     summary:
//       "Advisory-led initiative focused on responsible AI adoption, compliance readiness, and operational transparency.",
//   },
//   {
//     id: 3,
//     title: "Healthcare Data Protection Framework",
//     sector: "Healthcare",
//     summary:
//       "Independent assessment model designed to enhance data security controls and institutional compliance posture.",
//   },
// ];

// const CaseStudies: React.FC = () => {
//   return (
//     <section className="py-12 px-6 bg-white text-slate-900">
//       <h2 className="text-2xl font-semibold text-center mb-8">
//         Case Studies
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {caseStudies.map((study) => (
//           <div
//             key={study.id}
//             className="border border-slate-200 p-6 rounded-lg hover:shadow-sm transition"
//           >
//             <span className="text-xs text-slate-500 uppercase tracking-wide">
//               {study.sector}
//             </span>
//             <h3 className="text-lg font-medium mt-2 mb-3">
//               {study.title}
//             </h3>
//             <p className="text-sm text-slate-600">{study.summary}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;

import React from "react";

const CaseStudies: React.FC = () => {
  const structure = [
    {
      title: "Context",
      desc: "Description of the organizational environment and relevant conditions.",
    },
    {
      title: "Challenge",
      desc: "Identification of the specific security or governance issue.",
    },
    {
      title: "Approach",
      desc: "Overview of the structured steps taken to address the issue.",
    },
    {
      title: "Governance Impact",
      desc:
        "Analysis of how the initiative improved alignment, visibility, or maturity.",
    },
  ];

  const cases = [
    {
      title: "BFSI Institution – Identity Governance Alignment",
      desc: "Focused on improving role-based access controls and reducing credential exposure risk across distributed systems.",
    },
    {
      title: "Enterprise Organization – Secure SDLC Enablement",
      desc: "Introduced structured security checkpoints across development lifecycle phases to improve application resilience.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Case Studies
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Structured institutional perspectives highlighting governance alignment,
          security initiatives, and operational improvements.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Case Studies provide structured, anonymized insights into how institutions
          address security challenges and improve governance maturity.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            The purpose of these case studies is not to present success stories, but to highlight:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Approach</li>
            <li>• Decision-making process</li>
            <li>• Governance alignment</li>
            <li>• Implementation perspectives</li>
          </ul>
        </div>

        <p>
          They provide practical reference points for institutions navigating similar challenges.
        </p>
      </div>

      {/* 🔥 DARK SECTION */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Case Structure
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {structure.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#111a2e]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:shadow-2xl
                  hover:-translate-y-1
                "
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAMPLE CASES */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Sample Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((item, index) => (
              <div
                key={index}
                className="
                  bg-gray-100
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:shadow-md
                  hover:-translate-y-1
                "
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUE */}
      <div className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Value</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Real-world context",
              "Structured thinking models",
              "Governance-focused learning",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-gray-100
                  rounded-2xl
                  p-6
                  text-gray-700
                  transition-all duration-300
                  hover:shadow-md
                  hover:-translate-y-1
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudies;