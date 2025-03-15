import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";



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
      ]
    },
  ]);

  export default router