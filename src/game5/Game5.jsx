import React, { useState } from "react";
import Screen from "./Screen";

import Image0 from "../assets/img/a5/d00.jpg";
import Image1 from "../assets/img/a5/d01.jpg";
import Image2 from "../assets/img/a5/d02.jpg";
import Image3 from "../assets/img/a5/d03.jpg";
import Image4 from "../assets/img/a5/d04.jpg";
import Image5 from "../assets/img/a5/d05.jpg";
import Image6 from "../assets/img/a5/d06.jpg";
import Image7 from "../assets/img/a5/d07.jpg";
import Image8 from "../assets/img/a5/d08.jpg";
import Image9 from "../assets/img/a5/d09.jpg";
import Image10 from "../assets/img/a5/d10.jpg";
import Image11 from "../assets/img/a5/d11.jpg";

const images = [
  [Image0, Image1, Image2, Image3, Image4, Image5],
  [Image6, Image7, Image8, Image9, Image10, Image11],
];

const answer = [
  [
    [1, 1],
    [0, 1],
    [1, 2],
    [0, 0],
    [1, 1],
    [0, 1],
  ],
  [
    [0, 0],
    [1, 2],
    [0, 0],
    [1, 2],
    [0, 0],
    [1, 0],
  ],
];

const interactiveWords = [
  [
    ["der Computer", "die Möbel", "das Papier"],
    ["der Plan", "die Reise", "das Auto"],
    ["der Verkäufer", "die Firma", "das Geschäft"],
    ["der Bus", "das Ticket", "der Tourist"],
    ["der Mann", "die Straße", "das Zentrum"],
    ["die Polizei", "die Nacht", "das Café"],
  ],
  [
    ["das Tennis", "die Hand", "der Schnee"],
    ["der Junge", "die Tasche", "das Spiel"],
    ["der Tisch", "die Hand", "der Rasen"],
    ["der Leiter", "die Zeit", "das Feld"],
    ["der Computer", "die Wand", "das Glas"],
    ["die Maus", "der Hase", "das Hockey"],
  ],
];

const dropWords = [
  [
    ["das Büro", "das Büro"],
    ["das Büro", "die Möbel"],
    ["die Reise", "die Möbel"],
    ["die Reise", "die Geschäft"],
    ["der Bus", "das Geschäft"],
    ["der Bus", "die Straße"],
  ],
  [
    ["der Ball", "der Ball"],
    ["das Tennis", "der Ball"],
    ["das Tennis", "das Spiel"],
    ["das Tisch", "das Spiel"],
    ["der Tisch", "das Feld"],
    ["der Computer", "das Feld"],
  ],
];

const tapeWords = [
  [
    ["die", ["Büro", "möbel"]],
    ["das", ["Reise", "büro"]],
    ["das", ["Möbel", "geschäft"]],
    ["die", ["Bus", "reise"]],
    ["die", ["Geschäft", "straße"]],
    ["der", ["Nacht", "bus"]],
  ],
  [
    ["der", ["Tennis", "ball"]],
    ["das", ["Ball", "spiel"]],
    ["das", ["Tisch", "tennis"]],
    ["das", ["Spiel", "feld"]],
    ["der", ["Computer", "tisch"]],
    ["die", ["Feld", "maus"]],
  ],
];

const Game5 = () => {
  const [level, setLevel] = useState(0);

  return (
    <>
      {answer.map((answ, index) => {
        return (
          <>
            {level === index && (
              <Screen
                next={() => setLevel(index + 1)}
                answer={answ}
                interactiveWords={interactiveWords[index]}
                dropWords={dropWords[index]}
                tapeWords={tapeWords[index]}
                images={images[index]}
                index={index}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default Game5;
