"use client";
import React from "react";
import Image from "next/image";
import mainBg from "../../../public/assets/images/main-bg.svg";
function Main() {
  return (
    <main className="main">
      <div className="container flex justify-between items-center py-20 mx-auto gap-x-10">
        <div className="z-10">
          <h1 className="main-title">
            Воплощаем <br /> ваши идеи в цифровую реальность
          </h1>
          <p className="text-xl text-gray-200 pt-7 pb-8 font-thin">
            Мы предлагаем полный цикл разработки веб-приложений: от идеи до
            готового продукта. Наши решения помогают вашему бизнесу расти и
            процветать в цифровом мире.
          </p>
        </div>
        <div className="relative">
          <div className="ellips-img"></div>
          <Image
            className="z-10 main-bg"
            width={756}
            height={587}
            src={mainBg}
            alt="main-img"
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
