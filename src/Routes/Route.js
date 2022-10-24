import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
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
    ],
  },
]);
