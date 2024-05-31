import React from "react";
import Menu from "@/components/Menu/Menu";
import Logo from "../../../public/assets/Logo";
import Button from "@/components/Button/Button";

function Header() {
  return (
    <header className="header py-4 relative z-20">
      <nav class="  fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl items-center flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <Button
              classStyle="text-base hover:bg-blue-300 duration-150 ease-in"
              name="Заказать"
              bg="bg-blue-400"
              p="px-9 py-3.5"
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <Menu />
          </div>
        </div>
      </nav>

      {/*<div className="container mx-auto flex justify-between items-center">*/}
      {/*  <Logo />*/}
      {/*  <Menu />*/}
      {/*  <Button*/}
      {/*    classStyle="text-base hover:bg-blue-300 duration-150 ease-in"*/}
      {/*    name="Заказать"*/}
      {/*    bg="bg-blue-400"*/}
      {/*    p="px-9 py-3.5"*/}
      {/*  />*/}
      {/*</div>*/}
    </header>
  );
}

export default Header;
