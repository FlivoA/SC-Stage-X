import React from "react";

const Briefings: React.FC = () => {
  const offerings = [
    {
      title: "Monthly Regulatory Pulse Briefings",
      description:
        "Key regulatory changes, enforcement signals, and what they mean for your roadmap — delivered via email with optional live Q&A sessions.",
    },
    {
      title: "Executive-Level Deep Dives",
      description:
        "45–60 minute focused sessions on urgent topics like AI governance board reporting, privacy in M&A due diligence, and audit readiness.",
    },
    {
      title: "Custom Briefings",
      description:
        "Tailored to your industry, risk profile, or milestones — e.g., interpreting new DPDP Rules amendments for your consent architecture.",
    },
    {
      title: "On-Demand Crisis Briefings",
      description:
        "When regulations shift or incidents occur, we mobilize rapidly with targeted, decision-ready intelligence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Briefings
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Time is scarce — especially for executives and boards. Our
            briefings are short, sharp, and built to inform decisions fast.
            These are not generic webinars — they are intelligence briefings,
            concise, evidence-backed, and designed for real-world governance.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modular Programs Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Modular Intelligence Programs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All programs are modular — select a single pillar or combine them
            into a full intelligence subscription. Every engagement aligns with
            our mandate: principled, pragmatic privacy governance that protects
            people while enabling responsible innovation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're building your first enterprise-wide privacy program,
            maturing an existing one, or preparing your board for the next
            headline risk, our briefings provide the clarity and edge you need.
          </p>
        </div>

        {/* Closing Section */}
        <div className="text-center border-t border-gray-200 pt-10">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore how these fit your needs — review sample Industry
            Perspectives, dive into recent Briefings, or talk with us about
            customizing a package that truly moves the needle for your team.
          </p>
          <p className="text-gray-500 mt-4">
            Not sure where to start? Drop us a line — we’ll help you cut
            through the complexity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Briefings;