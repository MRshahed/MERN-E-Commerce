import {
  Email,
  FacebookOutlined,
  Instagram,
  LocalPhone,
  LocationOn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { paymentCard } from "../Data";

const Footer = () => {
  return (
    <div className=" py-12 bg-gray-900 2xl:mx-auto 2xl:container">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-10 items-center justify-center lg:px-10 px-6 container mx-auto">
        <div className="flex flex-col flex-shrink-0 gap-4 text-gray-200">
          <div>
            <h1 className="font-black text-2xl">Duvera</h1>
          </div>
          <p className="text-sm leading-none text-gray-200">
            Copyright © 2022 Duvera
          </p>
          <p className="text-sm leading-none text-gray-200">
            All rights reserved
          </p>
          <div className="flex items-center gap-x-4 mt-2">
            <FacebookOutlined />
            <Instagram />
            <Twitter />
            <Pinterest />
          </div>
        </div>
        <div className="text-base font-semibold leading-4 text-gray-200  flex flex-col gap-5">
          <p>Home</p>
          <p>Man Fashion</p>
          <p>Accessories</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </div>

        <div className="  text-base font-semibold leading-4 text-gray-200  flex flex-col gap-5">
          <h2>Account</h2>
          <p>Order Tracking</p>
          <p>Support</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>

        <div className=" text-base font-semibold leading-4 text-gray-200  flex flex-col gap-5 items-start justify-center">
          <div className="flex  items-center gap-2 ">
            <LocalPhone />
            <p>+880 1688242754</p>
          </div>
          <div className="flex  items-center gap-2  ">
            <Email />
            <p>info@duvera.com</p>
          </div>
          <div className="flex  items-center gap-2 ">
            <LocationOn />
            <p>California 99, USA</p>
          </div>
          <div className="flex gap-2 ">
            {paymentCard.map((e) => (
              <div className="">
                <img
                  src={e.img}
                  key={e.id}
                  alt="payment card"
                  className="w-[30px] h-[30px] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
