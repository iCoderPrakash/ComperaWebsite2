// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Get In Touch</h1>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Dexter Morgan"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="dextermorgan@shortlife.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="41849595265"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Hi, do you have a moment to talk about..."
                  />
                </div>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>

       
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-4">
                <strong>Address:</strong>MM95 Surya Vihar Colony Near Ram Leela Maidan Gorakhnath Gorakhpur-273015
              </p>
              <p className="mb-4">
                <strong>Phone:</strong>+91-8884957389
              </p>
              <p className="mb-4">
                <strong>Email:</strong> comperainstitute@gmail.com
              </p>
              <div className="flex space-x-4">
              
                <a href="#" className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.48 0-9.96 4.48-9.96 9.96 0 4.42 3.54 8.08 8.08 8.96v-6.34h-2.42v-2.62h2.42v-2c0-2.36 1.44-3.66 3.56-3.66 1.02 0 1.9.08 2.16.11v2.5h-1.48c-1.16 0-1.38.55-1.38 1.36v1.79h2.76l-.36 2.62h-2.4v6.34c4.54-.88 8.08-4.54 8.08-8.96 0-5.48-4.48-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.994 4.55c-.881.392-1.83.654-2.828.773 1.017-.61 1.799-1.575 2.165-2.725-.951.565-2.005.977-3.127 1.197-.898-.957-2.178-1.555-3.594-1.555-2.717 0-4.922 2.205-4.922 4.922 0 .386.043.761.127 1.122-4.09-.205-7.719-2.165-10.148-5.145-.424.73-.668 1.577-.668 2.478 0 1.71.87 3.22 2.188 4.105-.809-.026-1.569-.248-2.235-.617v.062c0 2.385 1.697 4.374 3.946 4.826-.414.112-.852.172-1.303.172-.318 0-.627-.03-.929-.086.628 1.963 2.448 3.393 4.604 3.431-1.688 1.323-3.816 2.113-6.126 2.113-.398 0-.79-.023-1.177-.069 2.182 1.398 4.768 2.215 7.548 2.215 9.057 0 14.004-7.507 14.004-14.004 0-.213-.005-.426-.014-.637.961-.694 1.797-1.56 2.457-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.2 0h-14.4c-2.64 0-4.8 2.16-4.8 4.8v14.4c0 2.64 2.16 4.8 4.8 4.8h14.4c2.64 0 4.8-2.16 4.8-4.8v-14.4c0-2.64-2.16-4.8-4.8-4.8zm1.2 17.28c0 .864-.336 1.68-1.008 2.352-.672.672-1.488 1.008-2.352 1.008h-10.08c-.864 0-1.68-.336-2.352-1.008-.672-.672-1.008-1.488-1.008-2.352v-10.08c0-.864.336-1.68 1.008-2.352.672-.672 1.488-1.008 2.352-1.008h10.08c.864 0 1.68.336 2.352 1.008.672.672 1.008 1.488 1.008 2.352v10.08zm-10.32-7.08h-2.4v8.88h2.4v-8.88zm-1.2-1.56c-.792 0-1.44-.648-1.44-1.44s.648-1.44 1.44-1.44 1.44.648 1.44 1.44-.648 1.44-1.44 1.44zm6.24 9.84h-2.4v-4.44c0-1.08-.72-1.8-1.8-1.8-1.08 0-1.8.72-1.8 1.8v4.44h-2.4v-8.88h2.4v1.32h.048c.432-.624 1.152-.96 1.872-.96 1.488 0 2.28.96 2.28 2.64v5.88z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
