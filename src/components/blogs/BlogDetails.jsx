// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogDetails = {
  1: {
    title: 'Python',
    content: 'ython Programming is a content hub featuring multi-level tutorials in varying difficulty levels across several popular Python use-cases, including Machine Learning, Web Dev, Bots & AI, Finance, and Quantum Computing. The publishing strategy is tutorial-centric, but after you start a tutorial, you’ll find the technical subject to be excellently presented with ample detail and supporting evidence. The writing is not poor, just not great. Some necessary links are present, other times they are not where you’d expect to find them.',
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