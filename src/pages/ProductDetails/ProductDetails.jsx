import { useParams } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/productService";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);//loading state


  useEffect(() => {

    const fetchProduct = async () => {
      try{

        //  setLoading(true);

        // await new Promise((resolve) =>
        //   setTimeout(resolve, 2000)
        // );

       const response = await getProductById(id); 
       setProduct(response.data);
      }catch(error){
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

  // const product = productData.find(
  //   (item) => item.id === Number(id)
  // );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  //     if (loading) {
  //   return (
  //     <h1 className="text-center text-2xl mt-20">
  //       Loading Products...
  //     </h1>
  //   );
  // }


  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-2 gap-10">

        {/* Image */}

        <div className="border rounded-2xl p-8 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Details */}

        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

         <p className="text-gray-500 mt-4">
  {product.category}
</p>

          <h2 className="text-3xl font-bold mt-6">
            ₹{product.price}
          </h2>

          <p className="mt-6 text-gray-600">
            Fresh quality product delivered in minutes.
          </p>

          {/* <button
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
          </button> */}

<button
onClick={() => addToCart(product)}
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
Add To Cart
</button>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;