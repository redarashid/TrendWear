import SideNavContext from "../store/SideNavContext";
import CartContext from "../store/CartContext";
import TopHeader from "../Components/TopHeader";
import SideNav from "../Components/SideNav";
import LayoutHolder from "../Components/LayoutHolder";
import Navbar from "../Components/NavBar";

export default function Root() {
  return (
    <div className="bg-whgite">
      <SideNavContext>
        <CartContext>
          <TopHeader />
          <Navbar />

          <LayoutHolder type="Outlet" />

          <SideNav />
        </CartContext>
      </SideNavContext>
    </div>
  );
}
