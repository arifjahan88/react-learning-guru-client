import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Components/404Route/PageNotFound";
import Blogs from "../Components/Blogs/Blogs";
import CheckOut from "../Components/Checkout/CheckOut";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import TearmsandConditions from "../Components/TearmsandConditions/TearmsandConditions";
import Coursesfix from "../Layout/Coursesfix";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
        loader: () =>
          fetch(
            "https://react-programming-courses-server.vercel.app/coursecategories"
          ),
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
      {
        path: "tearms",
        element: <TearmsandConditions></TearmsandConditions>,
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
          fetch(
            `https://react-programming-courses-server.vercel.app/coursecategories/${params.id}`
          ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://react-programming-courses-server.vercel.app/coursedetails/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
