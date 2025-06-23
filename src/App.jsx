import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "Login", element: <Login /> },
      { path: "Shop", element: <Shop /> },
      { path: "Cart", element: <Cart /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
