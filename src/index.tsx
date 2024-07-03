import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/home/Home";
import Category from "./pages/collections/Collections";
import NFTPage from "./pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:collectionSlug",
        element: <Category />,
      },
      {
        path: "/nft/:contract/:identifier",
        element: <NFTPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
