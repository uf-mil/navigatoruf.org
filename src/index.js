import React from 'react';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { createRoot } from "react-dom/client";

import LandingPage from './pages/Landing';
// import TeamPage from './pages/Team';
// import VehiclePage from './pages/Vehicle';
// import SponsorsPage from './pages/Sponsors';
// import PhotosPage from './pages/Photos';
// import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   path: "/team",
  //   element: <TeamPage />,
  // },
  // {
  //   path: "/vehicle",
  //   element: <VehiclePage />,
  // },
  // {
  //   path: "/sponsors",
  //   element: <SponsorsPage />,
  // },
  // {
  //   path: "/photos",
  //   element: <PhotosPage />,
  // },
], {
});

console.log("test");

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
