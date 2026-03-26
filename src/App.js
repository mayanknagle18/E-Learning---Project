import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/styles/main.scss";  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home"; 
import Blog from "./components/Blog";
import Membership from "./components/Membership";
import Auth from "./auth/Auth"; 
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Checkout from "./components/Checkout";
import BlogDetail from "./components/BlogDetail";
import CourseCalendarCreate from "./components/CourseCalendarCreate";
import Search from "./components/Search";
import LiteratureCourse from "./components/LiteratureCourse";
import ForgotPassword from "./auth/ForgotPassword";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/membership" element={<Membership />} /> 
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/course-detail" element={<CourseDetail />} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/literature-course" element={<LiteratureCourse />} />
          <Route path="/course-calendar-create" element={<PrivateRoute><CourseCalendarCreate /></PrivateRoute>} />
        </Route> 
        <Route path="/login" element={<PublicRoute><Auth /></PublicRoute>} /> 
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;