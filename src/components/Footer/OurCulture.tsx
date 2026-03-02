import React from "react";

const OurCulture: React.FC = () => {
  const culturePoints = [
    "Intellectual discipline",
    "Institutional responsibility",
    "Analytical independence",
    "Long-term resilience thinking",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Our Culture
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Security Council’s culture is built on:
        </p>

        <div className="space-y-4 mb-12">
          {culturePoints.map((item, index) => (
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
            We prioritize clarity over complexity and structure over
            reactionary response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;