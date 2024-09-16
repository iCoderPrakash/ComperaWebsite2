// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogDetails = {
  1: {
    title: 'Blog Title 1',
    content: 'This is the detailed content of blog 1...',
  },
  2: {
    title: 'Blog Title 2',
    content: 'This is the detailed content of blog 2...',
  },
  // Add more blogs here
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogDetails[blogId];

  return (
    <div className="container mx-auto p-6">
      {blog ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-gray-700">{blog.content}</p>
        </>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
