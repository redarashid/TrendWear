import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import Root from "./Pages/Root"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Prodcut from "./Pages/Prodcut"
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
