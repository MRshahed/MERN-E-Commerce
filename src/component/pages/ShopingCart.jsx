import { Link } from "react-router-dom";
import Announcement from "../container/Announcement";
import Footer from "../container/Footer";
import Navbar from "../navbar/Navbar";

const ShopingCart = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto">
        <Navbar />
        <Announcement />
        <div className="flex items-center text-gray-800 font-semibold justify-start hover:text-gray-600 cursor-pointer mt-5 md:pl-10 pl-4 lg:pl-28 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
          <p className="text-sm pl-2 leading-none">
            <Link to={"/"}> Continue Shopping</Link>
          </p>
        </div>
        <div className="container mx-auto">
          <p className="text-4xl font-black leading-10 text-gray-800 pt-3 flex justify-center">
            Shopping Cart
          </p>

          <div className="flex md:flex-row flex-col lg:justify-between lg:items-start lg:px-[7rem] mt-10 md:px-10">
            <div className="lg:w-1/2 w-full bg-white items-center flex flex-col justify-center">
              <div className="md:flex items-center mt-0 py-8 border-t border-gray-200">
                <div className="w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                    alt="cart"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      North wolf bag
                    </p>
                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center py-8 border-t border-gray-200">
                <div className="w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                    alt="cart"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      Luxe Signature Ring
                    </p>
                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center py-8 border-t border-b border-gray-200">
                <div className="h-full w-1/4">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                    alt="cart"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      Luxe Signature Shoes
                    </p>
                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
              <div className="flex flex-col px-14 py-20 justify-between">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800 justify-center items-center flex">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-10 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      $10,240
                    </p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShopingCart;
