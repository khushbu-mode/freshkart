import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { getProducts, getCategories, getProductByCategory } from "../../services/productService";
import ProductCard from "../../ProductCard/ProductCard";

function Products() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);//loading state
  const [error, setError] = useState(""); //if any error 

  const [categories, setCategories] = useState([]);
  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );

        const response = await getProducts();
        setProducts(response.data.products);

        const categoryResponse = await getCategories();// for categories buttons

        // const response = await getProductsByCategory("beauty");//category button filtering
        setCategories(categoryResponse.data);
        console.log(categoryResponse.data);
      } catch (error) {
        setError("Failed to load products");
        console.log(error);
      } finally {
        setLoading(false);

      }
    }

    fetchProducts();
  }, [])

  // search implementation & filtering products based on search and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Products:", filteredProducts);

    if (loading) {
    return (
      <h1 className="text-center text-2xl mt-20">
        Loading Products...
      </h1>
    );
  }


  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      {/* Search */}
      <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 mb-8">

        <IoSearchOutline className="text-gray-400 text-xl mr-3" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-10 flex-wrap">

        {categories.map((category) => (

          <button
            key={category.slug}
           onClick={async () => {
  setSelectedCategory(category.slug);

  if (category.slug === "All") {
    const response = await getProducts();
    setProducts(response.data.products);
  } else {
    const response = await getProductByCategory(category.slug);
    setProducts(response.data.products);
  }
}}
            className={`
        px-5
        py-2
        rounded-full
        transition-all

        ${selectedCategory === category.slug
                ? "bg-green-600 text-white"
                : "border border-gray-300 hover:bg-green-100"
              }
      `}
          >
            {category.name}
          </button>

        ))}

      </div>

      {/* Products Grid */}

      <div className="grid grid-cols-4 gap-6">

        {filteredProducts.map((product) => (

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

    </main>
  );
}

export default Products;