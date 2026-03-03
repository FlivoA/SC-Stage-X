import React from "react";

const SearchCareers: React.FC = () => {
  const roles = [
    {
      title: "Privacy Strategists & Governance Leads",
      description:
        "Blending regulatory know-how with business acumen.",
    },
    {
      title: "Research Analysts",
      description:
        "Turning raw regulatory signals and enforcement data into foresight.",
    },
    {
      title: "Advisory Consultants",
      description:
        "Client-facing roles that demand independence and real-world pragmatism.",
    },
    {
      title: "Content & Insights Creators",
      description:
        "If you can write punchy, accurate briefings on AI governance or cross-border data flows, talk to us.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Search Careers
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We're always scouting for sharp, principled minds who live and breathe privacy governance. Current openings (and speculative ones we love hearing about):
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {role.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Culture & Hiring Philosophy */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            We hire for curiosity, integrity, and the ability to cut through complexity. Remote-friendly (with occasional Jammu or pan-India travel for the right fit), competitive pay, and a culture that values outcomes over hours.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Check open roles or send a thoughtful intro — we're not big on formal applications if you can show us your thinking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchCareers;
