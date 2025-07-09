import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../Components/ProductCard';

const ProductCat = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category?.toLowerCase()
  );

  const filterProducts = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 mt-16">
      {/* Category Title */}
      {searchCategory ? (
        <div className="flex flex-col items-start mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-1" />
        </div>
      ) : (
        <p className="text-red-500 text-lg sm:text-xl mb-6">Category not found</p>
      )}

      {/* Products Grid or Message */}
      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {filterProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary text-center">
            No Products Found in This Category
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCat;
