import React from "react";

const Briefings: React.FC = () => {
  const briefingPoints = [
    "Emerging threat summaries",
    "Governance oversight signals",
    "Certification updates",
    "Sector-specific risk alerts",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Briefings
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Security Council issues periodic executive briefings designed for
          senior decision-makers.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          Briefings provide:
        </h2>

        <div className="space-y-4 mb-12">
          {briefingPoints.map((item, index) => (
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
            Briefings are concise, structured, and aligned with board-level
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Briefings;
