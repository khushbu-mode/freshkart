import productData from "../data/productData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Api/api";

function ProductSection() {

  // State to store products fetched from API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();

        setProducts(response.data.products);
      } catch (error) {

        console.log(error);

      }
    }
    fetchProducts();

  }, [])



  return (
    <section className="max-w-7xl mx-auto px-6 mt-14">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Best Selling Products
        </h2>



        <Link
          to="/products"
        >
          <h1 className="text-green-600 font-semibold hover:text-green-700"
          >View All</h1>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            unit={product.category}
            price={product.price}
            image={product.thumbnail}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;