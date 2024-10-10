import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Learning at COMPERA has been a life-changing experience. The courses are well-structured, and the instructors are incredibly supportive. The practical, hands-on learning approach made it easy for me to grasp complex concepts. I now feel confident about my career in web development. Thank you, COMPERA!"
,
    author: "Sumant Kumar",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    text: "COMPERA COMPUTER EDUCATIONAL SOCIETY has played a pivotal role in shaping my career. I came to the institute with a basic understanding of coding, but I was looking for a more structured way to learn and grow. From the moment I enrolled, I was impressed by the level of detail and organization in the curriculum. The instructors were highly knowledgeable and approachable, always willing to spend extra time helping us understand complex concepts. One of the things that stood out to me was the institute’s commitment to hands-on learning.",
    author: "Purnima",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    text: "My journey at COMPERA COMPUTER EDUCATIONAL SOCIETY has been nothing short of extraordinary. When I first enrolled, I had limited knowledge of web development and programming. However, the comprehensive curriculum and the guidance from industry-experienced instructors helped me build a solid foundation. I particularly enjoyed the MERN Stack course",
    author: "Prakash Dubey",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    text: "Enrolling at COMPERA was the best decision I made for my career. The curriculum is industry-oriented, and the instructors are always there to help. The practical projects, especially in Web Development, made me job-ready in no time!",
    author: "Abhishek Singh",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    text: "I was a complete beginner in coding before joining COMPERA, but the instructors made learning easy and engaging. The course material is comprehensive, and the support from teachers is incredible. I’m now confident in my ability to build full-stack applications.",
    author: "Isha tripathi",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    text:"The focus on real-world applications at COMPERA is what sets it apart from other institutes. I learned by working on live projects, which not only boosted my confidence but also helped me land an internship at a reputed IT company."
,
    author: "Jiyual Haq",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold md:text-center text-gray-900 mb-8">
          Short Heading for <span className='text-red-800'> Testimonials</span> Section Will be here
        </h2>
        <div className="relative overflow-hidden md:w-3/4 w-full">
          
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-8"
              >
                <div className="mb-4 text-4xl text-purple-600">“</div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="text-gray-800 font-bold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
