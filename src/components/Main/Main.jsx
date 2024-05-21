"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import mainBg from "../../../public/assets/images/main-bg.svg";
import { useForm } from "react-hook-form";
import Spin from "../../../public/assets/images/Icons/Spin";
import Success from "../../../public/assets/images/Icons/Success";
function Main() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function fakeApi(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);
    await fakeApi(data);
    setLoading(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-input_block">
              <input
                type="email"
                className="input"
                placeholder="Your business email..."
                {...register("email", {
                  required: "Email is a required field",
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="mt-3">
              {errors?.email && (
                <p className="text-red-500">
                  {errors?.email?.message || "Please enter a valid email"}
                </p>
              )}
            </div>

            <div className="btn-input">
              {loading ? (
                <div className="spinner">
                  <Spin />
                </div>
              ) : success ? (
                <Success />
              ) : (
                <input
                  type="submit"
                  value="Free trial"
                  className="cursor-pointer bg-blue-200 py-3 px-9 text-md hover:bg-blue-100 duration-150 ease-in  rounded-full text-white"
                />
              )}
            </div>
          </form>
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
