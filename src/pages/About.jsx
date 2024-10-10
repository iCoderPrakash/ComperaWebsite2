import React from "react";
import abouts from "../images/abouts.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section Image */}
      <div className="relative">
        <img
          src={abouts}
          alt="Team Group"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-2">ABOUT US</h1>
          <p className="text-white">
            We Provide Our Best Services for Your Education
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold italic max-w-2xl mx-auto">
          “It's not wise to violate rules until you know how to observe them.”
        </h2>
      </div>

      {/* About Content Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in 2017,{" "}
              <strong>COMPERA COMPUTER EDUCATIONAL SOCIETY</strong> is dedicated
              to offering high-quality education in the dynamic field of
              computer science and technology. With a vision to empower learners
              with industry-relevant skills, we provide a wide array of courses
              ranging from foundational programming in C, Data Structures, Java,
              PHP, and Python, to advanced technologies such as MERN Stack,
              Advanced Java, Web Designing using Tailwind CSS, Vue.js, and
              Django Web Development.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our curriculum is designed to cater to the needs of both beginners
              and professionals, ensuring hands-on experience and practical
              knowledge that align with the demands of the ever-evolving tech
              landscape. Additionally, we specialize in preparing students for
              prestigious certifications like NIELIT's 'O' and 'A' levels,
              setting them up for success in a competitive IT industry.
            </p>
          </div>
          {/* Right Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The society is the brainchild of Alok Bhatt, a seasoned expert
              with over 10 years of experience in the field of computer
              education, Rajeshvar Mishra, whose exceptional managerial and
              technical skills have been instrumental in shaping the
              organization’s growth and success,Achyut Kalia, who also brings a
              decade of experience in the field of computer education.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At COMPERA, we believe in nurturing the future of technology by
              bridging the gap between academic learning and real-world
              applications, equipping our students with the skills they need to
              excel in the IT industry.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold italic max-w-2xl mx-auto">
          “Collaboration with M24 TechSpace Private Limited”
        </h2>
      </div>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At COMPERA COMPUTER EDUCATIONAL SOCIETY, we are excited to
              announce our collaboration with M24 TechSpace Private Limited, a
              dynamic IT company specializing in the development of innovative
              web and mobile applications. This partnership is aimed at bridging
              the gap between education and industry by providing our students
              with real-world exposure to the tech ecosystem.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              <span className="block mb-5 text-red-900">
                Through this collaboration, COMPERA students will benefit from:
              </span>
              <span>
                Workshops & Seminars: Attend specialized workshops, seminars,
                and webinars led by M24 TechSpace, covering trending topics such
                as app development, UX/UI design, and more.
              </span>
            </p>
          </div>
          {/* Right Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Together with M24 TechSpace, we aim to provide students with the
              skills, knowledge, and industry connections to succeed in the
              competitive IT landscape.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              <span className="block mb-2">Industry-Relevant Projects: Gain hands-on experience by working on
              live projects from M24 TechSpace, focusing on web and mobile app
              development.</span> <span className="block mb-2">Mentorship from Experts: Access to expert guidance
              from M24 TechSpace professionals, ensuring students learn industry
              best practices and latest technologies. </span> <span className="block mb-2">Internship & Placement
              Opportunities: Exclusive internship and job opportunities for
              top-performing students to kickstart their careers in the IT
              industry.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with Icons */}
      <div className="py-8 bg-gray-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-semibold mb-2">Storytelling</div>
            <p className="text-sm text-gray-600">
              We focus on delivering timeless narratives.
            </p>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-2">Design + Craft</div>
            <p className="text-sm text-gray-600">
              Beautiful design is fundamental to our process.
            </p>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-2">Technology</div>
            <p className="text-sm text-gray-600">
              We push the boundaries of creative technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
