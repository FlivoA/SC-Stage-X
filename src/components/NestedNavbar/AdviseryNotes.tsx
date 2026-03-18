// import React from "react";

// interface AdvisoryItem {
//   id: number;
//   title: string;
//   description: string;
// }

// const advisoryServices: AdvisoryItem[] = [
//   {
//     id: 1,
//     title: "Enterprise Security Awareness Advisory",
//     description:
//       "Guidance frameworks supporting organizational security awareness, workforce enablement, and governance alignment.",
//   },
//   {
//     id: 2,
//     title: "AI Governance & Policy Enablement",
//     description:
//       "Independent advisory insights focused on responsible AI adoption, compliance readiness, and risk transparency.",
//   },
//   {
//     id: 3,
//     title: "Security Maturity Assessment Support",
//     description:
//       "Structured evaluation models designed to help enterprises benchmark and strengthen security posture.",
//   },
// ];

// const AdviseryNotes: React.FC = () => {
//   return (
//     <section className="py-12 px-6 bg-slate-950 text-white">
//       <h2 className="text-2xl font-semibold text-center mb-8">
//         Advisory & Enablement
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {advisoryServices.map((item) => (
//           <div
//             key={item.id}
//             className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-slate-600 transition"
//           >
//             <h3 className="text-lg font-medium mb-3">{item.title}</h3>
//             <p className="text-sm text-slate-400">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AdviseryNotes;

import React from "react";

const AdvisoryNotes: React.FC = () => {
  const structure = [
    {
      title: "Context",
      desc: "Explanation of the environment or situation in which the risk arises.",
    },
    {
      title: "Risk Indicator",
      desc: "Identification of the specific risk pattern or exposure.",
    },
    {
      title: "Governance Consideration",
      desc: "Analysis of how the risk relates to governance structures and organizational practices.",
    },
    {
      title: "Recommended Focus Area",
      desc: "Areas institutions should prioritize for improving resilience and alignment.",
    },
  ];

  const themes = [
    "Managing Credential Exposure in Distributed Workforces",
    "Governance Challenges in Cloud Environments",
    "Third-Party Risk Oversight in Integrated Ecosystems",
    "Secure Development Governance in Agile Environments",
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Advisory Notes
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Focused and structured guidance addressing emerging risks, governance
          considerations, and operational security challenges.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Advisory Notes are concise, structured intelligence outputs designed
          to provide timely guidance on specific risk areas and governance
          challenges.
        </p>
        <p>
          Unlike full-scale reports, Advisory Notes are intended to deliver
          clarity on focused topics, enabling institutions to quickly understand
          emerging risks and align internal discussions accordingly.
        </p>

        <div className="rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            Each Advisory Note is developed to be:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span>•</span> Clear and structured
            </li>
            <li className="flex items-start gap-2">
              <span>•</span> Relevant to current risk environments
            </li>
            <li className="flex items-start gap-2">
              <span>•</span> Aligned with governance considerations
            </li>
            <li className="flex items-start gap-2">
              <span>•</span> Action-oriented without being prescriptive
            </li>
          </ul>
        </div>
      </div>

      {/* 🔥 DARK SECTION (LIKE YOUR IMAGE) */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Structure of Each Note
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {structure.map((item, index) => (
              <div
                key={index}
                className="bg-[#111a2e] border border-white/10 rounded-xl p-6 hover:border-white/20 transition"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAMPLE THEMES */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Sample Themes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PURPOSE */}
      {/* PURPOSE */}
<div className="pb-24 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-10">Purpose</h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        "Internal discussions among leadership teams",
        "Quick understanding of emerging risk themes",
        "Alignment between technical and governance perspectives",
      ].map((item, index) => (
        <div
          key={index}
          className="  bg-gray-100 rounded-2xl p-6  text-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
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

export default AdvisoryNotes;
