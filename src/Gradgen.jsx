import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";

const Gradgen = () => {
  const [color1, setColor1] = useState("#FF6347");
  const [color2, setColor2] = useState("#0000FF");

  return (
    <div
      className="flex items-center bg-gray-900 justify-center md:fixed h-screen inset-0 px-10"
      // style={ulStyle}
    >
      <h1>Hello </h1>
    </div>
  );
};

export default Gradgen;
