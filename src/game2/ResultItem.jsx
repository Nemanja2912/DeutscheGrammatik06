import React, { useEffect, useState } from "react";

import Image1 from "../assets/img/a2/arbeiten.jpg";

const ResultItem = ({ item, show, movable }) => {
  const [pos, setPos] = useState([-95, -67]);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setPos((prev) => {
          prev[0] = -150;

          return [...prev];
        });
        setOpacity(1);

        setTimeout(() => {
          setPos([0, 0]);
        }, 550);
      }, 500);
    }
  }, [show]);

  return (
    <div className={`result-item ${show ? "show" : ""}`}>
      <div className="result-desc">
        {item.desc.map((text, index) => {
          if (movable) {
            return (
              <span
                key={index}
                className={`${index === 0 && "movable"}`}
                style={{
                  left: index === 0 ? pos[0] : 0,
                  top: index === 0 ? pos[1] : 0,
                  opacity: index === 0 ? opacity : 1,
                }}
              >
                {text}
              </span>
            );
          } else {
            return <React.Fragment key={index}>{text}</React.Fragment>;
          }
        })}
      </div>
      <img src={item.image} alt="" />
    </div>
  );
};

export default ResultItem;
