import productData from "../data/productData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";


function ProductSection() {

  // State to store products fetched from API
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);//loading state
    const [error, setError] = useState(""); //if any error 



  useEffect(() => {
    const fetchProducts = async () => {
      try {

        setLoading(true);

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );

       const response = await getProducts();
       setProducts(response.data.products);
      } catch (error) {

        console.log(error);

      }finally {
        setLoading(false);

      }
    }
    fetchProducts();

  }, [])


    if (loading) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading Products...
      </h1>
    );
  }

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