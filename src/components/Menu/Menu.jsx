import React from "react";
import Link from "next/link";

function Menu() {
  return (
    <ul className="flex gap-x-12">
      <li className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in">
        <Link href="#">О нас</Link>
      </li>
      <li className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in">
        <Link href="#">Услуги</Link>
      </li>
      <li className="text-gray-200 text-md hover:text-gray-100 duration-150 ease-in">
        <Link href="#">Почему AG</Link>
      </li>
    </ul>
  );
}

export default Menu;
