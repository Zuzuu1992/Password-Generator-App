import "./App.css";
import copyIcon from "./assets/images/icon-copy.svg";
import arrowIcon from "./assets/images/icon-arrow-right.svg";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="generated-box">
          <p className="generated-pass">PTx1f5DaFX</p>
          <div className="copy-box">
            <p>Copied</p>
            <img src={copyIcon} alt="Copy Icon" />
          </div>
        </div>
        <div className="generate-process-box">
          <div className="roller-info">
            <p>Character Length</p>
            <p className="numb">10</p>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            className="roller"
            defaultValue="Default value"
          ></input>
          <div className="checks">
            <div className="check">
              <input type="checkbox" className="checkbox">
                {/* <img src={checkIcon} /> */}
              </input>
              <p>Include Uppercase Letters</p>
            </div>
            <div className="check">
              <input type="checkbox" className="checkbox"></input>
              <p>Include Lowercase Letters</p>
            </div>
            <div className="check">
              <input type="checkbox" className="checkbox"></input>
              <p>Include Numbers</p>
            </div>
            <div className="check">
              <input type="checkbox" className="checkbox"></input>
              <p>Include Symbols</p>
            </div>
          </div>
          <div className="strength-box">
            <p>Strength</p>
            <div className="level-boxes">
              <p>Medium</p>
              <div className="squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square last"></div>
              </div>
            </div>
          </div>
          <button>
            Generate
            <img src={arrowIcon} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
