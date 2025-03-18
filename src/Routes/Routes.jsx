import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import July from "../Pages/July/July";
import ArchiveMain from "../Pages/ArchiveMain/ArchiveMain";



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
            path: "about-us/about-sorob",
            element: <About/>,
        },
        {
            path : "projects/july-uprising",
            element : <July/>
        }
      ]
    },
  ]);

  export default router