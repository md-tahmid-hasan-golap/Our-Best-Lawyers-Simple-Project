import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="space-y-2 text-center">
      {data.map((blog) => (
        <Blog key={blog.question_id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
