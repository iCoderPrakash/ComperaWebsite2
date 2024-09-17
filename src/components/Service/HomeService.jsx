import React from "react";
import { FaBookOpen, FaChartLine, FaSmile, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="icon text-4xl text-red-500">{icon}</div>
      <h3 className="title text-xl font-semibold text-gray-800">{title}</h3>
      <p className="description text-gray-600">{description}</p>
    </div>
  );
};

const HomeServices = () => {
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
            title="Decade-Long Experience"
            description="More than two-decade old company focusing solely on Student employability training."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Proven Track Record"
            description="Trained over 25,000 students and with more than 5000 outgoing trainees per year in Bangalore."
          />
          <ServiceCard
            icon={<FaSmile />}
            title="High Student Satisfaction"
            description="99% satisfaction amongst students, who attended our programs. And over 90 percent of students join the courses here through the recommendation of alumni."
          />
          <ServiceCard
            icon={<FaUsers />}
            title="High Placement Rate"
            description="Around 95 per cent of the total students have got placement in leading corporate/ MNCs pan India and abroad."
          />
          <ServiceCard
            icon={<FaSmile />}
            title="High Student Satisfaction"
            description="99% satisfaction amongst students, who attended our programs. And over 90 percent of students join the courses here through the recommendation of alumni."
          />
          <ServiceCard
            icon={<FaUsers />}
            title="High Placement Rate"
            description="Around 95 per cent of the total students have got placement in leading corporate/ MNCs pan India and abroad."
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-white w-fit bg-gradient-to-br from-gray-700 to-black py-3 px-5 rounded-lg transition-transform duration-300 hover:scale-110">
          <NavLink to='/service'>  Read more</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
