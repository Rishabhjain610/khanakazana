import React from 'react';
import burger3 from '../assets/burger3.jpg'
const Main = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {/* Left Side Content */}
        <div className="max-w-xl text-left lg:w-1/2">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Discover Delicious Recipes
            <strong className="font-extrabold text-red-700 sm:block"> Cook & Enjoy! </strong>
          </h1>

          <p className="mt-4 sm:text-xl">
            Explore our collection of mouth-watering recipes. From juicy burgers to exotic dishes,
            find the perfect recipe for any occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="block rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-none sm:w-auto"
              href="#"
            >
              Explore Recipes
            </a>

            <a
              className="block rounded-sm px-12 py-3 text-sm font-medium text-red-600 shadow-sm hover:text-red-700 focus:ring-3 focus:outline-none sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={burger3}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
