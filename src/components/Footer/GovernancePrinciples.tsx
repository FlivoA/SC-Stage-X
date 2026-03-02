import React from "react";

const GovernancePrinciples: React.FC = () => {
  const principles = [
    {
      title: "Independence",
      description:
        "We are not affiliated with technology vendors or product providers. Research and advisory guidance remain commercially neutral.",
    },
    {
      title: "Analytical Integrity",
      description:
        "All insights and maturity assessments are evidence-based and structured according to documented methodologies.",
    },
    {
      title: "Sector Neutrality",
      description:
        "Frameworks are developed to apply across sectors while respecting regulatory specificity.",
    },
    {
      title: "Accountability",
      description:
        "Certification and advisory positions are supported by documented evaluation criteria.",
    },
    {
      title: "Transparency",
      description:
        "Evaluation methodologies are structured, defined, and repeatable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Governance Principles
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Security Council operates under defined governance principles to
          preserve analytical integrity and institutional neutrality.
        </p>

        <div className="space-y-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-gray-50"
            >
              <h2 className="text-xl font-medium mb-2">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernancePrinciples;