import React from "react";

const TermsOfUse: React.FC = () => {
  const sections = [
    {
      title: "Intellectual Property",
      description:
        "Our research, briefings, and perspectives are copyrighted; you can reference them with attribution but not redistribute commercially without permission.",
    },
    {
      title: "Acceptable Use",
      description:
        "No scraping, no misuse for spam or illegal activities.",
    },
    {
      title: "No Warranties",
      description:
        "Content is for informational purposes — it's not formal legal advice, and we disclaim liability for decisions based solely on it.",
    },
    {
      title: "Limitation of Liability",
      description:
        "Standard protections in line with industry norms.",
    },
    {
      title: "Governing Law",
      description:
        "Disputes handled under Indian law (with Jammu jurisdiction as appropriate), reflecting our base.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          These are the basic rules for using our website, downloading briefings, accessing reports, or engaging with any of our content and tools. Key points include:
          </p>
        </div>

        {/* Terms Grid */}
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
          <p className="text-gray-700 leading-relaxed">
            We keep it short, fair, and enforceable — because trust starts with clear expectations. Read the full Terms here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;