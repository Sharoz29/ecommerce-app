import "./App.css";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Electronics from "./routes/electronics/electronics";
import Jewelery from "./routes/jewelery/jewelery";
import MensClothing from "./routes/mens-clothing/mensClothing";
import WomensClothing from "./routes/womens-clothing/womensClothing";

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
    {
      path: "electronics",
      element: <Electronics />,
    },
    {
      path: "jewelery",
      element: <Jewelery />,
    },
    {
      path: "men'sclothing",
      element: <MensClothing />,
    },
    {
      path: "women'sclothing",
      element: <WomensClothing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
