import React from "react";

const AdvisoryPositioning: React.FC = () => {
  const differentiators = [
    {
      title: "No cookie-cutter playbooks",
      description:
        "Traditional consultancies often deliver one-size-fits-all roadmaps that gather dust. We start with your reality: your industry pressures, your data flows, your innovation roadmap, your risk appetite. Then we co-build strategies that evolve as fast as the landscape — blending deep privacy expertise with cross-sector foresight from fintech breaches to healthtech DPIAs to e-commerce cross-border headaches.",
    },
    {
      title: "Independence as our edge",
      description:
        "We're fiercely non-aligned. No vendor ties, no hidden agendas, no pressure to upsell tech stacks. That means we tell you the inconvenient truths: when a shiny new AI tool creates more risk than value, when a \"compliance-lite\" shortcut could backfire in the next enforcement wave, or when your governance actually needs to go deeper than the regs require to build real resilience. Clients trust us because we never compromise objectivity.",
    },
    {
      title: "From compliance to competitive moat",
      description:
        "We go beyond \"meeting requirements.\" Our advisory work turns privacy governance into a strategic differentiator: privacy-by-design that speeds product launches, data ethics frameworks that win customer loyalty, AI governance models that position you as the trusted player in your space. We help leaders flip the script — from \"privacy is a burden\" to \"strong governance is our quiet advantage\" in a world watching every data move.",
    },
    {
      title: "Practical, forward-leaning delivery",
      description:
        "Expect hands-on partnership: shoulder-to-shoulder work on program design, tailored roadmaps, board-ready briefings on emerging risks (think DPDP amendments, AI Act ripple effects, or new state-level mandates), scenario planning for enforcement trends, and ongoing advisory that keeps pace with your growth. Whether you're drafting your first enterprise privacy program, benchmarking against global peers, preparing for M&A due diligence with privacy lenses, or embedding responsible AI practices without killing velocity — we deliver clarity, confidence, and executable steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Advisory Positioning
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At Security Council, we don't do off-the-shelf consulting. We position ourselves as your independent strategic intelligence partner in the fast-moving world of privacy governance, data protection, and responsible AI deployment. In 2026 — where regulations stack up overnight, AI ethics debates hit boardrooms, and trust is the real currency — most firms push templated frameworks that feel like compliance checkboxes. We take a different path: we help you lead, not just comply.
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What sets our advisory approach apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            In short: we don't sell hours or reports. We provide principled, pragmatic advisory that aligns privacy excellence directly with your business objectives — protecting individuals, enabling innovation, and turning regulatory complexity into long-term value.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're ready to move from reactive compliance to proactive leadership in privacy governance, let's talk. Explore our Programs for the intelligence backbone, or reach out directly — we're here to help you build governance that actually works in 2026 and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPositioning;