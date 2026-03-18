import React from "react";

const FeaturedReports: React.FC = () => {
  const reports = [
    {
      title: "2026 Threat Landscape Outlook",
      description:
        "A structured evaluation of cross-sector threat patterns, highlighting evolving attack vectors, identity-based risks, and governance challenges impacting regulated institutions.",
    },
    {
      title: "Credential Exposure Trends in BFSI",
      description:
        "Focused analysis on identity compromise, access governance gaps, and credential misuse patterns observed across financial institutions.",
    },
    {
      title: "Enterprise Security Maturity Benchmark",
      description:
        "Comparative study evaluating governance maturity indicators across enterprise environments, identifying gaps in policy alignment and operational execution.",
    },
    {
      title: "Insurance Data Exposure Analysis",
      description:
        "Assessment of policyholder data risks, third-party exposure, and operational vulnerabilities within insurance ecosystems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Featured Reports
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Curated intelligence outputs presenting structured analysis of emerging risk patterns, governance gaps, and sector-specific exposure trends across regulated and enterprise environments.
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Featured Reports represent the most comprehensive and high-impact intelligence outputs developed by the Security Council. These reports are designed to provide institutions with a structured understanding of evolving security risks, governance maturity indicators, and operational exposure patterns.
            </p>
            <p>
              Unlike fragmented industry reporting, Security Council reports are built through a structured analytical approach that integrates sector-specific insights, governance evaluation, and real-world exposure indicators.
            </p>
            <p>
              Each report is developed to provide clarity on not only the nature of risks, but also the underlying structural factors contributing to exposure.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              These reports support:
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Executive-level decision-making</li>
              <li>• Governance alignment initiatives</li>
              <li>• Risk identification and prioritization</li>
              <li>• Institutional awareness of emerging threat patterns</li>
            </ul>
          </div>
        </div>

        {/* REPORT HIGHLIGHTS */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Report Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-xl transition duration-300"
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gray-300 transition"></div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-black">
                  {report.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {report.description}
                </p>

                <div className="mt-6 text-sm text-gray-400 group-hover:text-gray-600 transition">
                  View Details →
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* STRUCTURAL VALUE */}
        <div className="max-w-4xl mx-auto mb-20 space-y-6 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">
            Structural Value of Reports
          </h2>
          <p>
            Security Council reports are designed to move beyond descriptive insights and provide structured interpretation of risk.
          </p>
          <p>They enable institutions to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand how exposure patterns emerge</li>
            <li>Identify governance gaps contributing to risk</li>
            <li>Align internal security initiatives with observed trends</li>
            <li>Build structured response strategies</li>
          </ul>
          <p>
            The emphasis is on clarity, structure, and applicability, rather than volume of information.
          </p>
        </div>

        {/* ACCESS */}
        <div className="text-center border-t border-gray-200 pt-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Access & Engagement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Selected reports are made available for public access. Detailed intelligence outputs, extended analysis, and sector-specific insights are accessible through structured engagement with the Council.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FeaturedReports;