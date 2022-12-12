import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline } from "@mui/icons-material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div>
      <nav className="lg:hidden">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="bg-white text-gray-600">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ECommerce
              </Typography>
              <Badge
                badgeContent={4}
                color="primary"
                className="cursor-pointer"
              >
                <SearchIcon className="mr-4" />
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>

      <nav className=" flex-col justify-center text-gray-600 hidden lg:flex">
        <div className="flex justify-between items-center lg:px-16 px-5 py-5">
          <div className=" cursor-pointer flex gap-x-4 justify-center items-center">
            <p className="font-bold">EN</p>
            <div className=" relative flex justify-center items-center">
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
    </div>
  );
};

export default Navbar;
