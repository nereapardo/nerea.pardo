import { useState } from "react";
import { useRouter } from "next/router";
import { Router } from "react-router";
import NavLink from "components/atoms/nav-link";
import Link from "components/atoms/link";

const Navbar = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClick = () => {
    setShowMobileMenu((val) => !val);
  };

  return (
    <>
      <nav className="bg-neon top-0 left-0 right-0 sticky z-50 shadow-md py-2">
        <div className="w-11/12 mx-auto flex justify-between">
          <div>
            <Link href="/" type="unstyled" className="font-bold text-xl mb-1">
              Nerea Pardo
            </Link>
          </div>
          {/* Left navbar */}
          <div className="hidden md:flex items-end space-x-6">
            <NavLink href="/" exact className="">
              Home
            </NavLink>
            <NavLink href="/about-me" exact>
              About me
            </NavLink>
          </div>
          {/* Mobile btn */}
          <div className="md:hidden flex items-center">
            <button onClick={handleClick} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="md:hidden flex flex-col">
            <>
              <button
                onClick={() => {
                  router.push("/");
                  handleClick();
                }}
                className="text-gray-light hover:text-purple-light-background hover:underline"
              >
                Home
              </button>
              <button
                onClick={() => {
                  router.push("/about-me");
                  handleClick();
                }}
                className="text-gray-light hover:text-purple-light-background hover:underline"
              >
                About me
              </button>
            </>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
