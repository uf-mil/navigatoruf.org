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
import Team2022Page from './pages/teams/2022';
import Team2024Page from './pages/teams/2024';
import VehiclePage from './pages/Vehicle';
import SponsorsPage from './pages/Sponsors';
import PhotosPage from './pages/Photos';
import PublicationsPage from './pages/Publications.js'

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
  {
    path: "/publications",
    element: <PublicationsPage />,
  },
], {
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
