import React from "react";
import mainbannerbg from "../assets/main_banner_bg.png";
import mainbannerbg_sm from "../assets/main_banner_bg_sm.png";
import arrowicon from "../assets/white_arrow_icon.svg";
import rrowiconblack from "../assets/black_arrow_icon.svg";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Responsive Banner Images */}
      <picture>
        <source media="(min-width: 768px)" srcSet={mainbannerbg} />
        <img
          src={mainbannerbg_sm}
          alt="Fresh produce banner"
          className="w-full h-auto md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
        />
      </picture>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-12 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left text-white md:text-gray-900 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-snug md:leading-tight lg:leading-normal">
       Where Every Sip is Fresh, and Every Bite a Delight
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8 w-full sm:w-auto">
          <Link
            to="/product"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full text-white font-medium text-sm sm:text-base w-full sm:w-auto border border-blue-500 hover:border-blue-600 shadow-md hover:shadow-lg"
          >
            Shop Now
            <img
              src={arrowicon}
              alt="arrow"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/products"
            className="hidden md:flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 transition-all duration-300 rounded-full text-gray-800 font-medium border border-gray-300 shadow-md hover:shadow-lg"
          >
            Explore Deals
            <img
              src={rrowiconblack}
              alt="arrow"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;