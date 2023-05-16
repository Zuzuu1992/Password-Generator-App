import "./App.css";
import copyIcon from "./assets/images/icon-copy.svg";
import arrowIcon from "./assets/images/icon-arrow-right.svg";
import { useState } from "react";

function App() {
  // const [copied, setCopied] = useState(false);
  // const [rangeValue, setRangeValue] = useState(10);
  // const [buttonClicked, setButtonClicked] = useState(false);

  // const copyClickHandler = () => {
  //   if (generatedPass) {
  //     navigator.clipboard.writeText(generatedPassword).then(() => {
  //       setCopied(true);
  //       setTimeout(() => {
  //         setCopied(false);
  //       }, 1300);
  //     });
  //   }
  // };

  // const [generatedPass, setGeneratedPass] = useState("");
  // const [isGenerated, setIsGenerated] = useState(false);

  // const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  // const numbers = "0123456789";
  // const symbols = "!@#$%^&*()_+-=[]{}|;':\",.<>?/";

  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);

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
            <p className="numb">{passwordLength}</p>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            className="roller"
            defaultValue="Default value"
            onChange={(event) => setPasswordLength(event.currentTarget.value)}
          ></input>
          <div className="checks">
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                checked={upperCase}
                onChange={() => setUpperCase(!upperCase)}
              ></input>
              <p>Include Uppercase Letters</p>
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                checked={lowerCase}
                onChange={() => setLowerCase(!lowerCase)}
              ></input>
              <p>Include Lowercase Letters</p>
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
              ></input>
              <p>Include Numbers</p>
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="checkbox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
              ></input>
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
