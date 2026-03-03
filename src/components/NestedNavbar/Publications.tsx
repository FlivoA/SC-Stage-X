import React from "react";

interface Publication {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "BFSI Security Maturity Outlook 2026",
    summary:
      "An advisory publication outlining evolving enterprise security benchmarks, governance controls, and risk alignment for BFSI institutions.",
    date: "January 2026",
  },
  {
    id: 2,
    title: "Enterprise AI Governance Framework",
    summary:
      "A structured reference guide supporting responsible AI adoption, compliance readiness, and operational transparency.",
    date: "March 2026",
  },
  {
    id: 3,
    title: "Industrial AI Policy Readiness Report",
    summary:
      "A cross-sector analysis of AI implementation standards, workforce enablement, and regulatory alignment.",
    date: "June 2026",
  },
];

const Publications: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white text-slate-900">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Publications
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {publications.map((item) => (
          <div
            key={item.id}
            className="p-6 border border-slate-200 rounded-lg hover:shadow-sm transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <span className="text-sm text-slate-500">{item.date}</span>
            </div>
            <p className="text-sm text-slate-600">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;