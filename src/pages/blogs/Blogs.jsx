// BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ title, summary, blogId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{summary}</p>
        <Link to={`/blog/${blogId}`}>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
