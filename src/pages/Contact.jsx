import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Contact information */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Get in touch with us
          </h2>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.5 5.75C2.5 4.23122 3.73122 3 5.25 3H18.75C20.2688 3 21.5 4.23122 21.5 5.75V18.25C21.5 19.7688 20.2688 21 18.75 21H5.25C3.73122 21 2.5 19.7688 2.5 18.25V5.75ZM5.25 5C4.83579 5 4.5 5.33579 4.5 5.75V18.25C4.5 18.6642 4.83579 19 5.25 19H18.75C19.1642 19 19.5 18.6642 19.5 18.25V5.75C19.5 5.33579 19.1642 5 18.75 5H5.25ZM6.75 7.5H17.25C17.6642 7.5 18 7.83579 18 8.25C18 8.66421 17.6642 9 17.25 9H6.75C6.33579 9 6 8.66421 6 8.25C6 7.83579 6.33579 7.5 6.75 7.5Z" />
            </svg>
            <a
              href="mailto:comperainstitute@gmail.com"
              className="text-lg text-gray-700"
            >
              {" "}
              comperainstitute@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.66 15.66 0 006.79 6.79l2.12-2.12a1.25 1.25 0 011.34-.27c1.2.47 2.52.73 3.9.73.69 0 1.25.56 1.25 1.25V20c0 .69-.56 1.25-1.25 1.25C10.43 21.25 2.75 13.57 2.75 4.25c0-.69.56-1.25 1.25-1.25h3.25c.69 0 1.25.56 1.25 1.25 0 1.38.26 2.7.73 3.9.18.43.08.94-.27 1.34l-2.12 2.12z" />
            </svg>
            <a href="tel:+91-8884957389" className="text-lg text-gray-700">
              +91-8884957389
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.25C8.272 2.25 5.25 5.272 5.25 9c0 5.625 6.217 11.107 6.435 11.303.176.157.404.257.65.257s.474-.1.65-.257c.218-.196 6.435-5.678 6.435-11.303 0-3.728-3.022-6.75-6.75-6.75zm0 8.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" />
            </svg>
            <p className="text-lg text-gray-700">
              MM95 Surya Vihar Colony Near Ram Leela Maidan Gorakhnath
              Gorakhpur-273015
            </p>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email (privacy policy)<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone no<span className="text-red-600">*</span>
              </label>
              <input
                type="phone"
                id="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Which course Do you want to enroll in?"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
