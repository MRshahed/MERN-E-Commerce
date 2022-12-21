import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FavoriteBorderOutlined, PersonOutline } from "@mui/icons-material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mx-auto container">
      <nav className="lg:hidden">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="bg-white text-stone-700">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <button type="button" onClick={() => setToggle(true)}>
                  <MenuIcon />
                </button>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Duvera
              </Typography>
              <SearchIcon className="mr-4" />
              <PersonOutline className="mr-2" />
              <Link to={"/wishlist"}>
                <FavoriteBorderOutlined className="mr-2" />
              </Link>
              <Badge
                badgeContent={4}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#1F2937",
                  },
                }}
                className="cursor-pointer"
              >
                <Link to={"/cart"}>
                  <ShoppingCartOutlinedIcon />
                </Link>
              </Badge>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>

      {toggle && (
        <nav className="bg-white w-[70%]  lg:hidden md:w-[40%] h-[100vh] absolute top-0 left-0 z-20 flex flex-col   pl-10">
          <button
            type="button"
            onClick={() => setToggle(!true)}
            className="ml-[70%] mt-5"
          >
            <CloseIcon />
          </button>

          <div>
            <ul className="flex flex-col justify-start items-start gap-5 mt-6 font-bold tracking-wider pb-4 text-stone-800">
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
      )}

      <nav className=" flex-col justify-center text-stone-700 hidden lg:flex">
        <div className="flex justify-between items-center lg:px-16 px-5 py-5">
          <div className=" cursor-pointer flex gap-x-4 justify-center items-center">
            <p className="font-bold">EN</p>
            <div className=" relative flex justify-center items-center">
              <SearchIcon className="" />
            </div>
          </div>
          <div className=" text-4xl text-center cursor-pointer">
            <Link to={"/"}>Duvera</Link>
          </div>
          <div className="flex gap-x-4">
            <PersonOutline />
            <Link to={"/wishlist"}>
              <FavoriteBorderOutlined />
            </Link>
            <Badge
              badgeContent={4}
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "#1F2937",
                },
              }}
              className="cursor-pointer"
            >
              <Link to={"/cart"}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </div>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-12 font-normal tracking-wider pb-4 text-stone-800">
            <li>New Arrival</li>
            <Link to={"/products"}>
              <li className="cursor-pointer">Clothings</li>
            </Link>
            <li>Electronics</li>
            <li>Home Decor</li>
            <li>Sports</li>
            <li>Cars</li>
            <li>Others</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
