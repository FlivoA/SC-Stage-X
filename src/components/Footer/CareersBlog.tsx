import React from "react";

const CareersBlog: React.FC = () => {
  const blogTopics = [
    "Research methodology insights",
    "Governance case discussions",
    "Professional development pathways",
    "Institutional engagement summaries",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Careers Blog
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          The Careers Blog provides insights into working within a
          research-driven advisory environment.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          Content may include:
        </h2>

        <div className="space-y-4 mb-12">
          {blogTopics.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersBlog;