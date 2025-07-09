import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../Context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
      <div className="mb-6 md:mb-8 lg:mb-10 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Best Sellers
        </h2>
        <button className="text-sm sm:text-base md:text-lg font-medium text-primary hover:text-primary-dark transition-colors">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {products
          .filter((product) => product.inStock)
          .slice(0, 10)  // Increased to show 10 products for larger screens
          .map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="h-full"
            />
          ))}
      </div>

      {/* Responsive "View All" button for mobile */}
      <div className="mt-6 flex justify-center md:hidden">
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default BestSeller;