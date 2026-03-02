import React from "react";

const TermsOfUse: React.FC = () => {
  const terms = [
    "Content may not be redistributed without permission",
    "Certification status may not be misrepresented",
    "Advisory content does not constitute legal advice",
    "Use of the website implies acceptance of these terms",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Terms of Use
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          All content published by Security Council is provided for
          informational and institutional guidance purposes.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          Users agree that:
        </h2>

        <div className="space-y-4 mb-12">
          {terms.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;