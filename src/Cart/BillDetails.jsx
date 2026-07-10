import { useCart } from "../Hooks/useCart";

function BillDetails() {

  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(

    (total, item) => total + item.price * item.quantity,

    0

  );

  const deliveryCharge = subtotal > 0 ? 40 : 0;

  const handlingCharge = subtotal > 0 ? 10 : 0;

  const total =
    subtotal +
    deliveryCharge +
    handlingCharge;

  return (

    <div className="mt-8 border-t pt-5">

      <div className="flex justify-between mb-3">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Delivery</span>
        <span>₹{deliveryCharge}</span>
      </div>

      <div className="flex justify-between mb-3">
        <span>Handling</span>
        <span>₹{handlingCharge}</span>
      </div>

      <div className="flex justify-between font-bold text-xl mt-5">

        <span>Total</span>

        <span>
          ₹{total}
        </span>

      </div>

    </div>

  );
}

export default BillDetails;