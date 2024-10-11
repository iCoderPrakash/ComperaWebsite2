import React from "react";
import {
  FaFacebookF,
  FaTimes,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Compera Institute
            </h2>
            <p className="mb-6">
              COMPERA COMPUTER EDUCATIONAL SOCIETY Empowering the next
              generation of tech professionals since 2017
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-red-600 p-2 rounded-full hover:bg-yellow-400 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="bg-red-600 p-2 rounded-full hover:bg-yellow-400 transition-colors"
              >
                <FaTimes size={20} />
              </a>
              <a
                href="#"
                className="bg-yellow-400 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="mb-8 ml-12 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>1. Comprehensive Programming Courses</li>
              <li>2. Advanced Web Development & Full Stack Training</li>
              <li>3. Data Analytics & Visualization</li>
              <li>4. NIELIT 'O' and 'A' Level Certification Courses</li>
              <li>5. Career Guidance & Support</li>
            </ul>
          </div>

          <div className="mb-8 ml-14 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-red-600" />
                <span>+91-8884957389</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-red-600" />
                <span> comperainstitute@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-600" />
                <span>
                  MM95 Surya Vihar Colony Near Ram Leela Maidan Gorakhnath
                  Gorakhpur-273015
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-green-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-red-400">
          <p>
            © 2024 COMPERA COMPUTER EDUCATIONAL SOCIETY. All Rights Reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Designed by M24 TechSpace Private Limited
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
