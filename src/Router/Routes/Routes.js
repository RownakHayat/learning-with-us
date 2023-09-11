import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Pages/Home";
import Course from "../../components/Pages/Course";
import EnrollCourse from "../../components/Pages/EnrollCourse";
import CourseDetails from "../../components/Pages/CourseDetails";
import CheckOut from "../../components/Pages/CheckOut";
import PrivateRooute from "../../components/Pages/PrivateRooute";
import Registion from "../../components/Pages/Registion";
import Login from "../../components/Pages/Login";
import Blog from "../../components/Pages/Blog";
import ResetPassword from "../../components/Pages/ResetPassword";
import Error from "../../components/Pages/Error";

export const routes =  createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: "/course",
              element: <Course></Course>,
            },
            {
              path: "categories",
              element: <EnrollCourse></EnrollCourse>,
              // loader: ({ params }) =>
              //   fetch(`http://localhost:3001/course-categories/${params.id}`),
            },
      
            {
              path: "/coursedetails/:id",
              element: <CourseDetails></CourseDetails>,
              loader: ({ params }) =>
                fetch(`http://localhost:3001/coursedetails/${params.id}`),
            },
      
            {
              path: "/checkout/:id",
              element: (
                <PrivateRooute>
                  <CheckOut></CheckOut>
                </PrivateRooute>
              ),
              loader: ({ params }) =>
                fetch(`http://localhost:3001/checkout/${params.id}`),
            },
          ],
        },
      
        { path: "/register", element: <Registion></Registion> },
        { path: "/login", element: <Login></Login> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/resetpass", element: <ResetPassword></ResetPassword> },
        { path: "*", element: <Error></Error> },
      ]);