import React from "react";

import Image1 from "../assets/img/a1/m00.jpg";
import Image2 from "../assets/img/a1/m03.jpg";
import Image3 from "../assets/img/a1/m05.jpg";
import Image4 from "../assets/img/a1/m08.jpg";
import Image5 from "../assets/img/a1/m01.jpg";
import Image6 from "../assets/img/a1/m04.jpg";
import Image7 from "../assets/img/a1/m06.jpg";
import Image8 from "../assets/img/a1/m09.jpg";
import Image9 from "../assets/img/a1/m07.jpg";
import Image10 from "../assets/img/a1/m02.jpg";

import CashBox from "../assets/img/cashbox.svg";
import Stickman from "./Stickman";
import Cart from "./Cart";

const obj = [
  {
    text: "der Bücherschrank",
    image: Image1,
  },
  {
    text: "die Kaffeemaschine",
    image: Image2,
  },
  {
    text: "der Couchtisch",
    image: Image3,
  },
  {
    text: "die Wandlampe",
    image: Image4,
  },
  {
    text: "der Kleiderschrank",
    image: Image5,
  },
  {
    text: "die Spülmaschine",
    image: Image6,
  },
  {
    text: "der Esstisch",
    image: Image7,
  },
  {
    text: "die Stehlampe",
    image: Image8,
  },
  {
    text: "die Schreibtisch",
    image: Image9,
  },
  {
    text: "der Geschirrschrank",
    image: Image10,
  },
];

const Screen2 = () => {
  return (
    <div className="screen2">
      <div className="top">
        <div className="push-animation">
          <Stickman />
          <Cart level={9} />
        </div>
        <img src={CashBox} alt="" />
      </div>

      <div className="item-wrapper">
        {obj.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt="" />

            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen2;
