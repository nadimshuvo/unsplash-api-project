import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestPhotos from "./components/LatestPhotos";
import Photo from "./components/Photo";
import ErrorPage from "./components/error-page";
import About from "./components/pages/About";
import Credits from "./components/pages/Credits";
import Disclaimer from "./components/pages/Disclaimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LatestPhotos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/credits",
    element: <Credits />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photo",
    element: <Photo />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
