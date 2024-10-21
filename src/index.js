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
import TeamPage from './pages/Team';
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
    element: <TeamPage />,
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
