import SideNavContext from "../store/SideNavContext";
import CartContext from "../store/CartContext";

import Navbar from "../Components/Navbar";
import TopHeader from "../Components/TopHeader";
import SideNav from "../Components/SideNav";
import LayoutHolder from "../Components/LayoutHolder";

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