import React from "react";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "What We Collect",
      description:
        "We collect limited personal information — primarily from contact forms, newsletter sign-ups, briefing registrations, and client interactions. We do not collect unnecessary data.",
    },
    {
      title: "How We Use It",
      description:
        "Information is used only for legitimate purposes such as responding to inquiries, delivering insights and briefings, fulfilling engagements, and improving our services.",
    },
    {
      title: "Retention",
      description:
        "We retain information only as long as reasonably necessary, with defined deletion triggers and periodic data reviews to prevent over-retention.",
    },
    {
      title: "Data Sharing",
      description:
        "We do not sell personal data. We share information only with carefully vetted service providers under strict contractual safeguards when necessary to deliver our services.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, correct, delete, or object to the processing of your data. We make exercising these rights straightforward and transparent.",
    },
    {
      title: "Security Measures",
      description:
        "We apply encryption in transit and at rest, enforce strict access controls, and conduct regular security reviews to safeguard information.",
    },
    {
      title: "International Transfers",
      description:
        "Where international transfers occur, we rely on adequacy decisions or appropriate safeguards such as standard contractual clauses.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We take data privacy seriously — it’s our entire profession. This
            policy explains in plain language how we handle information and
            protect the trust placed in us.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
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

        {/* Closing Statement */}
        <div className="border-t border-gray-200 pt-10 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            We minimize collection by design, avoid unnecessary tracking, and
            update this policy whenever laws or practices evolve.
          </p>
          <p className="text-gray-500 text-sm">
            Last reviewed: Early 2026. We encourage you to read the full
            details — it’s concise and written for humans, not lawyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
