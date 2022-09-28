import { useState, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import "./App.css";
function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");
  const input1 = useRef(color1);
  const input2 = useRef(color2);
  const inputColor1 = { background: color1 };
  const inputColor2 = { background: color2 };
  function onSubmit(e) {
    e.preventDefault();
    setColor1(input1.current.value);
    setColor2(input2.current.value);
  }
  return (
    <>
      <div className="flex  bg-gray-100 justify-center  h-screen inset-0 px-10">
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
          <h2 className="text-xl text-black text-center py-3 mt-5 font-semibold">
            Enter Colors and press Enter.
          </h2>
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
        </div>
      </div>
    </>
  );
}

export default App;
