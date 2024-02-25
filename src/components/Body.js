import React from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Domains from "./Domains";
import LatestProjectsPage from "./LatestProjectsPage";
import SignUpPage from "./SignUpPage";

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
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
