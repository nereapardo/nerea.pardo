import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Router } from "react-router";

const Navbar = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClick = () => {
    setShowMobileMenu((val) => !val);
  };

  return (
    <>
      <nav className="bg-neon top-0 left-0 right-0 sticky z-50 shadow-md">
        <div className="w-11/12 mx-auto ">
          {/* Web header */}
          <div className="flex justify-between">
            {/* Left container */}
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <Link
                  href="/"
                  className="flex items-end pr-2 text-gray-700 hover:text-gray-900"
                >
                  <span className="text-purple-light-background font-extrabold text-xl mb-1">
                    Nerea Pardo
                  </span>
                </Link>
              </div>
              {/* Left navbar */}
              <div className="hidden md:flex items-end space-x-1">
                <Link
                  href="/"
                  className="py-5 px-3 text-gray-light hover:text-purple-light-background hover:underline"
                >
                  Home
                </Link>
                <Link
                  href="/aboutme"
                  className="py-5 px-3 text-gray-light hover:text-purple-light-background hover:underline"
                >
                  About me
                </Link>
              </div>
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
                  router.push("/aboutme");
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
