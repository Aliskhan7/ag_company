import React from "react";
import Image from "next/image";
import img1 from "../../../public/assets/images/solution-img-1.svg";
import img2 from "../../../public/assets/images/solution-img-2.svg";
import img3 from "../../../public/assets/images/solution-img-3.svg";

const data = [
  {
    img: img1,
    title: "Оптимизация бизнес-процессов:",
    desc: "Мы анализируем ваши бизнес-процессы и внедряем инновационные решения для их оптимизации, снижая затраты и повышая эффективность.",
  },
  {
    img: img2,
    title: "Персонализированные стратегии",
    desc: "Мы разрабатываем уникальные стратегии, учитывающие ваши специфические потребности и цели, обеспечивая идеальные решения для вашего бизнеса.",
  },
  {
    img: img3,
    title: "Постоянная поддержка и улучшение",
    desc: "Мы предлагаем постоянную поддержку и обновления, чтобы ваше приложение оставалось актуальным и эффективным, обеспечивая бесперебойную работу и развитие",
  },
];
function SectionSolution() {
  return (
    <section className="solution mb-8 px-5 sm:px-0">
      <div className="max-w-[780px] mx-auto">
        <h2 className="text-4xl text-white mb-5 text-center">
          Инновационные решения для повышения операционной эффективности
        </h2>
        <p className="subtitle-section text-center">
          Индивидуальный опыт AG company, способствующий развитию вашего
          бизнеса. Индивидуальные решения для роста и развития.
        </p>
      </div>
      <div className="solution-item grid grid-cols-1 gap-y-10 gap-x-10 mt-14 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div className="solution-border">
              <div className=" rounded-2xl">
                <Image
                  className="w-[100%]"
                  height={277}
                  src={item.img}
                  alt="img"
                />
                <div className="px-8 pb-8">
                  <h4 className="title-section-inners mb-3">{item.title}</h4>
                  <p className="subtitle-section-inners">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionSolution;
