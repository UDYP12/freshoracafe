import { useEffect, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../Components/ProductCard";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (products.length > 0 && product) {
      const related = products
        .filter((item) => item.category === product.category && item._id !== product._id)
        .slice(0, 5);
      setRelatedProducts(related);
    }
  }, [products, product]);

  useEffect(() => {
    if (product) {
      setThumbnail(product?.image?.[0] || null);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="mt-12 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-4">
        <Link to={"/"} className="hover:underline">Home</Link> /
        <Link to={"/products"} className="hover:underline"> Products</Link> /
        <Link to={`/products/${product.category.toLowerCase()}`} className="hover:underline">
          {" "}{product.category}
        </Link> /
        <span className="text-indigo-500"> {product.name}</span>
      </p>

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left - Images */}
        <div className="flex gap-4 w-full md:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.image.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border w-20 h-20 sm:w-24 sm:h-24 border-gray-300 rounded overflow-hidden cursor-pointer"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="border border-gray-300 rounded overflow-hidden w-full h-[280px] sm:h-[320px] md:h-[400px]">
            <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right - Details */}
        <div className="w-full md:w-1/2 text-gray-800 text-sm">
          <h1 className="text-2xl sm:text-3xl font-semibold">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5).fill("").map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
                className="w-4"
              />
            ))}
            <p className="ml-2 text-base text-gray-600">(4)</p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500 line-through">
              MRP: {currency}{product.price}
            </p>
            <p className="text-xl sm:text-2xl font-medium text-black">
              MRP: {currency}{product.offerPrice}
            </p>
            <span className="text-gray-500">(inclusive of all taxes)</span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-base font-medium">About Product</p>
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 text-base">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full py-3 font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="w-full py-3 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
     <div className="mt-10 md:mt-16 lg:mt-20">
  {/* Title Section */}
  <div className="flex flex-col items-start mb-4 sm:mb-6">
    <p className="text-xl sm:text-2xl font-semibold">Related Products</p>
    <div className="w-16 sm:w-20 h-1 bg-primary rounded-full mt-1 sm:mt-2" />
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
    {relatedProducts.filter(p => p.inStock).map((p, i) => (
      <ProductCard key={i} product={p} />
    ))}
  </div>

  {/* See More Button */}
  <div className="flex justify-center mt-8 sm:mt-10">
    <button
      onClick={() => {
        navigate("/product");
        window.scrollTo(0, 0);
      }}
      className="px-6 sm:px-8 md:px-12 py-2 sm:py-3 border border-primary text-primary rounded hover:bg-primary/10 transition text-sm sm:text-base"
    >
      See More
    </button>
  </div>
</div>
    </div>
  );
};

export default ProductDetails;
