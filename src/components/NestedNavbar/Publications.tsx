// import React from "react";

// interface Publication {
//   id: number;
//   title: string;
//   summary: string;
//   date: string;
// }

// const publications: Publication[] = [
//   {
//     id: 1,
//     title: "BFSI Security Maturity Outlook 2026",
//     summary:
//       "An advisory publication outlining evolving enterprise security benchmarks, governance controls, and risk alignment for BFSI institutions.",
//     date: "January 2026",
//   },
//   {
//     id: 2,
//     title: "Enterprise AI Governance Framework",
//     summary:
//       "A structured reference guide supporting responsible AI adoption, compliance readiness, and operational transparency.",
//     date: "March 2026",
//   },
//   {
//     id: 3,
//     title: "Industrial AI Policy Readiness Report",
//     summary:
//       "A cross-sector analysis of AI implementation standards, workforce enablement, and regulatory alignment.",
//     date: "June 2026",
//   },
// ];

// const Publications: React.FC = () => {
//   return (
//     <section className="py-12 px-6 bg-white text-slate-900">
//       <h2 className="text-2xl font-semibold mb-8 text-center">
//         Publications
//       </h2>

//       <div className="space-y-6 max-w-4xl mx-auto">
//         {publications.map((item) => (
//           <div
//             key={item.id}
//             className="p-6 border border-slate-200 rounded-lg hover:shadow-sm transition"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-lg font-medium">{item.title}</h3>
//               <span className="text-sm text-slate-500">{item.date}</span>
//             </div>
//             <p className="text-sm text-slate-600">{item.summary}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Publications;

// import React from "react";

// const Publications: React.FC = () => {
//   const types = [
//     {
//       title: "Research Papers",
//       description:
//         "In-depth exploration of specific risk domains, supported by structured analysis and sector observations.",
//     },
//     {
//       title: "Governance Framework Documents",
//       description:
//         "Documents outlining structured approaches to security governance, including policy alignment and operational integration.",
//     },
//     {
//       title: "Industry Whitepapers",
//       description:
//         "Sector-focused publications addressing unique risk environments and governance challenges.",
//     },
//     {
//       title: "Technical-Strategic Notes",
//       description:
//         "Bridging technical security practices with strategic governance considerations for leadership audiences.",
//     },
//   ];

//   const themes = [
//     "Identity and Access Governance",
//     "Secure Development Lifecycle Practices",
//     "Workforce Security Awareness and Behavior",
//     "Third-Party and Supply Chain Risk",
//     "Regulatory Alignment and Compliance Structures",
//   ];

//   const roles = [
//     "Security and risk leaders",
//     "Governance and compliance teams",
//     "Technology and product leadership",
//     "Executive stakeholders",
//   ];

//   const outcomes = [
//     "Building structured internal frameworks",
//     "Aligning governance with operational practices",
//     "Understanding domain-specific risks in depth",
//     "Strengthening long-term security maturity",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
//       <div className="max-w-7xl mx-auto">
//         {/* HERO */}
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
//             Publications
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
//             Structured knowledge resources addressing security governance, operational risk, and institutional maturity across industries.
//           </p>
//         </div>

//         {/* OVERVIEW */}
//         <div className="grid md:grid-cols-2 gap-12 mb-24 items-start">
//           <div className="space-y-6 text-gray-600 leading-relaxed">
//             <p>
//               Publications developed by the Security Council represent structured knowledge outputs that explore foundational aspects of security governance, risk management, and organizational maturity.
//             </p>
//             <p>
//               These are not periodic articles or commentary pieces. Instead, publications are developed as formal documents that provide a comprehensive view of specific domains within security governance.
//             </p>
//             <p>
//               Publications aim to establish clarity around complex security themes by presenting structured frameworks, analytical insights, and governance-oriented perspectives.
//             </p>
//           </div>

//           <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
//             <h3 className="text-xl font-semibold mb-4">Intended for</h3>
//             <ul className="space-y-3 text-gray-600">
//               {roles.map((r, i) => (
//                 <li key={i}>• {r}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* TYPES */}
//         <div className="mb-24">
//           <h2 className="text-3xl font-semibold mb-12 text-center">
//             Types of Publications
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {types.map((t, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
//               >
//                 <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm">
//                   {t.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* THEMES */}
//         <div className="bg-white border border-gray-200 rounded-3xl p-12 mb-24 shadow-sm">
//           <h2 className="text-3xl font-semibold mb-8 text-center">
//             Key Thematic Areas
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6 text-gray-600">
//             {themes.map((t, i) => (
//               <div key={i} className="border rounded-xl p-6">
//                 {t}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ROLE IN DEVELOPMENT */}
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-8">
//             Role in Institutional Development
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 text-gray-600">
//             {outcomes.map((o, i) => (
//               <div key={i} className="border rounded-xl p-6 bg-white">
//                 {o}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Publications;

import React from "react";

const Publications: React.FC = () => {
  const types = [
    {
      title: "Research Papers",
      description:
        "In-depth exploration of specific risk domains, supported by structured analysis and sector observations.",
    },
    {
      title: "Governance Framework Documents",
      description:
        "Documents outlining structured approaches to security governance, including policy alignment and operational integration.",
    },
    {
      title: "Industry Whitepapers",
      description:
        "Sector-focused publications addressing unique risk environments and governance challenges.",
    },
    {
      title: "Technical-Strategic Notes",
      description:
        "Bridging technical security practices with strategic governance considerations for leadership audiences.",
    },
  ];

  const themes = [
    "Identity and Access Governance",
    "Secure Development Lifecycle Practices",
    "Workforce Security Awareness and Behavior",
    "Third-Party and Supply Chain Risk",
    "Regulatory Alignment and Compliance Structures",
  ];

  const roles = [
    "Security and risk leaders",
    "Governance and compliance teams",
    "Technology and product leadership",
    "Executive stakeholders",
  ];

  const outcomes = [
    "Building structured internal frameworks",
    "Aligning governance with operational practices",
    "Understanding domain-specific risks in depth",
    "Strengthening long-term security maturity",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Publications
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Structured knowledge resources addressing security governance, operational risk, and institutional maturity across industries.
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-start">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Publications developed by the Security Council represent structured knowledge outputs that explore foundational aspects of security governance, risk management, and organizational maturity.
            </p>
            <p>
              These are not periodic articles or commentary pieces. Instead, publications are developed as formal documents that provide a comprehensive view of specific domains within security governance.
            </p>
            <p>
              Publications aim to establish clarity around complex security themes by presenting structured frameworks, analytical insights, and governance-oriented perspectives.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Intended for</h3>
            <ul className="space-y-3 text-gray-600">
              {roles.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* TYPES */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Types of Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* THEMES */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Key Thematic Areas
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {themes.map((t, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm text-gray-700 text-center hover:shadow-sm transition"
              >
                <span className="block group-hover:text-black transition">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROLE IN DEVELOPMENT */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Role in Institutional Development
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-gray-400"></div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {o}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
