import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { popularProducts } from "../../component/Data";

const Product = () => {
  return (
    <div className="grid grid-cols-4 gap-5 items-center justify-center h-[70vh] w-full px-10 ">
      {popularProducts.map((product) => (
        <div className=" h-[400px] w-[350px] bg-purple-100 flex items-center justify-center relative transition cursor-pointer ease-in-out hover:scale-105 hover:z-10">
          <img
            src={product.img}
            key={product.id}
            alt="product img"
            className="h-[350px] w-[300px] object-cover "
          />
          <div className=" absolute text-black bg-black h-full w-full top-0 left-0 flex justify-center items-center bg-opacity-30 gap-x-5 opacity-0 hover:opacity-100">
            <SearchIcon
              style={{ fontSize: "2.5rem" }}
              className="bg-white rounded-full p-1 transition  cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110"
            />
            <AddShoppingCartIcon
              style={{ fontSize: "2.5rem" }}
              className="bg-white rounded-full p-1 transition  cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110"
            />
            <FavoriteBorderIcon
              style={{ fontSize: "2.5rem" }}
              className="bg-white rounded-full p-1 transition  cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
