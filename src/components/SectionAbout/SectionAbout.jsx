import React from "react";
import Button from "@/components/Button/Button";

function SectionAbout() {
  return (
    <section className="about text-center flex flex-col mx-auto items-center pt-8 pb-44">
      <h2 className="about-title">Готовы улучшить свою стратегию с AG?</h2>
      <p className="text-white text-xl font-thin mt-5 mb-10">
        Свяжитесь с нами, чтобы узнать, как AG может помочь вашему бизнесу.
      </p>
      <div className="flex gap-x-4">
        <Button
          name="Contact us"
          bg="bg-blue-200"
          p="px-9 py-3"
          classStyle="hover:bg-blue-100 duration-150 ease-in"
        />
        <Button
          classStyle="hover:bg-blue-300 duration-150 ease-in"
          name="Try for free"
          bg="bg-blue-400"
          p="px-9 py-3"
        />
      </div>
    </section>
  );
}

export default SectionAbout;
