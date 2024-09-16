import React from 'react';

const About = () => {


  return (
    <div className="bg-cream min-h-screen flex flex-col justify-center items-center py-16 px-6 md:px-12">
  
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-900">Our Story</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
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
