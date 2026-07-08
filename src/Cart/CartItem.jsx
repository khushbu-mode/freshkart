function CartItem() {
  return (
    <div className="flex items-center justify-between border-b py-4">

      <div className="flex items-center gap-3">

        <img
          src="https://via.placeholder.com/70"
          alt="Milk"
          className="w-16 h-16 object-contain"
        />

        <div>
          <h3 className="font-semibold">
            Amul Taaza Milk
          </h3>

          <p className="text-gray-500 text-sm">
            500 ml
          </p>

          <h4 className="font-bold mt-1">
            ₹32
          </h4>
        </div>

      </div>

      <div className="flex items-center gap-3 bg-green-600 text-white rounded-lg px-3 py-1">

        <button>-</button>

        <span>1</span>

        <button>+</button>

      </div>

    </div>
  );
}

export default CartItem;