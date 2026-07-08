import CartItem from "./CartItem";
import BillDetails from "./BillDetails";

function CartDrawer({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      <div className="fixed top-0 right-0 h-screen w-[420px] bg-white z-50 p-6 overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            My Cart
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <CartItem />

        <BillDetails />

        <button
          className="
          w-full
          mt-6
          bg-green-600
          text-white
          py-4
          rounded-xl
          font-semibold
          "
        >
          Proceed to Checkout
        </button>

      </div>
    </>
  );
}

export default CartDrawer;