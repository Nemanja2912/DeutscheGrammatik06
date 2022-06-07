import React, { useState } from "react";

import ResultItem from "./ResultItem";

const Item = ({ item, activeScissors, finished, setFinished }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="item">
      <div className="wrapper">
        <img src={item.image} alt="" />
        <div
          className="desc"
          style={{ cursor: finished ? "default" : "pointer" }}
          onClick={() => {
            if (finished) return;

            setShow(true);
            activeScissors(true);
            setFinished();

            setTimeout(() => {
              activeScissors(false);
            }, 300);
          }}
        >
          {item.desc}
        </div>
      </div>

      <div className="item-results">
        {item.results.map((result, index) => (
          <ResultItem item={result} movable={index === 1} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Item;
