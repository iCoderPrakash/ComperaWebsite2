import React from "react";

const NeedCompera = () => {
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
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-20">
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
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">04</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Government-Recognized Certifications
          </h4>
          <p className="text-gray-600">
            Our NIELIT ‘O’ and ‘A’ Level certification programs are highly
            respected in the IT industry, enhancing your career prospects with
            government-recognized credentials.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">05</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Flexible Learning Options
          </h4>
          <p className="text-gray-600">
            We offer flexible learning schedules, allowing students to balance
            their education with work or personal commitments. Our hybrid
            learning model includes both classroom and online options to suit
            various learning preferences.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">06</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Career Support & Placement Assistance
          </h4>
          <p className="text-gray-600">
            We provide career counseling, resume-building guidance, interview
            preparation, and placement assistance to help students transition
            seamlessly from learning to landing their first job
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">07</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Cutting-Edge Technologies
          </h4>
          <p className="text-gray-600">
            We prioritize project-based learning to help students apply their
            knowledge in real-world scenarios. Each course is designed with
            practical projects and assignments that mirror actual industry
            challenges, giving students a competitive edge.Stay ahead of the
            curve by mastering the latest technologies, including MERN Stack,
            Vue.js, Tailwind CSS, and Data Analytics. Our courses are designed
            to align with industry demand and prepare you for future trends.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">08</h3>
          <h4 className="text-2xl font-semibold mb-4">Affordable Education</h4>
          <p className="text-gray-600">
            We believe that quality education should be accessible to everyone.
            Our courses are competitively priced, offering excellent value for
            money without compromising on quality.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-red-600 font-bold text-lg mb-2">09</h3>
          <h4 className="text-2xl font-semibold mb-4">
            Networking Opportunities
          </h4>
          <p className="text-gray-600">
            Joining COMPERA means becoming part of a growing community of tech
            enthusiasts, professionals, and mentors. Engage with peers and
            industry experts to build valuable connections for your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedCompera;
