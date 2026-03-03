import React from "react";

const CertificationDisclaimer: React.FC = () => {
  const keyStatements = [
    "Security Council is an independent advisory and research firm specializing in privacy governance, data protection strategies, and related intelligence.",
    "We are not a law firm and do not provide legal, tax, financial, or professional advice. Nothing on this site or in our deliverables constitutes formal legal or regulatory advice.",
    "Our work draws from deep expertise, rigorous analysis, current regulations (including but not limited to DPDP Act in India, GDPR influences, CCPA/CPRA, and emerging global frameworks), and real-world patterns — but interpretations of law can vary, and regulations change rapidly.",
    "We strongly recommend consulting qualified legal counsel for binding advice tailored to your specific situation, jurisdiction, or risk profile.",
  ];

  const opinionClarifications = [
    "Any References to 'best practices,' benchmarks, or forecasts are informed opinions based on available data as of publication — not guarantees of compliance.",
    "We do not issue formal certifications, audits, or attestations unless explicitly contracted and clearly scoped as such.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Certification Disclaimer
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transparency matters. This page clarifies the scope and boundaries
            of our advisory role so expectations remain clear, fair, and
            professionally grounded.
          </p>
        </div>

        {/* Core Position */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {keyStatements.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Opinions & Certification Clarifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Opinions, Benchmarks & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {opinionClarifications.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="border-t border-gray-200 pt-10 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            This disclaimer applies to all content, briefings, perspectives,
            and interactions. By using our site or services, you acknowledge
            and agree to these boundaries.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe in radical transparency. If something feels unclear — or
            if you would like us to expand on any aspect of our governance
            approach — just ask.
          </p>
          <p className="text-gray-500">
            Questions about how we walk the talk? Reach out — we’re happy to
            discuss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationDisclaimer;