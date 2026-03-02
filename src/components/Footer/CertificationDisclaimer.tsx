import React from "react";

const CertificationDisclaimer: React.FC = () => {
  const points = [
    "Does not eliminate risk",
    "Does not replace regulatory compliance",
    "Represents governance maturity at the time of evaluation",
    "Requires periodic reassessment",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Certification Disclaimer
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Certification issued by Security Council reflects structured
          evaluation based on defined criteria at the time of assessment.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          Certification:
        </h2>

        <div className="space-y-4 mb-12">
          {points.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">
            Organizations remain responsible for ongoing operational security
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationDisclaimer;