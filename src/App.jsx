import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts

import Mainlayout from "./layout/MainLayouts";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about/:id",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
