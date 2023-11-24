import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 pt-1">
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      > 
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      >
        <Link to="/bmi-test" className="flex items-center">
          BMI Calculate
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      >
        <Link to="/article" className="flex items-center">
          Article
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      >
        <Link to="/community" className="flex items-center">
          Community
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      >
        <Link to="/food-nutrient" className="flex items-center">
          Food Nutrient
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-semibold text-gray-600 hover:text-green-800 border-b-2 border-transparent hover:border-green-800 transition-all duration-200"
      >
        <Link to="/about-us" className="flex items-center">
          About Us
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar fullWidth="true" className="mx-auto shadow-none sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="flex items-center gap-x-3">
          <img src="./logo/logo192.png" className="h-12 w-auto" alt="NutriCare"/>
          <Typography
            
            className="mr-4 cursor-pointer py-1.5 font-light text-orange-400 tracking-widest"
            variant="h3"
          >
            Nutri<span className="font-semibold text-green-500">Care</span>
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-3">
          <Button
            variant="filled"
            size="sm"
            className="hidden lg:inline-block bg-green-800 hover:bg-green-500"
          >
            <span>Login</span>
          </Button>
          <Button
            variant="filled"
            size="sm"
            className="hidden lg:inline-block bg-green-800 hover:bg-green-500"
          >
            <span>Signup</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
          <Button
            variant="filled"
            size="sm"
            color="green"
            fullWidth
          >
            <span>Login</span>
          </Button>
          <Button
            variant="filled"
            size="sm"
            color="green"
            fullWidth
          >
            <span>Signup</span>
          </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;