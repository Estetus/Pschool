import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Menu } from "./pages/Menu/Menu";
import { Favorites } from "./pages/Favorites/Favorites";
import Login from "./components/Login/Login";
import { Card } from "./pages/Card/Card";
import { Error } from "./pages/Error/Error";
import { UserContextProvider } from "./context/user.context";
import axios from "axios";
import { URL } from "./components/helpers/API";
import { RequireAuth } from "./components/helpers/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/movie/:id",
        element: <Card />,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${URL}/?tt=${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
