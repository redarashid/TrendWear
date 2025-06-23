import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Root from "./pages/Root"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Prodcut from "./pages/Prodcut"
import { motion } from "framer-motion"
import { AuthProvider } from './AuthContext';
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>, 
    errorElement:<Error/>,
    children: [
      {path: "", element: <Home/>},
      {path: "SignUp", element: <SignUp/>},
      {path: "Login", element: <Login/>},
      {path: "Shop", element: <Shop/>},
      {path: "Cart", element: <Cart/>},
      {path: "Shop/:name", element: <Prodcut/>},
      {path: "NewArrival", element: <Home to='NewArrival'/>},
      {path: "TopSelling", element: <Home to='TopSelling'/>},
      {path: "OnSale", element: <Home to='OnSale'/>},
    ]
  },
]);



function App() {
  return (
    <AuthProvider>
    <div>
      <RouterProvider router={router}/>
    </div>
    </AuthProvider>
  )
}

export default App
