import React from "react";

const PrivacyPolicy: React.FC = () => {
  const principles = [
    "Data minimization",
    "Purpose limitation",
    "Confidential handling",
    "Controlled access",
    "Secure storage practices",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Security Council is committed to safeguarding institutional and
          personal data.
        </p>

        <h2 className="text-2xl font-medium mb-4">
          We adhere to the following principles:
        </h2>

        <div className="space-y-4 mb-12">
          {principles.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">
            Information collected via website forms is used solely for
            communication and engagement purposes. Security Council does not
            sell or share personal data with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
