import React from "react";

const ResearchAnalysis: React.FC = () => {
  const sections = [
    {
      title: "In-depth studies on global privacy frameworks",
      description:
        "From GDPR evolutions and DPDP Rules in India to new state-level U.S. mandates and APAC developments.",
    },
    {
      title: "Risk mapping for AI governance, data ethics, and emerging tech",
      description:
        "Including federated learning or zero-knowledge proofs.",
    },
    {
      title: "Custom benchmarking against peers and global best practices",
      description:
        "Helping you see exactly where your program stands and where the gaps are.",
    },
    {
      title: "Privacy impact forecasting",
      description:
        "What does the next 18–24 months look like for your sector? We model scenarios so you're not reacting — you're preparing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Research & Analysis
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We go beyond surface-level reports. Our research cuts straight to the heart of emerging data ecosystems, regulatory shifts, and tech-privacy intersections. Expect:
          </p>
        </div>

        {/* Research Sections */}
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

        {/* Closing Statement */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            This isn't academic fluff. It's actionable intelligence grounded in rigorous methodology, cross-industry data, and on-the-ground client realities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're stress-testing a new product launch or preparing for a regulator inquiry, our analysis gives you the evidence to make confident moves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAnalysis;
