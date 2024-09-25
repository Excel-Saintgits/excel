import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col items-center  md:flex-row md:items-center p-4">
      {/* About */}
      <li className="flex flex-row px-10 py-5">
        <span className="text-[#35374E] font-extrabold text-base">ABOU</span>
        <span className="bg-[#0C9E8F] w-6 h-6 relative -top-1 -left-1 rounded-full text-white flex justify-center items-center opacity-70">
          <span className="relative top-1 -left-1 font-extrabold text-base">
            T
          </span>
        </span>
      </li>

      {/* Events */}
      <li className="flex flex-row px-10 py-5">
        <span className="text-[#35374E] font-extrabold text-base">EVENT</span>
        <span className="bg-[#0C9E8F] w-6 h-6 relative -top-1 -left-1 rounded-full text-white flex justify-center items-center opacity-70">
          <span className="relative top-1 -left-1 font-extrabold text-base">
            S
          </span>
        </span>
      </li>

      {/* Gallery */}
      <li className="flex flex-row px-10 py-5">
        <span className="text-[#35374E] font-extrabold text-base">GALLER</span>
        <span className="bg-[#0C9E8F] w-6 h-6 relative -top-1 -left-1 rounded-full text-white flex justify-center items-center opacity-70">
          <span className="relative top-1 -left-1 font-extrabold text-base">
            Y
          </span>
        </span>
      </li>

      {/* Contact Us */}
      <li className="flex flex-row px-10 py-5">
        <span className="text-[#35374E] font-extrabold text-base">
          CONTACT U
        </span>
        <span className="bg-[#0C9E8F] w-6 h-6 relative -top-1 -left-1 rounded-full text-white flex justify-center items-center opacity-70">
          <span className="relative top-1 -left-1 font-extrabold text-base">
            S
          </span>
        </span>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full py-4 px-4 lg:px-12 lg:py-6 bg-white">
      <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
        <div className="hidden lg:flex   ">{navList}</div>

        {/* Mobile Menu Icon */}
        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="black"
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
              fill="black"
              stroke="black"
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

      {/* Mobile Nav */}
      <MobileNav open={openNav}>
        <div className="container mx-auto align-middle ">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
