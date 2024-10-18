import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Course from "./pages/Course.jsx";
import BlogList from "../src/pages/blogs/BlogList.jsx";
import BlogDetails from "../src/pages/blogs/BlogDetails.jsx";
import NeedCompera from "./components/comperaneed/NeedCompera.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:blogId" element={<BlogDetails />} />
      <Route path="/needme" element={<NeedCompera />} />
      {/* <Route path ='/admin-dashboard' element={<Admin/>}/> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
