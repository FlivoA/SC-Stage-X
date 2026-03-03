import React from "react";

interface Report {
  id: number;
  title: string;
  description: string;
}

const reports: Report[] = [
  {
    id: 1,
    title: "Defining BFSI Enterprise Security Protocols 2026",
    description:
      "A structured framework outlining enterprise-grade security standards and governance benchmarks for BFSI institutions.",
  },
  {
    id: 2,
    title: "Enterprise AI Governance & Enforcement Outlook 2026",
    description:
      "An advisory report focused on AI risk management, compliance alignment, and responsible enterprise AI adoption.",
  },
  {
    id: 3,
    title: "Industrial AI Policy & Maturity Assessment",
    description:
      "Insights into AI policy readiness, operational resilience, and industry-wide enablement strategies.",
  },
];

const FeaturedReports: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-slate-950 text-white">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Featured Reports
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-slate-600 transition"
          >
            <h3 className="text-lg font-medium mb-3">{report.title}</h3>
            <p className="text-sm text-slate-400">{report.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedReports;