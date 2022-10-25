import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
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
]);
