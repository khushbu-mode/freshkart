import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartDrawer from "../Cart/CartDrawer";
import { useCart } from "../Hooks/useCart";
import Cookies from "js-cookie";


function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems } = useCart();

  // const token = localStorage.getItem("accessToken");// token local storage
  const token = Cookies.get("accessToken"); //for cookies store token 
  const navigate = useNavigate();

  const handleLogout = () => {
  // localStorage.removeItem("accessToken");
  Cookies.remove("accessToken");
    window.location.reload();


  navigate("/login");
};
  
  // const [search, setSearch] = useState("");

  return (
    <>
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto h-20 px-6  flex items-center gap-8">

          {/* Logo + Location */}
          <div className="flex items-center gap-8">

            <Link to="/">
              <h1 className="text-3xl font-bold text-green-600 whitespace-nowrap">
                FreshKart
              </h1>
            </Link>

            <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <HiOutlineLocationMarker className="text-3xl text-green-600" />

              <div>
                <p className="text-xs text-gray-500">
                  Deliver to
                </p>

                <h4 className="font-semibold">
                  Gurgaon
                </h4>
              </div>
            </div>

          </div>

          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 w-full gap-2">

            <IoSearchOutline className="text-gray-400 text-xl ml-3 mr-3" />

            <input
              type="text"
              placeholder="Search Products..."
              className="flex-1 ml-3 outline-none bg-transparent"
            />

          </div>

          {/* Right */}
          <div className="flex items-center gap-6 whitespace-nowrap">

          {token ? (
  <button
    onClick={handleLogout}
    className="text-lg hover:text-red-600"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="text-lg hover:text-green-600"
  >
    Login
  </Link>
)}

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-green-600 text-white px-5 h-10 rounded-lg"
            >
              <FaShoppingCart />
<span>Cart ({cartItems.length})</span>     
       </button>


          </div>

        </div>
      </nav>
      {/* //cart drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </>
  );
}


export default Navbar;


