import { FaTrash } from "react-icons/fa";
import { useCart } from "../Hooks/useCart";

function CartItem({ item }) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (

    <div className="flex gap-4 border-b py-5">

      {/* Image */}

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-contain"
      />

      {/* Details */}

      <div className="flex-1">

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {item.unit}
        </p>

        <p className="font-bold mt-2">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-3 mt-4">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="border px-3 rounded"
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="border px-3 rounded"
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 ml-auto"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>

  );
}

export default CartItem;