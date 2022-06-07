import React, { useState, useEffect, useRef, createRef } from "react";

import $ from "jquery";
import "../css/game1.css";
import StatusBar from "./../UI/StatusBar";

const Game1 = ({ nextLesson }) => {
  useEffect(() => {}, []);
  return (
    <div className="game1">
      <div id="book1"></div>
    </div>
  );
};

export default Game1;
