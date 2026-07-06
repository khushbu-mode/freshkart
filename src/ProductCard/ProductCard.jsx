function ProductCard({
  name,
  quantity,
  price,
  image,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-gray-200
      p-4
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
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

      {/* Product Name */}

      <h3 className="font-semibold text-lg mt-4 line-clamp-2">
        {name}
      </h3>

      {/* Quantity */}

      <p className="text-gray-500 mt-2">
        {quantity}
      </p>

      {/* Bottom */}

      <div className="flex items-center justify-between mt-5">

        <span className="text-xl font-bold">
          ₹{price}
        </span>

        <button
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

      </div>
    </div>
  );
}

export default ProductCard;