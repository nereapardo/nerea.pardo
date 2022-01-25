import { useState } from "react";
import { useRouter } from "next/router";
import { Router } from "react-router";
import NavLink from "components/atoms/nav-link";
import Link from "components/atoms/link";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuModal = () => {
    setIsOpen((val) => !val);
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
          <div className="hidden md:flex items-end space-x-6 ">
            <NavLink href="/" exact>
              Home
            </NavLink>
            <NavLink href="/about-me" exact>
              About me
            </NavLink>
          </div>
          {/* Mobile btn */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuModal}>
              {isOpen ? (
                <span className="text-xl w-6 h-6 inline-flex justify-center items-center">
                  X
                </span>
              ) : (
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
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={handleMenuModal}
            className="fixed z-10 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-100" />
              <div className="relative rounded flex flex-col justify-center w-screen h-screen space-y-20 text-3xl">
                <button onClick={handleMenuModal}>
                  <NavLink href="/" exact className="text-neon">
                    Home
                  </NavLink>
                </button>
                <button
                  onClick={() => {
                    handleMenuModal();
                  }}
                >
                  <NavLink href="/about-me" exact className="text-neon">
                    About me
                  </NavLink>
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </nav>
    </>
  );
};
export default Navbar;
