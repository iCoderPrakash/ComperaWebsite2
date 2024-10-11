import React, { useEffect, useRef } from "react";
import hero from "../images/hero.png";
import about from "../images/about.jpg";
import { NavLink } from "react-router-dom";
import Testimonials from "./Testimonals";
import Whyneed from "../components/comperaneed/Whyneed";
import CardComponent from "../pages/CardComponent";
import Services from "./Services";
import img2 from "../images/15051.jpg";
import img1 from "../images/15050.jpg";
import img3 from "../images/15052.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroSection = useRef(null);
  const aboutSection = useRef(null);

  useEffect(() => {
    // Hero Section animation
    gsap.fromTo(
      heroSection.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // About Section ScrollTrigger animation
    gsap.fromTo(
      aboutSection.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSection.current,
          start: "top 80%", // When the top of the section hits 80% of the viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Control animation behavior
        },
      }
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        id="main"
        className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br h-screen from-gray-700 to-black px-6 py-12"
        ref={heroSection}
      >
          <h1 className="text-3xl font-bold text-white text-center">Compera Institute</h1>
        <div className="text-white lg:w-1/2 space-y-4">
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

        <div className="lg:w-1/2 lg:mt-0 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>

      <Services />

      {/* About Section */}
      <section className="bg-gray-100 py-12" ref={aboutSection}>
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3">
            <p className="text-sm font-medium text-red-600 mb-4">— About Me</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, nice to meet you!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              I help individuals to become their best version.
            </h2>
            <p className="text-gray-600 mb-4 mr-4">
              <span className="mb-4 block">
                {" "}
                Alok Bhatt is an engineering graduate in computer science with
                over a decade of experience in teaching a variety of emerging
                technologies. His expertise includes Java, Spring, Hibernate,
                JavaScript, Node.js, Python-based frameworks like Django, as
                well as Big Data technologies such as Hadoop, Hive, and Pig.
                Alok is the cofounder of COMPERA COMPUTER EDUCATIONAL SOCIETY,
                an institution dedicated to providing high-quality education in
                the field of computer science.
              </span>{" "}
              Additionally, Alok is the cofounder of M24 TechSpace Private
              Limited, a company that specializes in fintech operations,
              including the development of web and mobile applications. His work
              has significantly contributed to education and technology sectors,
              particularly in emerging and innovative fields.
            </p>
            <p className="signature text-red-900 font-bold mt-6">Alok Bhatt</p>
          </div>
          <div className="lg:w-2/3 flex justify-center lg:justify-end">
            <img
              src={about}
              alt="Alok Bhatt"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-col md:flex-row mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-lg text-gray-600 uppercase tracking-widest">
                Change Your Life
              </h1>
              <h2 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Start Your Journey With Compera Institute
              </h2>
            </div>
            <NavLink to="/courses">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition duration-300">
                View All Courses
              </button>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Ref is passed to each card for scroll-triggered animations */}
            <div className="p-4 border border-gray-200 shadow-md">
              <img
                src={img1}
                alt="Card 1"
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Django </h2>
              <p>
                Welcome to the Compera Django Blog, where we deliver tutorials,
                tips, and insights on Python programming. From beginner basics
                to advanced concepts, we cover it all to help you level up your
                skills. Stay tuned for the latest updates and practical coding
                advice! .
              </p>
            </div>
            <div className="p-4 border border-gray-200 shadow-md">
              <img
                src={img2}
                alt="Card 2"
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">JAVA </h2>
              <p>
                Welcome to the Compera Java Blog, your go-to source for expert
                tips, tutorials, and insights on Java programming. Whether
                you're a beginner or a pro, we cover everything from core
                concepts to advanced techniques. Stay updated and enhance your
                coding skills with our latest posts. .
              </p>
            </div>
            <div className="p-4 border border-gray-200 shadow-md">
              <img
                src={img3}
                alt="Card 3"
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">HTML</h2>
              <p>
                Welcome to the Compera HTML Blog, your go-to resource for
                mastering the fundamentals of web development. Discover
                tutorials, tips, and best practices to create clean, responsive
                websites using HTML. Stay updated with the latest trends and
                techniques in front-end design! .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Whyneed />
      <CardComponent />
    </>
  );
};

export default Home;
