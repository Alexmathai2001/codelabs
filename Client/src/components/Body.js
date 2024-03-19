import React from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Domains from "./Domains";
import LatestProjectsPage from "./LatestProjectsPage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import ForgotPassword from "./ForgotPassword";
import Description from "./Description";
import DeveloperProfile from "./DeveloperProfile";
import Myprofile from "./Myprofile";
import EditProfile from "./EditProfile";
import AddProject from "./AddProject";
import Searchresults from "./Searchresults";
import MyProjects from "./MyProjects";
import EditProject from "./EditProject";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/domains",
      element: <Domains />,
    },
    {
      path: "/latestprojects",
      element: <LatestProjectsPage />
    },
    {
      path: "/signup",
      element: <SignUpPage />
    },
    {
      path : '/signin',
      element : <SignInPage />
    },
    {
      path : '/forgotpassword',
      element : <ForgotPassword />
    },
    {
      path : '/description/:id',
      element : <Description />
    },
    {
      path : '/profile',
      element : <DeveloperProfile />
    },
    {
      path : '/myprofile',
      element : <Myprofile />
    },
    {
      path : '/editprofile/:id',
      element : <EditProfile />
    },
    {
      path : '/addproject',
      element : <AddProject />
    },
    {
      path : '/developerProfile/:id',
      element : <DeveloperProfile />
    },
    {
      path : '/search/:search_key',
      element : <Searchresults />
    },
    {
      path : '/myprojects',
      element : <MyProjects />
    },
    {
      path : '/editproject/:id',
      element : <EditProject />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
