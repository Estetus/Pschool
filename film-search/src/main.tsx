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
import { RequireAuth } from "./components/helpers/RequireAuth";
import { Provider } from 'react-redux';
import { store } from './components/store/store';

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
        element: <Favorites/>,
      },
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/movie/:id",
        element: <Card />,
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
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
