import React from "react";

const GovernancePrinciples: React.FC = () => {
  // const principles = [
  //   {
  //     title: "Independence",
  //     description:
  //       "We maintain strict separation from technology vendors and product providers. Our advisory guidance remains commercially neutral and free from external influence.",
  //   },
  //   {
  //     title: "Analytical Integrity",
  //     description:
  //       "All recommendations, research outputs, and maturity assessments are evidence-based and grounded in documented methodologies.",
  //   },
  //   {
  //     title: "Sector Neutrality",
  //     description:
  //       "Our governance frameworks are designed to operate across industries while respecting sector-specific regulatory obligations.",
  //   },
  //   {
  //     title: "Accountability",
  //     description:
  //       "Every certification, advisory position, and evaluation is backed by defined criteria and structured review processes.",
  //   },
  //   {
  //     title: "Transparency",
  //     description:
  //       "Our methodologies are clearly defined, structured, and repeatable — ensuring consistency and clarity in every engagement.",
  //   },
  // ];

  return (
    <div className=" bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20 ">
      <div className="max-w-6xl mx-auto ">
        {/* Hero Section */}
        <div className="text-center mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Governance Principles
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Security Council, governance isn't just a footer link — it's the
            foundation of everything we do. As an independent advisory firm in
            the privacy and data protection space, we hold ourselves to the
            same high standards we recommend to clients: transparency,
            accountability, ethical handling of information, and zero tolerance
            for conflicts that could undermine trust.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
            This section outlines our core legal and operational commitments so
            you understand exactly how we operate — from how we protect data
            that touches our systems to the defined boundaries of our advisory
            role.
          </p>
        </div>

        {/* Principles Grid */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GovernancePrinciples;
