import React from "react";

const EligibilityCriteria: React.FC = () => {
  const orgEligibility = [
    "Defined governance structure",
    "Basic security awareness initiatives",
    "Operational processes for identity and access management",
    "Willingness to undergo structured evaluation",
  ];

  const individualEligibility = [
    "Operate within security, technology, or governance roles",
    "Have foundational understanding of organizational security practices",
    "Participate in structured learning or awareness programs",
  ];

  const additional = [
    "Sector-specific requirements may apply",
    "Evaluation readiness may be assessed prior to certification",
    "Participation may involve engagement with Council programs",
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Eligibility Criteria
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Defined requirements for participation in Security Council certification processes.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Eligibility criteria ensure that certification is meaningful, structured, and aligned with institutional and individual readiness.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-gray-700">
            Participation is open to organizations and individuals that demonstrate intent toward structured security governance and maturity alignment.
          </p>
        </div>
      </div>

      {/* 🔥 ORGANIZATION + INDIVIDUAL (SIDE BY SIDE) */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ORGANIZATION */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Organizational Eligibility
            </h2>

            <ul className="space-y-4 text-gray-300">
              {orgEligibility.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-white font-semibold">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* INDIVIDUAL */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Individual Eligibility
            </h2>

            <ul className="space-y-4 text-gray-300">
              {individualEligibility.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-white font-semibold">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ADDITIONAL CONSIDERATIONS */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Additional Considerations
          </h2>

          <ul className="space-y-4 text-gray-700 inline-block text-left">
            {additional.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default EligibilityCriteria;