import { Outlet } from "react-router-dom";

import Navbar from "../../src/layouts/Navbar";
import Footer from "../../src/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      

      <Outlet />

      <Footer />
    </>
  );
}

export default MainLayout;