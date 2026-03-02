import React from "react";

const IndustryPerspectives: React.FC = () => {
  const publications = [
    "Examine cross-sector exposure patterns",
    "Evaluate compliance maturity signals",
    "Interpret regulatory shifts",
    "Identify structural workforce capability gaps",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Industry Perspectives
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Industry Perspectives present structured analytical commentary on
          emerging governance and operational challenges.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          These publications:
        </h2>

        <div className="space-y-4 mb-12">
          {publications.map((item, index) => (
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
            The objective is to support leadership teams in making informed
            strategic security decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryPerspectives;