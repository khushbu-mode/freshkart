import productData from "./productData";
import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-14">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Best Selling Products
        </h2>

        <button className="text-green-600 font-semibold">
          View All
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">

        {productData.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            image={product.image}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;