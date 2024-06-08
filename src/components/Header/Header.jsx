"use client";
import React, { useState } from "react";
import Logo from "../../../public/assets/Logo";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
function Header() {
  const [menu, setMenu] = useState(false);

  const handlerMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header py-4 relative z-20">
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <Button
              classStyle="text-base hover:bg-blue-300 duration-150 ease-in"
              name="Заказать"
              bg="bg-transparet"
              p="px-9 py-3.5"
            />
            <button
              onClick={handlerMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className={`w-full ${menu ? "block" : "hidden"} `}>
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
