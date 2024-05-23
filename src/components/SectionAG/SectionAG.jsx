import React from "react";
import devImg from "../../../public/assets/images/devoptimaImg.svg";
import icon_1 from "../../../public/assets/images/Icons/icon-1.svg";
import icon_2 from "../../../public/assets/images/Icons/icon-2.svg";
import icon_3 from "../../../public/assets/images/Icons/icon-3.svg";
import icon_4 from "../../../public/assets/images/Icons/icon-4.svg";
import Image from "next/image";

const dataDev = [
  {
    icon: icon_1,
    title: "Профессионализм и опыт",
    desc: "Наша команда состоит из экспертов с многолетним опытом в разработке веб-приложений.",
  },
  {
    icon: icon_2,
    title: "Индивидуальный подход",
    desc: "Мы создаем уникальные решения, полностью соответствующие вашим бизнес-требованиям.",
  },
  {
    icon: icon_3,
    title: "Высокое качество",
    desc: "Мы используем современные технологии и строго контролируем все этапы разработки.",
  },
  {
    icon: icon_4,
    title: "Соблюдение сроков",
    desc: "Мы ценим ваше время и всегда сдаем проекты вовремя, без ущерба для качества.",
  },
];
function SectionAG() {
  return (
    <section className="flex justify-between items-center gap-x-20 py-32">
      <Image width={630} src={devImg} alt="devimg" />
      <div>
        <h2 className="text-white text-5xl font-light mb-5">Почему AG?</h2>
        <p className="text-gray-200 text-xl font-thin">
          AG Company предоставляет профессиональные услуги по разработке
          веб-приложений, предлагая индивидуальные решения для вашего бизнеса.
          Мы гарантируем высокое качество, надёжность и соблюдение сроков.
        </p>
        <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-10">
          {dataDev.map((data) => {
            return (
              <div>
                <Image className="icon-item" src={data.icon} alt="icon" />
                <h4 className="title-section-inners mb-2">{data.title}</h4>
                <p className="subtitle-section-inners">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionAG;
