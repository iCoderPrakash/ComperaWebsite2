import React from "react";
import { NavLink } from "react-router-dom";

const whyneed = () => {
  return (
    <div className="w-full min-h-96 bg-gray-100 flex flex-col justify-center md:items-center gap-5 overflow-hidden">
      <h1 className="text-center text-3xl font-bold text-black pt-20">
        Why need to <span className="text-red-600">Choose Us</span>
      </h1>
      <p className="text-center px-5">
        At{" "}
        <span className="text-red-700">
          {" "}
          COMPERA COMPUTER EDUCATIONAL SOCIETY,
        </span>{" "}
        we believe in empowering students with the skills, knowledge, and
        hands-on experience necessary to thrive in the fast-paced world of
        technology. Here are the key benefits of joining us:
      </p>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-2">
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">01</h3>
          <h4 className="text-2xl font-semibold mb-4">
            {" "}
            Comprehensive Curriculum
          </h4>
          <p className="text-gray-600">
            Our diverse range of courses, from foundational programming
            languages like C and Python to advanced technologies such as MERN
            Stack, Django, and Data Analytics, ensure students gain a
            well-rounded understanding of the tech landscape.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">02</h3>
          <h4 className="text-2xl font-semibold mb-4"> Experienced Faculty</h4>
          <p className="text-gray-600">
            Learn from industry experts, including our founders, Alok Bhatt (10+
            years of experience) and Rajeshvar Mishra (technical and managerial
            expertise). Our instructors bring real-world knowledge to the
            classroom, ensuring that students stay updated with industry trends
            and best practices.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">03</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Practical, Hands-on Learning
          </h4>
          <p className="text-gray-600">
            We prioritize project-based learning to help students apply their
            knowledge in real-world scenarios. Each course is designed with
            practical projects and assignments that mirror actual industry
            challenges, giving students a competitive edge.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <button className="text-white w-fit bg-red-800 py-3 px-5 rounded-lg transition-transform duration-300 hover:scale-110">
          <NavLink to="/needme"> Read more</NavLink>
        </button>
      </div>
    </div>
  );
};

export default whyneed;
