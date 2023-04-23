import React, { useState } from "react";

export default function Textform(props) {
  const uppercasefire = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const lowercasefire = () => {
    // console.log("Uppercase was clicked");
    let newtext2 = text.toLowerCase();
    settext(newtext2);
  };
  const clearfire = () => {
    let newtext3 = "";
    settext(newtext3);
  };
  const doublefire = () => {
    let newtext4 = text + text;
    settext(newtext4);
  };
  const speakfire = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handlefired = (event) => {
    // console.log("on change");
    settext(event.target.value);
  };

  const [text, settext] = useState("");

  return (
    <>
    <div className="colorbadlta" style={{
                color: props.mymode === "dark" ? "white" : "black",
              }}>

      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mymode === "dark" ? "#01082e" : "white",
              color: props.mymode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={handlefired}
          ></textarea>
        </div>

        <button id="tajinder" className="btn btn-warning" onClick={uppercasefire}>
          Convert to upper case
        </button>
        <button className="btn btn-warning mx-3" onClick={lowercasefire}>
          Convert to lower case
        </button>
        <button className="btn btn-warning" onClick={clearfire}>
          Clear
        </button>
        <button className="btn btn-warning mx-3" onClick={doublefire}>
          Double your text
        </button>
        <button className="btn btn-warning mx-3" onClick={speakfire}>
          Speak
        </button>
      </div>
      <div className="container" my-2="true">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} letters
        </p>
        <p>It may take approx {0.08 * text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text to preview your text here"}</p>
      </div>
    </div>
    </>
  );
}
