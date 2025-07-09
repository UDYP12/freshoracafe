import React from 'react';

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-6 md:px-8 lg:px-0 mt-20 pb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Never Miss a Deal!
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts.
      </p>

      <form className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-2xl gap-3 sm:gap-0">
        <input
          className="border border-gray-300 rounded-md sm:rounded-r-none px-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-md sm:rounded-l-none transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
