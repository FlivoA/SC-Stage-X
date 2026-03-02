import React from "react";

const AdvisoryPositioning: React.FC = () => {
  const services = [
    "Security maturity gap identification",
    "Governance alignment strategy",
    "Workforce enablement planning",
    "Certification readiness evaluation",
    "Executive reporting advisory",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Advisory Positioning
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Security Council provides structured advisory engagement focused on
          governance maturity and workforce enablement.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          We do not act as a managed security provider or system integrator.
          Instead, we function as an independent body that evaluates, guides,
          and validates.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-medium mb-4">
            Advisory engagement typically includes:
          </h2>

          {services.map((item, index) => (
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

export default AdvisoryPositioning;
