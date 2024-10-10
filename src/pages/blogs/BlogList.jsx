// BlogList.js
import React from 'react';
import BlogCard from './Blogs';

const blogs = [
  { id: 1, title: 'The Best Python Blogs', summary: 'Python is one of the most popular programming languages in use today. It’s become a favorite for both experienced developers and those just starting out, ....' },
  { id: 2, title: 'importace of clean code', summary: 'This is a short summary of coding ...' },
];

const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard key={blog.id} title={blog.title} summary={blog.summary} blogId={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
