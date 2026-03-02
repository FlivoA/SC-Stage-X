import React from "react";

const ResearchAnalysis: React.FC = () => {
  const researchDomains = [
    "Credential exposure mapping",
    "Dark web signal tracking",
    "Governance gap indicators",
    "Sector threat landscape studies",
    "Regulatory trend analysis",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Research & Analysis
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Security Council maintains a research division dedicated to analyzing
          evolving risk indicators across sectors.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          Research domains include:
        </h2>

        <div className="space-y-4 mb-12">
          {researchDomains.map((item, index) => (
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
            Our research methodology combines structured data analysis with
            governance evaluation to produce actionable institutional insight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAnalysis;
