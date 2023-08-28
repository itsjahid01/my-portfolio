import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Blog from "../pages/blog/Blog";
import Project from "../pages/project/Project";
import Skill from "../pages/skill/Skill";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
      {
        path: "/skills",
        element: <Skill></Skill>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
