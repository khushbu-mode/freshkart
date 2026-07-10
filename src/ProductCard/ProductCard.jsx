import { Link } from "react-router-dom";
import { useCart } from "../Hooks/useCart";

function ProductCard({
  id,
  name,
  unit,
  price,
  image,
}) {

const {
  cartItems,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

const cartItem = cartItems.find(
  (item) => item.id === id
);

  return (

    <Link to={`/product/${id}`}>

      <div
        className="
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-4
        shadow-sm
        hover:shadow-lg
        hover:scale-[1.02]
        transition-all
        duration-300
        cursor-pointer
        "
      >

        {/* Image */}

        <div className="flex justify-center">

          <img
            src={image}
            alt={name}
            className="w-36 h-36 object-contain"
          />

        </div>

        {/* Name */}

        <h3 className="font-semibold text-lg mt-4 line-clamp-2">
          {name}
        </h3>

        {/* unit */}

       <p className="text-gray-500 mt-2">
          {unit}
        </p>

        {/* Bottom */}

        <div className="flex items-center justify-between mt-5">

          <span className="text-xl font-bold">
            ₹{price}
          </span>

         {
  cartItem ? (

    <div className="flex items-center gap-3">

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          decreaseQuantity(id);
        }}
        className="bg-green-600 text-white w-8 h-8 rounded"
      >
        -
      </button>

      <span className="font-semibold">
        {cartItem.quantity}
      </span>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          increaseQuantity(id);
        }}
        className="bg-green-600 text-white w-8 h-8 rounded"
      >
        +
      </button>

    </div>

  ) : (

    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart({
          id,
          name,
          unit,
          price,
          image,
        });
      }}
      className="
      bg-green-600
      hover:bg-green-700
      text-white
      px-4
      py-2
      rounded-lg
      "
    >
      + ADD
    </button>

  )
}  

        </div>

      </div>

    </Link>

  );
}

export default ProductCard;