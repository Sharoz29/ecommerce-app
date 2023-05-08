import "./App.css";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
