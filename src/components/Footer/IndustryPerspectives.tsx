import React from "react";

const IndustryPerspectives: React.FC = () => {
  const sections = [
    {
      title: "Sector-specific deep dives",
      description:
        "How fintechs are turning consent management into a loyalty driver, how healthtech handles secondary use of data under new ethics rules, or how e-commerce platforms are navigating cross-border data flows without killing user experience.",
    },
    {
      title: "Trend trackers",
      description:
        "Quarterly roundups on enforcement trends, breach patterns, regulator priorities, and board-level privacy questions we're seeing rise.",
    },
    {
      title: "Comparative views",
      description:
        "Anonymized insights from our client base — what works, what fails spectacularly, and why some organizations turn privacy into a moat while others treat it as a cost center.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Industry Perspectives
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We aggregate and distill what's actually happening across sectors — no hype, just patterns leaders need to know. Our perspectives include:
          </p>
        </div>

        {/* Perspectives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery Statement */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Delivered through reports, dashboards, and private roundtables, these perspectives keep your team informed without drowning in noise.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We focus on what's material to strategy, not what's trending on LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryPerspectives;
