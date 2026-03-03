import React from "react";

const OurMandate: React.FC = () => {
  const sections = [
    "Provide unbiased, high-caliber research and analysis that demystifies complex data ecosystems",
    "Deliver actionable industry perspectives and briefings that keep decision-makers ahead of regulatory shifts and emerging risks",
    "Offer independent advisory positioning that aligns privacy excellence with business objectives",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Our Mandate
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our core mandate is simple yet powerful: to champion principled,
            pragmatic privacy governance that protects individuals while
            enabling responsible innovation.
          </p>
        </div>

        {/* Mandate Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 "
            >
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Closing Philosophy */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            We believe strong governance isn't about restriction — it's about
            building resilience, fostering trust, and unlocking long-term value
            in a data-driven world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMandate;
