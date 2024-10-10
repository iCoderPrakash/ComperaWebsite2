import React from 'react';

import img1 from '../images/15050.jpg';
import img2 from '../images/15051.jpg';
import img3 from '../images/15052.jpg';
import img4 from '../images/15054.jpeg';
import img5 from '../images/15054.jpg';
import img6 from '../images/15055.jpg';
import img7 from '../images/15056.jpg';
import img8 from '../images/15060.jpg';
import img9 from '../images/15063.jpg';
import img10 from '../images/15064.jpg';

// Reusable CourseCard Component
const CourseCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-48">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Course = () => {
  // Array of course data to map through
  const courses = [
    { image: img1, title: 'DJANGO', description: 'Welcome to the Compera Django Blog, where we deliver tutorials, tips, and insights on Python programming. From beginner basics to advanced concepts, we cover it all to help you level up your skills. Stay tuned for the latest updates and practical coding advice!' },
    { image: img4, title: 'CSS', description: 'Welcome to the Compera CSS Blog, your guide to creating visually stunning and responsive web designs. Explore tutorials, tips, and best practices to enhance your styling skills with CSS. Stay updated with the latest design trends and techniques in front-end development!' },
    { image: img3, title: 'HTML', description: 'Welcome to the Compera HTML Blog, your go-to resource for mastering the fundamentals of web development. Discover tutorials, tips, and best practices to create clean, responsive websites using HTML. Stay updated with the latest trends and techniques in front-end design!' },
    { image: img6, title: 'MERN', description: 'Welcome to the Compera MERN Blog, your hub for mastering the MERN stack—MongoDB, Express, React, and Node.js. Explore expert tips, tutorials, and best practices to build full-stack JavaScript applications. Stay updated with the latest in MERN development and elevate your coding skills!' },
    { image: img5, title: 'Javascript', description: 'Welcome to the Compera JavaScript Blog, your source for mastering the language of the web. Explore expert tutorials, tips, and best practices to build dynamic, interactive websites with JavaScript. Stay updated with the latest trends and advancements in JavaScript development!' },
    { image: img7, title: 'Excel', description: 'Welcome to the Compera Excel Blog, your source for mastering the language of the web. Explore expert tutorials, tips, and best practices to build dynamic, interactive websites with JavaScript. Stay updated with the latest trends and advancements in JavaScript development!' },
    { image: img8, title: 'C', description: 'Welcome to the Compera C Blog, your source for mastering the language of the web. Explore expert tutorials, tips, and best practices to build dynamic, interactive websites with JavaScript. Stay updated with the latest trends and advancements in JavaScript development!' },
    { image: img9, title: 'Data Analytics', description: 'Welcome to the Compera Data Analytics Blog, where we provide insights, tutorials, and tips on data-driven decision-making. From beginner guides to advanced analytics techniques, we cover everything to help you harness the power of data. Stay updated with the latest trends and tools in the analytics world!.' },
    { image: img10, title: 'Python', description: 'Welcome to the Compera Python Blog, where we deliver tutorials, tips, and insights on Python programming. From beginner basics to advanced concepts, we cover it all to help you level up your skills. Stay tuned for the latest updates and practical coding advice!' },
    { image: img2, title: 'JAVA', description: 'Welcome to the Compera Java Blog, your go-to source for expert tips, tutorials, and insights on Java programming. Whether youre a beginner or a pro, we cover everything from core concepts to advanced techniques. Stay updated and enhance your coding skills with our latest posts.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
  
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-900">Courses</h1>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      
      <div className="mt-12 px-4">
        <h2 className="text-4xl font-bold text-red-900 text-center mb-8">Featured Courses</h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
