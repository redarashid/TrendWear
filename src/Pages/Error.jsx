import SideNavContext from "../store/SideNavContext";
import CartContext from "../store/CartContext";

import TopHeader from "../Components/TopHeader";
import SideNav from "../Components/SideNav";
import LayoutHolder from "../Components/LayoutHolder";
import Navbar from "../Components/NavBar";

export default function Error() {
  window.scrollTo(0, 0);
  return (
    <SideNavContext>
      <CartContext>
        <TopHeader />
        <Navbar />
        <LayoutHolder type="404" />

        <SideNav />
      </CartContext>
    </SideNavContext>
  );
}
