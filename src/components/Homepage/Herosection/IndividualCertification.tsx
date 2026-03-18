// import React from "react";

// const IndividualCertification: React.FC = ()=>{
//     return(
//         <div className="bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
//             Individual Certification
//         </div>
//     )
// }

// export default IndividualCertification;

import React from "react";

const IndividualCertification: React.FC = () => {
  const areas = [
    {
      title: "Security Awareness & Risk Understanding",
      desc: "Understanding of common exposure patterns and behavioral risks.",
    },
    {
      title: "Governance & Policy Alignment",
      desc: "Ability to interpret and apply governance structures.",
    },
    {
      title: "Secure Development & Operational Practices",
      desc: "Awareness of secure development lifecycle and operational controls.",
    },
    {
      title: "Identity & Access Risk",
      desc: "Understanding credential exposure and privilege governance.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Individual Certification
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A structured certification pathway recognizing individual understanding of security governance, awareness, and operational practices.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Individual Certification is designed for professionals across security, technology, governance, and leadership roles.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            The certification evaluates an individual’s ability to:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Understand security risks in organizational context</li>
            <li>• Align practices with governance frameworks</li>
            <li>• Interpret security maturity indicators</li>
            <li>• Apply structured thinking to risk scenarios</li>
          </ul>
        </div>

        <p>
          This approach ensures that certified individuals contribute meaningfully to institutional security maturity.
        </p>
      </div>

      {/* 🔥 CERTIFICATION AREAS */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Certification Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((item, index) => (
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

      {/* VALUE */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Value</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Professional credibility",
              "Organizational alignment",
              "Structured understanding of security governance",
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

      {/* ENGAGEMENT */}
      <div className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Engagement
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Individuals may participate through structured learning and evaluation
            pathways defined by the Council.
          </p>
        </div>
      </div>

    </div>
  );
};

export default IndividualCertification;