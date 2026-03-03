import React from "react";

const CareersBlog: React.FC = () => {
  const sections = [
    {
      title: "Day-in-the-life pieces from our team",
      description:
        "What a typical week looks like when you're juggling DPDP amendments, AI DPIAs, and client board prep.",
    },
    {
      title: "Lessons from the trenches",
      description:
        "What we learned from recent enforcement actions, failed programs we've seen, or wins that turned privacy into a revenue driver.",
    },
    {
      title: "Career advice for privacy pros",
      description:
        "How to level up from compliance executor to strategic advisor, navigating AI ethics debates, or building governance programs that actually stick.",
    },
    {
      title: "Guest spots from clients or peers",
      description:
        "On emerging challenges like zero-trust privacy models or cross-border data ethics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Careers Blog
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Real stories, no corporate polish. Here we share:
          </p>
        </div>

        {/* Content Sections */}
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

        {/* Philosophy Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm mb-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            It's raw, opinionated, and updated when we have something worth saying — not on a content calendar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dive into any of these areas to get a fuller picture of how we think, work, and grow. Whether you're here for the latest regulatory pulse, career inspo, or just curious about life inside a privacy-focused advisory firm, Insights is your window in.
          </p>
        </div>

        {/* Closing CTA */}
        <div className="border-t border-gray-200 pt-10 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            Found something useful?
          </p>
          <p className="text-gray-600 leading-relaxed">
            Share it, debate it, or reach out — we're always up for good conversations on what privacy governance should look like next.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersBlog;
