import chroma from "chroma-js";
import { useState, useRef, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import "./App.css";
function App() {
  const [color1, setColor1] = useState("purple");
  const [color2, setColor2] = useState("orange");
  const [error, setError] = useState("");
  const [direction, setDirection] = useState("linear-gradient");
  const [generated1, setGenerated1] = useState("");
  const [generated2, setGenerated2] = useState("");
  const [generated3, setGenerated3] = useState("");
  const [orientation, setOrientation] = useState("to right bottom");
  const [invertedcolor1, setinvertedColor1] = useState("");
  const [invertedcolor2, setinvertedColor2] = useState("");
  const input1 = useRef(color1);
  const input2 = useRef(color2);
  const inputColor1 = { background: color1, color: invertedcolor1 };
  const inputColor2 = { background: color2, color: invertedcolor2 };
  function onSubmit(e) {
    e.preventDefault();
    setColor1(input1.current.value);
    setColor2(input2.current.value);
  }

  useEffect(() => {
    generateColors();
  });
  const changeOrientation = function (ori) {
    if (ori === "circle") {
      setDirection("radial-gradient");
      setOrientation(ori);
    } else {
      setDirection("linear-gradient");
      setOrientation(ori);
    }
  };

  const generateColors = function () {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      let colorSplit = chroma.scale([color1, color2]).mode("lch").colors(5);
      setGenerated1(colorSplit[1]);
      setGenerated2(colorSplit[2]);
      setGenerated3(colorSplit[3]);
      setError("");
      setinvertedColor1(checkContrast(color1));
      setinvertedColor2(checkContrast(color2));
    } else {
      setError("Color are no valid.");
    }
  };
  function checkContrast(color) {
    const contrast = chroma(color).luminance();
    if (contrast > 0.6) {
      return "#000";
    } else {
      return "#fff";
    }
  }
  const cssCode =
    direction +
    "(" +
    orientation +
    "," +
    color1 +
    "," +
    generated1 +
    "," +
    generated2 +
    "," +
    generated3 +
    "," +
    color2 +
    ");";
  const grad = {
    backgroundImage:
      direction +
      "(" +
      orientation +
      "," +
      color1 +
      "," +
      generated1 +
      "," +
      generated2 +
      "," +
      generated3 +
      "," +
      color2 +
      ")",
  };
  return (
    <>
      <div
        className="flex  bg-gray-100 justify-center  h-screen inset-0 px-10"
        style={grad}
      >
        <div className="px-4 py-6">
          <h1 className="md:text-xl  text-black font-extrabold text-center text-2xl my-10">
            A mini project by
            <a href="https://github.com/Sadik-Hossain" target={"_blank"}>
              <span className="inline-block ml-2 animate-bounce hover:border-dashed hover:border-b-2 hover:border-blue-500 transition-all">
                Sadik-Hossain
                <FiExternalLink className="inline align-baseline" />
              </span>
            </a>
          </h1>
          <h1 className="md:text-5xl text-black font-extrabold text-center text-2xl">
            <span className="text-grad ">GradGen:</span> Generate Gradient
          </h1>
          <h2 className="text-xl text-white text-center py-3 mt-2">
            Choose orientation
          </h2>

          <div className="flex items-center justify-center p-2 gap-2 flex-wrap md:gap-5">
            <button
              title="to top"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to top")}
            >
              to top
            </button>

            <button
              title="to right top"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to right top")}
            >
              to right top
            </button>

            <button
              title="to right"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to right")}
            >
              to right
            </button>

            <button
              title="to right bottom"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to right bottom")}
            >
              to right bottom
            </button>

            <button
              title="to bottom"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to bottom")}
            >
              to bottom
            </button>

            <button
              title="to bottom left"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to bottom left")}
            >
              bottom left
            </button>

            <button
              title="to left"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to left")}
            >
              left
            </button>

            <button
              title="to left top"
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("to left top")}
            >
              left top
            </button>

            <button
              className="bg-white  rounded px-2 font-semibold"
              onClick={() => changeOrientation("circle")}
            >
              radial
            </button>
          </div>
          <h2 className="text-xl text-black text-center py-3 mt-5 font-semibold">
            Enter Colors and press Enter.
          </h2>
          <div className=" text-center py-2 rounded mb-3  text-white w-40 mx-auto">
            <h2 className="bg-red-400">{error}</h2>
          </div>
          {/* 
        //* taking input
        */}
          <div className="flex items-center justify-center flex-wrap">
            <form className="flex gap-5 justify-center items-center flex-wrap">
              <input
                type="text"
                ref={input1}
                defaultValue={color1}
                className="rounded px-2 py-3 text-center shadow-2xl font-bold bg-white"
                style={inputColor1}
              />

              <input
                type="text"
                ref={input2}
                defaultValue={color2}
                className="rounded px-2 py-3 text-center shadow-2xl font-bold bg-white"
                style={inputColor2}
              />

              <input
                type="submit"
                className="hidden"
                onClick={(e) => onSubmit(e)}
              />
            </form>
          </div>
          <div className="box md:w-[640px] w-[350px] h-auto mx-auto break-all mt-4 p-2 ">
            {error ? (
              ""
            ) : (
              <p className="p-3 text-gray-200 font-mono text-base md:text-xl text-center font-semibold bg-black">
                <span className="text-gray-100">background-image: </span>
                {cssCode}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
