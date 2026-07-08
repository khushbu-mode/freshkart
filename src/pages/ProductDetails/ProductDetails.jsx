import { useParams } from "react-router-dom";
import productData from "../../data/productData";

function ProductDetails() {
  const { id } = useParams();

  const product = productData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-2 gap-10">

        {/* Image */}

        <div className="border rounded-2xl p-8 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Details */}

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-4">
            {product.quantity}
          </p>

          <h2 className="text-3xl font-bold mt-6">
            ₹{product.price}
          </h2>

          <p className="mt-6 text-gray-600">
            Fresh quality product delivered in minutes.
          </p>

          <button
            className="
            mt-8
            bg-green-600
            text-white
            px-8
            py-3
            rounded-xl
            hover:bg-green-700
            "
          >
           + Add To Cart
          </button>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;