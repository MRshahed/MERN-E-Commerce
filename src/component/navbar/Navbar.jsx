import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline } from "@mui/icons-material";
const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center text-gray-600">
      <div className="flex justify-between items-center lg:px-16 px-5 py-5">
        <div className=" cursor-pointer flex gap-x-4 justify-center items-center">
          <p className="font-bold">EN</p>
          <div className=" relative flex justify-center items-center">
            {/* <input
            type="text"
            className="border border-black w-[10rem] rounded-md"
          /> */}
            <SearchIcon className="" />
          </div>
        </div>
        <div className=" text-4xl text-center">ECommerce</div>
        <div className="flex gap-x-6">
          <PersonOutline />

          <Badge badgeContent={4} color="primary" className="cursor-pointer">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-12 font-semibold tracking-wider pt-1 pb-4">
          <li>New Arrival</li>
          <li>Clothings</li>
          <li>Electronics</li>
          <li>Home Decor</li>
          <li>Sports</li>
          <li>Cars</li>
          <li>Others</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
