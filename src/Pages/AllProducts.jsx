import React, { useEffect, useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import ProductCard from "../Components/ProductCard.jsx";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filterproduct, setFilterProduct] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterProduct(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProduct(products);
    }
  }, [products, searchQuery]);

  return (
    <>
      <div className='mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium uppercase text-black'>All Products</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8'>
          {filterproduct
            .filter(product => product.inStock) // show only products in stock
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
