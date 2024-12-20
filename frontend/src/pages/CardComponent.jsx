import React from "react";
import { NavLink } from "react-router-dom";

const CardComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-96 bg-white p-4">
      <div className="max-w-lg w-full bg-gradient-to-br from-gray-700 to-black  text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Are you ready to learn with <span className="text-red-600">Compera</span>
        </h2>
        <p className="text-sm md:text-base mb-6">
        At COMPERA, learning doesn’t stop when the course ends. We provide continuous support to our students, offering opportunities for advanced learning, certifications, and workshops to ensure they stay ahead in their career paths.
        </p>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full" >
       <NavLink to="/contact"> Contact us</NavLink>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
