import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import July from "../Pages/July/July";
// import ArchiveMain from "../Pages/ArchiveMain/ArchiveMain";
import ViolenceAtCampus from "../Pages/ViolenceAtCampus/ViolenceAtCampus";
import Seminear from "../Pages/Seminear/Seminear";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path : "/projects/july-uprising",
            element : <July/>
        },
        {
            path : "projects/violence-at-campus",
            element : <ViolenceAtCampus/>
        },
        {
          path : "/event",
          element : <Seminear/>
        }
      ]
    },
  ]);

  export default router