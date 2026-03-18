// import React from "react";

// const FrameWork: React.FC = () =>{
//     return(
//         <div className="bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
//             FrameWork
//         </div>
//     )
// }

// export default FrameWork;


import React from "react";

const Framework: React.FC = () => {
  const structure = [
    {
      title: "Domain-Based Evaluation",
      desc: "Assessment across key security domains such as identity, development, workforce, and governance.",
    },
    {
      title: "Maturity Indicators",
      desc: "Structured indicators defining levels of alignment and capability.",
    },
    {
      title: "Evidence-Based Assessment",
      desc: "Evaluation based on observable practices and structured validation.",
    },
  ];

  const levels = [
    "Level 1 – Reactive",
    "Level 2 – Policy Defined",
    "Level 3 – Governance Aligned",
    "Level 4 – Integrated Practices",
    "Level 5 – Structured & Certified",
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Certification Framework
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A structured model defining the principles, domains, and evaluation criteria used in Security Council certification.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          The Security Council Certification Framework is designed to provide a consistent and structured approach to evaluating security maturity across organizations and individuals.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            The framework is built on:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Governance alignment</li>
            <li>• Awareness maturity</li>
            <li>• Operational practices</li>
            <li>• Risk visibility</li>
            <li>• Continuous improvement</li>
          </ul>
        </div>

        <p>
          It is not limited to compliance requirements but extends to real-world governance effectiveness.
        </p>
      </div>

      {/* 🔥 FRAMEWORK STRUCTURE */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Framework Structure
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {structure.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#111a2e]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
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

      {/* MATURITY LEVELS */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Maturity Levels
          </h2>

          <div className="space-y-4">
            {levels.map((level, index) => (
              <div
                key={index}
                className="
                  bg-gray-100
                  rounded-xl
                  px-6 py-4
                  flex items-center gap-4
                  transition-all duration-300
                  hover:shadow-md
                "
              >
                <span className="font-semibold text-gray-900">
                  {index + 1}.
                </span>
                <span className="text-gray-700">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PURPOSE */}
      <div className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Purpose</h2>

          <ul className="space-y-4 text-gray-700 inline-block text-left">
            {[
              "Consistency in evaluation",
              "Clarity in expectations",
              "Structured pathway for improvement",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  {index + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Framework;