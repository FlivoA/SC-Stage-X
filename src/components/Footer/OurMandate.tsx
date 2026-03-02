import React from "react";

const OurMandate: React.FC = () => {
  const mandates = [
    "Advancing structured security awareness across regulated and enterprise sectors",
    "Developing measurable maturity frameworks",
    "Providing sector-neutral intelligence insights",
    "Establishing certification pathways aligned with governance standards",
    "Promoting long-term resilience through structured enablement",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Our Mandate</h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Security Council operates as an independent research-led awareness
          and certification body dedicated to strengthening institutional
          security governance.
        </p>

        <div className="space-y-4">
          {mandates.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 leading-relaxed">
            We do not implement technical systems or resell vendor products.
            Our role is advisory, analytical, and standards-driven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMandate;