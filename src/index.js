import React from 'react';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom';
import { createRoot } from "react-dom/client";

import LandingPage from './pages/Landing';
import ErrorPage from './pages/NotFound';
import Team2018Page from './pages/teams/2018';
import Team2022Page from './pages/teams/2022';
import Team2024Page from './pages/teams/2024';
import VehiclePage from './pages/Vehicle';
import SponsorsPage from './pages/Sponsors';
import PhotosPage from './pages/Photos';

import Navbar from "./components/Navbar.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Team2024Page />,
  },
  {
    path: "/team/2022",
    element: <Team2022Page />,
  },
  {
    path: "/team/2018",
    element: <Team2018Page />,
  },
  {
    path: "/vehicle",
    element: <VehiclePage />,
  },
  {
    path: "/sponsors",
    element: <SponsorsPage />,
  },
  {
    path: "/photos",
    element: <PhotosPage />,
  },
], {
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
