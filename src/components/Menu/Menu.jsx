import React from "react";
import Link from "next/link";

function Menu() {
  return (
    <ul className="flex gap-x-12">
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
