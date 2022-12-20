import React from "react";

const Featured = () => {
  return (
    <div className="xl:mx-auto xl:container bg-gray-50 mt-10">
      <div className="lg:px-10 md:px-6 px-4 md:py-12 py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 md:py-9 py-6">
            <img
              src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/luxe2.png"
              alt="bag"
              className="lg:w-full h-full object-cover object-center w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16 lg:pr-24">
            <p className="text-sm leading-none text-gray-600 pb-2">Featured</p>
            <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2">
              Luxe New York Streak
            </p>
            <p className="text-sm leading-5 text-gray-600 md:pb-10 pb-8">
              Start off the new year by hitting the ground running with this
              purpose built workman’s bag. A culmination of productivity and
              luxury
            </p>
            <div className="md:block flex items-center justify-center">
              <button className="lg:w-auto w-full border hover:border-gray-800 hover:text-gray-800 hover:bg-gray-100 bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-50">
                Shop best sellers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
