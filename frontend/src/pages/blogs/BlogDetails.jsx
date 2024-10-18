// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogDetails = {
  1: {
    title: 'Python: The Language That Powers the World of Programming',
    content: 'Python has taken the programming world by storm, establishing itself as one of the most popular languages globally. It is the language of choice for developers across diverse fields such as web development, data science, artificial intelligence, automation, and more. In this post, we’ll explore the reasons behind Python’s widespread popularity, its use cases, and how it has become essential in shaping modern technology Why Python?1. Simple and Readable SyntaxPython’s syntax is designed to be intuitive and readable, making it an excellent choice for both beginners and seasoned developers. The code structure closely resembles the English language, reducing the learning curve for new developers. For example, consider how Python handles a basic "Hello, World!" program compared to other languages:pythonCopy code# Python codeprint("Hello, World!")The simplicity of this one-liner is part of what makes Python so appealing. It reduces boilerplate code, allowing developers to focus on the logic rather than the syntax.2. VersatilityPython’s versatility is one of its strongest points. Whether youre building a simple script to automate tasks or a full-fledged machine learning model, Python has the tools to support your work.Web Development: Frameworks like Django and Flask make Python a powerful tool for building robust web applications. These frameworks follow the model-template-view (MTV) pattern, which simplifies web development by encouraging clean and maintainable code.Data Science & Machine Learning: Python’s vast array of libraries such as NumPy, Pandas, Matplotlib, and TensorFlow make it the go-to language for data scientists and machine learning engineers. Its ability to handle large datasets, visualize data, and create predictive models has revolutionized industries ranging from healthcare to finance.Automation & Scripting: With its built-in support for modules and easy integration with operating systems, Python is widely used for writing scripts that automate repetitive tasks. For example, using libraries like os, shutil, and glob, you can automate file handling, backups, and much more with just a few lines of code3. Thriving EcosystemPython has a rich ecosystem of libraries, frameworks, and tools. Its open-source nature means that new libraries are constantly being developed by the community, making it easier to implement even the most complex tasks. Some examples include:Requests for HTTP requestsBeautifulSoup for web scrapingPillow for image processingPyGame for building 2D gamesAdditionally, Python’s package manager, pip, makes it easy to install, update, and manage these libraries. As a result, developers can leverage powerful third-party tools without reinventing the wheel.Python in Action: Key Use Cases1. Web Development with DjangoDjango is a high-level web framework built with Python that encourages rapid development and clean, pragmatic design. It takes care of much of the hassle of web development, such as authentication, database handling, and URL routing, allowing developers to focus on building their app. Some popular websites built with Django include Instagram, Pinterest, and Disqus.2. Data Analysis with PandasPython’s Pandas library has transformed the way we handle and manipulate data. It provides powerful datastructures like DataFrames, which allow for efficient manipulation of tabular data. With Pandas, tasks like cleaning data, merging datasets, and performing statistical analysis become much more manageable'
  },
  2: {
    title: '1. The Importance of Clean Code: Why It Matters and How to Achieve It',
    content: 'Writing code isn’t just about making things work; it’s about writing code that is clean, maintainable, and scalable. Clean code is essential for several reasons: it improves readability, makes future modifications easier, and helps teams collaborate more effectively. Whether youre working on a personal project or as part of a larger development team, clean code can save hours of debugging and refactoring in the future.',
  },
  // Add more blogs here
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogDetails[blogId];

  return (
    <div className="container mx-auto p-6 w-4/5">
      {blog ? (
        <>
          <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
          <p className="text-lg text-gray-700">{blog.content}</p>
        </>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
