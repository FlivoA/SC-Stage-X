import React from "react";

const ApplyCertification: React.FC = () => {
  const steps = [
    {
      title: "Expression of Interest",
      desc: "Submit initial request to engage with the Council.",
    },
    {
      title: "Preliminary Assessment",
      desc: "Review of readiness and alignment with eligibility criteria.",
    },
    {
      title: "Structured Evaluation",
      desc: "Detailed evaluation across defined certification domains.",
    },
    {
      title: "Review & Validation",
      desc: "Assessment of findings and alignment with framework standards.",
    },
    {
      title: "Certification Outcome",
      desc: "Formal recognition based on evaluation results.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Apply for Certification
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Initiate participation in the Security Council certification process through structured engagement.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Certification is conducted through a structured process designed to ensure consistency, transparency, and alignment with defined frameworks.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-gray-700">
            The application process is not an immediate approval mechanism. It is the starting point of an evaluation journey.
          </p>
        </div>
      </div>

      {/* PROCESS FLOW (🔥 MAIN UI) */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Application Process
          </h2>

          <div className="relative border-l border-white/20 pl-8 space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">

                {/* Circle */}
                <div className="
                  absolute -left-[11px] top-1.5
                  w-5 h-5 rounded-full bg-white
                  group-hover:scale-110 transition
                " />

                {/* Content */}
                <div className="
                  bg-white/5 backdrop-blur-sm
                  p-6 rounded-xl
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                ">
                  <h3 className="text-lg font-semibold mb-2">
                    Step {index + 1} – {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOTE */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Note</h2>

          <div className="bg-gray-100 rounded-2xl p-6 text-gray-700">
            Certification outcomes are based on structured evaluation and are not guaranteed upon application.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="text-3xl font-semibold">
            Get Started
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="
              bg-[#0b1220] text-white
              px-8 py-3 rounded-xl
              hover:shadow-lg hover:-translate-y-1
              transition-all duration-300
            ">
              Submit Application
            </button>

            <button className="
              border border-gray-300
              px-8 py-3 rounded-xl
              hover:shadow-md hover:-translate-y-1
              transition-all duration-300
            ">
              Engage With the Council
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ApplyCertification;