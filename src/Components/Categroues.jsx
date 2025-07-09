import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'

const Categories = () => {
    const { navigate } = useAppContext();
    
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-8">Shop by Categories</h2>
            
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer p-3 sm:p-4 rounded-xl flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
                        style={{ backgroundColor: category.bgColor }}
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            window.scrollTo(0, 0);
                        }}
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 sm:mb-3">
                            <img
                                src={category.image}
                                alt={category.text}
                                className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-medium text-center text-gray-800 line-clamp-2">
                            {category.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories