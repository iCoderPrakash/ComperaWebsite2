import React from 'react';

const About = () => {


  return (
    <div className="bg-cream min-h-screen flex flex-col justify-center items-center py-16 px-6 md:px-12">
  
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-green-900">About us</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-4xl text-left mx-auto">
      Established in 2017, COMPERA COMPUTER EDUCATIONAL SOCIETY is dedicated to offering high-quality education in the dynamic field of computer science and technology. With a vision to empower learners with industry-relevant skills, we provide a wide array of courses ranging from foundational programming in C, Data Structures, Java, PHP, and Python, to advanced technologies such as MERN Stack, Advanced Java, Web Designing using Tailwind CSS, Vue.js, and Django Web Development.

Our curriculum is designed to cater to the needs of both beginners and professionals, ensuring hands-on experience and practical knowledge that align with the demands of the ever-evolving tech landscape. Additionally, we specialize in preparing students for prestigious certifications like NIELIT's 'O' and 'A' levels, setting them up for success in a competitive IT industry.

The society is the brainchild of Alok Bhatt, a seasoned expert with over 10 years of experience in the field of computer education,  Rajeshvar Mishra, whose exceptional managerial and technical skills have been instrumental in shaping the organization’s growth and success,Achyut Kalia, who also brings a decade of experience in the field of computer education.

At COMPERA, we believe in nurturing the future of technology by bridging the gap between academic learning and real-world applications, equipping our students with the skills they need to excel in the IT industry.

      </p>
    </div>

    
    <div className="flex flex-col md:flex-row items-center gap-10">
    
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold text-blue-800">The journey to relaxation.</h2>
        <p className="text-gray-600 mt-4">
          Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.
        </p>
      </div>

  
      <div className="md:w-1/2">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Relaxing in a hammock" 
          className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96"
        />
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row items-center gap-10 mt-12">

    <div className="md:w-1/2">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Relaxing in a hammock" 
          className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96"
        />
      </div>
    
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold text-blue-800">The journey to relaxation.</h2>
        <p className="text-gray-600 mt-4">
          Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.
        </p>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row items-center gap-10 mt-12">



  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold text-blue-800">The journey to relaxation.</h2>
    <p className="text-gray-600 mt-4">
      Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.
    </p>
  </div>
  <div className="md:w-1/2">
    <img 
      src="https://via.placeholder.com/500" 
      alt="Relaxing in a hammock" 
      className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96"
    />
  </div>
  
</div>
    
  </div>
  );
};

export default About;
