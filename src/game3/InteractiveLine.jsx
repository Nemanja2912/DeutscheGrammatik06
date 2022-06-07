import React from "react";

const InteractiveLine = ({ pre, post, blankRef }) => {
  return (
    <div className="interactive-line">
      {pre.length > 0 && <p>{pre}</p>}
      <div ref={blankRef} className="blank"></div>
      <p>{post}</p>
    </div>
  );
};

export default InteractiveLine;
