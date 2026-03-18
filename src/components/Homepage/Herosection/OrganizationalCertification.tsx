// import React from "react";

// const OrganizationalCertification: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
//       Organizational Certification
//     </div>
//   );
// };

// export default OrganizationalCertification;


import React from "react";

const OrganizationalCertification: React.FC = () => {
  const dimensions = [
    {
      title: "Governance Alignment",
      desc: "Alignment between policies, leadership oversight, and operational execution.",
    },
    {
      title: "Workforce Awareness",
      desc: "Security awareness maturity across employees and stakeholders.",
    },
    {
      title: "Secure Development Practices",
      desc: "Integration of security within product and application development lifecycles.",
    },
    {
      title: "Identity & Access Governance",
      desc: "Management of credentials, privileges, and access controls.",
    },
    {
      title: "Third-Party Risk Oversight",
      desc: "Governance of vendor and partner ecosystems.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Organizational Certification
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A structured evaluation and certification framework recognizing institutional alignment with security governance, awareness, and operational maturity standards.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Organizational Certification by the Security Council is designed to assess and recognize institutions that demonstrate structured alignment with defined security governance principles.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            The certification evaluates the organization’s overall approach to:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Governance structure</li>
            <li>• Workforce awareness</li>
            <li>• Secure development practices</li>
            <li>• Identity and access management</li>
            <li>• Risk visibility and reporting</li>
          </ul>
        </div>

        <p>
          The objective is to establish a measurable and structured representation of an institution’s security maturity.
        </p>
      </div>

      {/* 🔥 DIMENSIONS */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Certification Dimensions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {dimensions.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#111a2e]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:shadow-xl
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

      {/* CERTIFICATION OUTCOME */}
<div className="py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-10">
      Certification Outcome
    </h2>

    <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm text-left">
      <p className="mb-4 text-gray-700">
        Organizations that meet defined criteria are recognized through:
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>• Formal certification acknowledgment</li>
        <li>• Structured maturity positioning</li>
        <li>• Alignment with Security Council frameworks</li>
      </ul>

      <p className="mt-6 text-gray-600">
        This recognition reflects commitment to structured security governance.
      </p>
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
      Organizations may participate in certification through structured
      evaluation and advisory engagement with the Council.
    </p>
  </div>
</div>

    </div>
  );
};

export default OrganizationalCertification;