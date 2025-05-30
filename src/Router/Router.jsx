import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import LowyarDetails from "../Pages/Lowyar/LowyarDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("lawyer.json"),
      },
      {
        path: "/blogs",
        loader: () => fetch("question.json"),
        Component: Blogs,
      },
      {
        path: "/lowyarDetails/:id",
        Component: LowyarDetails,
        loader: () => fetch("lawyer.json"),
      },
      {
        path: "/my-booking",
        Component: MyBookings,
      },
    ],
  },
]);

export default router;
