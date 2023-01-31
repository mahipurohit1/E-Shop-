import "./App.css";

import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Checkout from "./components/Checkout/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
