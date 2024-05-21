import React from "react";
import icon_1 from "../../../public/assets/images/Icons/icon-view-1.svg";
import icon_2 from "../../../public/assets/images/Icons/icon-view-2.svg";
import iconView_1 from "../../../public/assets/images/user-view-1.png";
import iconView_2 from "../../../public/assets/images/user-view-2.png";
import Image from "next/image";

function SectionView() {
  return (
    <section className="views grid grid-cols-2 gap-x-20 items-center">
      <div className="py-56 ">
        <Image
          className="icon-item__view"
          width="100%"
          height="100%"
          src={icon_1}
          alt="icon"
        />
        <p className="text-white text-2xl font-thin">
          Thanks to DevOptima, our team can focus more on <b>innovation</b> and
          less on operational challenges. Their
          <b> cloud management solutions</b> are top-notch.
        </p>
        <div className="flex items-center gap-x-3 mt-8">
          <Image width={44} height={44} src={iconView_1} alt="user-img" />
          <div>
            <h4 className="text-white text-lg mb-1 font-light">John Smith</h4>
            <span className="subtitle-section-inners">
              IT Director at Reflex
            </span>
          </div>
        </div>
      </div>
      <div className="py-56 ">
        <Image
          className="icon-item__view"
          width="100%"
          height="100%"
          src={icon_2}
          alt="icon"
        />
        <p className="text-white text-2xl font-thin">
          DevOptima has been a game-changer for us. With their support, we've
          shifted our focus
          <b> from operational hurdles to pushing boundaries in innovation.</b>
        </p>
        <div className="flex items-center gap-x-3 mt-8">
          <Image width={44} height={44} src={iconView_2} alt="user-img" />
          <div>
            <h4 className="text-white text-lg mb-1 font-light">Jane Doe</h4>
            <span className="subtitle-section-inners">
              Tech Lead at Dribble
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionView;
