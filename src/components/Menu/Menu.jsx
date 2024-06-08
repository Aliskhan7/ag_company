import React from "react";
import Link from "next/link";

function Menu() {
  return (
    <ul className="menu flex gap-x-12 flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900">
      <li>
        <Link
          aria-current="page"
          className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in"
          href="#"
        >
          О нас
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in"
          href="#"
        >
          Услуги
        </Link>
      </li>
      <li>
        <Link
          className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in"
          href="#"
        >
          Почему AG
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
