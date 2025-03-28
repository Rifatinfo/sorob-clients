import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import July from "../Pages/July/July";
import ViolenceAtCampus from "../Pages/ViolenceAtCampus/ViolenceAtCampus";
import Seminear from "../Pages/Seminear/Seminear";
import News from "../Pages/News/News";
import JulyVideoDetails from "../Components/Video/JulyVideoDetails";
import MartyrDetails from "../Pages/July/Martyr/MartyrDetails";
import InjuredDetails from "../Pages/July/Injured/InjuredDetails";
import RevolutionaryDetails from "../Pages/July/Revolutionary/RevolutionaryDetails";
import MartyrProfileDetails from "../Pages/July/Martyr/MartyrProfileDetails";
import StoriesDetails from "../Pages/ArchiveMain/storiesDetails";
import AllFactFinding from "../Components/BlogSlider/AllFactFinding";



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
          path : "/projects/july-uprising/martyr",
          element : <MartyrDetails/>
        },
        {
          path : "/projects/july-uprising/injured",
          element : <InjuredDetails/>
        },
        {
          path : "/projects/july-uprising/martyr/:id",
          element :<MartyrProfileDetails/>,
          loader : ({params}) => fetch(`https://sorob-server.onrender.com/projects/july-uprising/martyr/${params.id}`)
        },
        {
          path : "/projects/july-uprising/projects/july-uprising/revolutionary",
          element : <RevolutionaryDetails/>
        },
        {
            path : "/projects/july-uprising/videos/:id",
            element : <JulyVideoDetails/>,
            loader : ({params}) => fetch(`https://sorob-server.onrender.com/projects/july-uprising/videos/${params.id}`)
        },
        {
          path : "/projects/july-uprising/stories/:id",
          element : <StoriesDetails/>,
          loader : ({params}) => fetch(`https://sorob-server.onrender.com/projects/july-uprising/stories/${params.id}`)
        },
        {
            path : "projects/violence-at-campus",
            element : <ViolenceAtCampus/>
        },
        {
          path : "/Event",
          element : <Seminear/>
        },
        {
          path : "/news",
          element : <News/>
        },
        {
          path : "/projects/july-uprising/all-fact-finding",
          element : <AllFactFinding/>
        }
      ]
    },
  ]);

  export default router