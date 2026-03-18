// import React from "react";


// interface NewsProps { message?: string }

// const News: React.FC<NewsProps> = ({ message = "Latest News & Announcements will be published here." }) => (
//   <div className="p-6 text-lg font-semibold">{message}</div>
// );

// export default News;

import React from "react";

const NewsAnnouncements: React.FC = () => {
  const contentTypes = [
    {
      title: "Report Releases",
      desc: "Announcements related to newly published intelligence reports.",
    },
    {
      title: "Program Updates",
      desc: "Introduction of new awareness, training, or advisory initiatives.",
    },
    {
      title: "Certification Developments",
      desc: "Updates related to certification frameworks and participation.",
    },
    {
      title: "Events & Engagements",
      desc: "Participation in industry discussions, workshops, and forums.",
    },
    {
      title: "Institutional Milestones",
      desc: "Key developments within the Council.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          News & Announcements
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Official updates and institutional developments from the Security Council.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-6 text-gray-600 leading-relaxed">
        <p>
          The News & Announcements section provides visibility into the activities,
          initiatives, and developments of the Security Council.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <p className="mb-4 font-medium text-gray-800">
            This includes updates related to:
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Intelligence releases</li>
            <li>• Program launches</li>
            <li>• Certification developments</li>
            <li>• Institutional engagements</li>
            <li>• Events and participation</li>
          </ul>
        </div>

        <p>
          The objective is to maintain transparency and provide a structured view
          of ongoing Council activities.
        </p>
      </div>

      {/* 🔥 DARK SECTION - CONTENT TYPES */}
      <div className="bg-[#0b1220] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Content Types
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {contentTypes.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#111a2e]
                  rounded-xl
                  p-6
                  transition-all duration-300
                  hover:shadow-2xl
                  hover:-translate-y-1
                "
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORMAT + PURPOSE */}
<div className="py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

    {/* FORMAT */}
    <div>
      <h2 className="text-3xl font-semibold mb-6">Format</h2>

      <ul className="space-y-4 text-gray-700 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        {["Title", "Date", "Summary", "Reference link"].map(
          (item, index) => (
            <li key={index} className="flex gap-3">
              <span className="font-semibold text-gray-900">
                •
              </span>
              <span>{item}</span>
            </li>
          )
        )}
      </ul>
    </div>

    {/* PURPOSE */}
    <div>
      <h2 className="text-3xl font-semibold mb-6">Purpose</h2>

      <ul className="space-y-4 text-gray-700 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        {[
          "Ongoing initiatives",
          "Newly available resources",
          "Evolving focus areas of the Council",
        ].map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="font-semibold text-gray-900">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>

    </div>
  );
};

export default NewsAnnouncements;

