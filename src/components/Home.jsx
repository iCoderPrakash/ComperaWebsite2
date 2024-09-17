import React from "react";
import hero from "../images/hero.png";
import about from "../images/about.jpg";
import { NavLink } from "react-router-dom";
import Testimonials from "./Testimonals";
import Whyneed from "./comperaneed/Whyneed";
import CardComponent from "./CardComponent";
import HomeServices from "./Service/HomeService";

const Home = () => {
  return (
    <>
      <div
        id="main"
        className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br h-screen from-gray-700 to-black px-6 py-12"
      >
        <div id="hero-section" className="text-white lg:w-1/2 space-y-4">
          <h3 className="text-xl font-medium">Welcome to Compera Institute</h3>
          <h1 className="text-4xl md:text-6xl font-bold">Learn Today,</h1>
          <h1 className="text-4xl md:text-6xl font-bold">Lead Tomorrow</h1>
          <p className="text-lg md:text-xl">
            Instructor-led Offline Training program includes Java Full Stack,
            MERN Stack, Python, O-level, A-level, and many more..
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-6 transition-colors duration-300">
            Explore More
          </button>
        </div>

        <div id="img" className="lg:w-1/2 lg:mt-0 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
      <HomeServices />
      <section className="About-section bg-gray-100 py-12">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-content mb-8 lg:mb-0 lg:w-2/3">
            <p className="about-me text-sm font-medium text-gray-600 mb-4">
              — About Me
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, nice to meet you!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              I help individuals to become their best version.
            </h2>
            <p className="text-gray-600 mb-4">
              I am glad that you have made it here to send a distress signal,
              and inform the Senate that all on board were killed. Dantooine.
              I'm not going to Alderaan. I really got to go.
            </p>
            <p className="text-gray-600 mb-4">
              But that to me. Send a distress signal, and inform the Senate that
              all on board were killed. Dantooine. They're on Dantooine. The
              plans you refer to will soon be back in our hands. Alderaan? I’m
              not going to Alderaan. I got to go home.
            </p>
            <p className="signature text-gray-900 font-bold mt-6">Alok Bhatt</p>
          </div>
          <div className="image-content lg:w-2/3 flex justify-center lg:justify-end">
            <img
              src={about}
              alt="Alok Bhatt"
              className="profile-image rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      <Testimonials/>
      <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:flex-row flex-col md:items-center items-start mb-12">
          <div>
            <h1 className="text-lg text-gray-600 uppercase">Change Your Life</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Start Your Journey of Happiness and Health Today!</h2>
          </div>
          <button className="text-white bg-red-600  px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
           <NavLink to ='/courses'> View All Courses</NavLink>
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Seek Health with Yoga Sadhana</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>

         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Healthy Eating for Healthy Life</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>

         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Control Your Brain with Pranayama</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Whyneed/>
    <CardComponent/>
    </>
  );
};

export default Home;
