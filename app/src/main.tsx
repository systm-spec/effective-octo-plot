import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BarChart from "./routes/Bar.tsx";
import Root from "./routes/Root.tsx";
import ImgData from "./routes/ImgData.tsx";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bar",
    element: <BarChart />,
  },
  {
    path: "/imgup",
    element: <ImgData />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
