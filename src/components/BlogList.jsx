// BlogList.js
import React from 'react';
import BlogCard from './Blogs';

const blogs = [
  { id: 1, title: 'The Best Python Blogs', summary: 'Python is one of the most popular programming languages in use today. It’s become a favorite for both experienced developers and those just starting out, ....' },
  { id: 2, title: 'Blog Title 2', summary: 'This is a short summary of blog 2...' },
  { id: 3, title: 'Blog Title 3', summary: 'This is a short summary of blog 3...' },
  { id: 4, title: 'Blog Title 4', summary: 'This is a short summary of blog 4...' },
  { id: 5, title: 'Blog Title 5', summary: 'This is a short summary of blog 5...' },
  { id: 6, title: 'Blog Title 6', summary: 'This is a short summary of blog 6...' },
  { id: 7, title: 'Blog Title 7', summary: 'This is a short summary of blog 7...' },
  { id: 8, title: 'Blog Title 8', summary: 'This is a short summary of blog 8...' },
  { id: 9, title: 'Blog Title 9', summary: 'This is a short summary of blog 9...' },
];

const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <BlogCard key={blog.id} title={blog.title} summary={blog.summary} blogId={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
