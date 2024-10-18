import React from "react";
import { FaBookOpen, FaChartLine, FaSmile, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="icon text-4xl text-red-500">{icon}</div>
      <h3 className="title text-xl font-semibold text-red-800">{title}</h3>
      <p className="description text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div id="services" className="py-12 bg-gray-50">
        <div className="section-heading text-center mb-8">
          <h2 className=" relative service-title text-3xl font-bold text-red-900">
            Our Services
          </h2>
        </div>
        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <ServiceCard
            icon={<FaBookOpen />}
            title="1. Comprehensive Programming Courses
"
            description="We offer in-depth courses in various programming languages, including:C,Data Structures,Java,PHP,Python. These courses provide a strong foundation in coding and algorithm development, essential for any aspiring developer."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="2. Advanced Web Development & Full Stack Training"
            description="Our full-stack development programs include:

MERN Stack (MongoDB, Express.js, React, Node.js)
Advanced Java
Web Designing with Tailwind CSS and Vue.js
Django Web Development
These courses focus on building dynamic, modern web applications with real-world projects."
          />
          <ServiceCard
            icon={<FaSmile />}
            title="3. Data Analytics & Visualization"
            description="Gain insights into data with our specialized courses on data analysis and visualization techniques, preparing you for a data-driven future.
99% satisfaction amongst students, who attended our programs. And over 90 percent of students join the courses."
          />
          <ServiceCard
            icon={<FaUsers />}
            title="4. NIELIT 'O' and 'A' Level Certification Courses
"
            description="Our NIELIT certification courses offer structured learning for government-recognized qualifications.

'O' Level – Basic IT foundation course.
'A' Level – Advanced course for software development and IT management.
"
          />
          <ServiceCard
            icon={<FaSmile />}
            title="5. Hands-on Projects and Practical Experience
"
            description="At COMPERA, we emphasize practical, project-based learning. Each of our courses includes hands-on projects that help students apply theoretical knowledge to real-world scenarios."
          />
          <ServiceCard
            icon={<FaUsers />}
            title="6. Career Guidance & Support"
            description="We offer career counseling, interview preparation, and placement assistance to ensure our students are job-ready after completing their courses.

"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
