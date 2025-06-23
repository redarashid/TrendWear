import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideNavProvider } from "./store/SideNavContext";
import { CartProvider } from "./store/CartContext";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Components/navBar";

// Demo components for routing
const Shop = () => <div className="p-8">Shop Page</div>;
const NewArrival = () => <div className="p-8">New Arrivals Page</div>;
const TopSelling = () => <div className="p-8">Top Selling Page</div>;
const OnSale = () => <div className="p-8">On Sale Page</div>;
const Cart = () => <div className="p-8">Cart Page</div>;
const Login = () => <div className="p-8">Login Page</div>;
const SignUp = () => <div className="p-8">Sign Up Page</div>;
const Home = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Welcome to SHOP.CO</h1>
    <p className="mb-4">Scroll down to see the navbar hide/show animation.</p>
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <p>Scroll content area</p>
    </div>
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <p>More scroll content</p>
    </div>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SideNavProvider>
          <Router>
            <div className="min-h-screen">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Shop/:search" element={<Shop />} />
                <Route path="/NewArrival" element={<NewArrival />} />
                <Route path="/TopSelling" element={<TopSelling />} />
                <Route path="/OnSale" element={<OnSale />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
              </Routes>
            </div>
          </Router>
        </SideNavProvider>
      </CartProvider>
    </AuthProvider>
  );
}
