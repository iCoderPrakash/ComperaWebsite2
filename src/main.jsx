import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Course from './components/Course.jsx';
import BlogList from '../src/components/blogs/BlogList.jsx';
import BlogDetails from '../src/components/blogs/BlogDetails.jsx';
import Services from '../src/components/Service/Services.jsx';
import NeedCompera from './components/comperaneed/NeedCompera.jsx';

const router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/about' element={<About/>}/>
    <Route path ='/courses' element={<Course/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path ='/contact' element={<Contact/>}/>
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:blogId" element={<BlogDetails />} />
    <Route path='/needme' element={<NeedCompera/>}/>
    {/* <Route path ='/admin-dashboard' element={<Admin/>}/> */}
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
