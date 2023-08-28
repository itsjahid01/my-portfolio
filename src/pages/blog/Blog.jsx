import BlogCard from "../../component/BlogCard";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="bg-[#20303F]">
      <div className="container mx-auto ">
        <h2 className="text-4xl text-yellow-600 font-bold text-center py-10">
          My Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-10">
          {blogs &&
            blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog}></BlogCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
