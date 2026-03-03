import React from "react";

const OurCulture: React.FC = () => {
  const values = [
    {
      title: "Independence First",
      description:
        "We say no to conflicts, even when it costs us. Objectivity isn't optional.",
    },
    {
      title: "People Over Process",
      description:
        "Tools and frameworks matter, but trust comes from how we treat each other and our clients. We build teams that debate hard but stay kind.",
    },
    {
      title: "Continuous Learning in a Fast World",
      description:
        "AI governance is accelerating, new state laws are stacking up, and enforcement is gaining teeth. We invest heavily in staying ahead through conferences, deep research time, and peer networks.",
    },
    {
      title: "Impact-Oriented",
      description:
        "We measure success by whether organizations leave stronger, more resilient, and more trusted — not by billable hours or slide deck volume.",
    },
    {
      title: "Work-Life Sanity",
      description:
        "Deep work needs rest. No hero culture here; sustainable pace wins long-term.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Our Culture
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Privacy governance isn't a 9-to-5 checkbox for us — it's how we operate every day. Our culture is built on a few non-negotiables that shape how we think, collaborate, and deliver impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
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

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We’re a small, tight-knit group that punches above its weight because we hire adults who own their craft. If that sounds like your kind of place, the door’s open.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCulture;