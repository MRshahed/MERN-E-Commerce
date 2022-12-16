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
    <div className="mx-auto container py-12 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4  md:gap-2 gap-10 items-center justify-center">
        <div className="flex flex-col flex-shrink-0 gap-4">
          <div>
            <h1 className="font-black text-2xl">Duvera</h1>
          </div>
          <p className="text-sm leading-none text-gray-800">
            Copyright © 2022 Duvera
          </p>
          <p className="text-sm leading-none text-gray-800">
            All rights reserved
          </p>
          <div className="flex items-center gap-x-4 mt-2">
            <FacebookOutlined />
            <Instagram />
            <Twitter />
            <Pinterest />
          </div>
        </div>
        <div className="text-base font-semibold leading-4 text-gray-800  flex flex-col gap-5">
          <p>Home</p>
          <p>Man Fashion</p>
          <p>Accessories</p>
          <p>Order Tracking</p>
          <p>Wishlist</p>
        </div>

        <div className="  text-base font-semibold leading-4 text-gray-800  flex flex-col gap-5">
          <h2>Support</h2>
          <p>Legal policy</p>
          <p>Status policy</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>

        <div className=" text-base font-semibold leading-4 text-gray-800  flex flex-col gap-5 items-start justify-center">
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
