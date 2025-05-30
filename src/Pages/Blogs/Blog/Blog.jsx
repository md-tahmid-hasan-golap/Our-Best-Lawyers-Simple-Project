import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);
  const { question, answer } = blog;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold text-green-700">
          {question}
        </div>
        <div className="collapse-content text-sm text-lime-600">{answer}</div>
      </div>
    </div>
  );
};

export default Blog;
