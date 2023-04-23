import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";

function App() {
  const [mode, setMode] = useState("light");

  const switchmode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#01082e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // const colorpurple = () => {
  //   setMode("dark");
  //   document.body.style.backgroundColor = "#800080";
  // };
  // const colorbrown = () => {
  //   setMode("dark");
  //   document.body.style.backgroundColor = "#a52a2a";
  // };
  // const colorgreen = () => {
  //   setMode("dark");
  //   document.body.style.backgroundColor = "#c0c0c0";
  // };

  return (
    <>
      <div className="change">
        <Navbar
          id="nav"
          tittle="Textutils"
          aboutme="About us"
          mymode={mode}
          switchmode={switchmode}
          // purple={colorpurple}
          // brown={colorbrown}
          // green={colorgreen}
        />
        <div className="container" my-3="true">
          <Textform heading="Enter your text here" mymode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
