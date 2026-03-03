import React from "react";

interface CaseStudy {
  id: number;
  title: string;
  sector: string;
  summary: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Strengthening BFSI Security Maturity",
    sector: "Banking & Financial Services",
    summary:
      "A structured engagement supporting governance alignment, risk visibility, and workforce security awareness across enterprise teams.",
  },
  {
    id: 2,
    title: "Enterprise AI Policy Enablement",
    sector: "Technology & AI",
    summary:
      "Advisory-led initiative focused on responsible AI adoption, compliance readiness, and operational transparency.",
  },
  {
    id: 3,
    title: "Healthcare Data Protection Framework",
    sector: "Healthcare",
    summary:
      "Independent assessment model designed to enhance data security controls and institutional compliance posture.",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white text-slate-900">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="border border-slate-200 p-6 rounded-lg hover:shadow-sm transition"
          >
            <span className="text-xs text-slate-500 uppercase tracking-wide">
              {study.sector}
            </span>
            <h3 className="text-lg font-medium mt-2 mb-3">
              {study.title}
            </h3>
            <p className="text-sm text-slate-600">{study.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;