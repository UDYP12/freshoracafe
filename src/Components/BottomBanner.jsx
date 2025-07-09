import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-16 sm:mt-20 lg:mt-24 w-full">
      {/* Background Banner Image */}
      <img
        src={assets.bottom_banner_image}
        alt="bottom banner"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-center md:justify-end items-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 max-w-full sm:max-w-[95%] md:max-w-[80%] lg:max-w-md shadow-md">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
          Crafted with Love, Baked to Perfection
          </h2>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <img
                  src={feature.icon}
                  alt="feature"
                  className="w-6 sm:w-7 md:w-8 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
