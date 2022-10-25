import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import CheckOut from "../Components/Checkout/CheckOut";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Coursesfix from "../Layout/Coursesfix";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/coursecategories"),
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <Coursesfix></Coursesfix>,
    children: [
      {
        path: "coursesdetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coursecategories/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coursedetails/${params.id}`),
      },
    ],
  },
]);
