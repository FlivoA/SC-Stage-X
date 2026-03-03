import React from "react";


interface NewsProps { message?: string }

const News: React.FC<NewsProps> = ({ message = "Latest News & Announcements will be published here." }) => (
  <div className="p-6 text-lg font-semibold">{message}</div>
);

export default News;

