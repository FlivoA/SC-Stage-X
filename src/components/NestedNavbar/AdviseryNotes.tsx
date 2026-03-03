import React from "react";

interface AdvisoryItem {
  id: number;
  title: string;
  description: string;
}

const advisoryServices: AdvisoryItem[] = [
  {
    id: 1,
    title: "Enterprise Security Awareness Advisory",
    description:
      "Guidance frameworks supporting organizational security awareness, workforce enablement, and governance alignment.",
  },
  {
    id: 2,
    title: "AI Governance & Policy Enablement",
    description:
      "Independent advisory insights focused on responsible AI adoption, compliance readiness, and risk transparency.",
  },
  {
    id: 3,
    title: "Security Maturity Assessment Support",
    description:
      "Structured evaluation models designed to help enterprises benchmark and strengthen security posture.",
  },
];

const AdviseryNotes: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-slate-950 text-white">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Advisory & Enablement
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {advisoryServices.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-slate-600 transition"
          >
            <h3 className="text-lg font-medium mb-3">{item.title}</h3>
            <p className="text-sm text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdviseryNotes;