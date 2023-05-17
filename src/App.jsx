import "./App.css";
import copyIcon from "./assets/images/icon-copy.svg";
import arrowIcon from "./assets/images/icon-arrow-right.svg";
import React, { useState, useEffect } from "react";

function App() {
  const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
  const numberList = "0123456789";
  const symbolList = "!@#$%^&*()_+-=[]{}|;':,.<>?/";

  const [password, setPassword] = useState("PTx1f5DaFX");
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const generatePassword = () => {
    let charachterList = "";

    if (upperCase) {
      charachterList += upperCaseList;
    }
    if (lowerCase) {
      charachterList += lowerCaseList;
    }
    if (numbers) {
      charachterList += numberList;
    }
    if (symbols) {
      charachterList += symbolList;
    }
    let tempPassword = "";
    const charachterListLength = charachterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const charachterIndex = Math.round(Math.random() * charachterListLength);
      tempPassword += charachterList.charAt(charachterIndex);
    }
    setPassword(tempPassword);
    setIsGenerated(true);
  };

  const characterTypes = [upperCase, lowerCase, numbers, symbols];
  const selectedTypesCount = characterTypes.filter((type) => type).length;
  const strengthLevels = ["Too Weak!", "Weak", "Medium", "Strong"];

  const updatePasswordStrength = () => {
    let strength = "";

    if (selectedTypesCount === 0) {
      strength = "";
    } else {
      strength = strengthLevels[selectedTypesCount - 1];
    }

    setPasswordStrength(strength);
  };

  const getLevelBackgroundColor = (levelIndex, activeCount) => {
    const colors = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];
    if (levelIndex < activeCount) {
      const color = colors[activeCount - 1];
      return {
        backgroundColor: color,
        border: `2px solid ${color}`,
      };
    }
    return {};
  };

  useEffect(() => {
    updatePasswordStrength();
  }, [upperCase, lowerCase, numbers, symbols]);

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1300);
      });
    }
  };

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="generated-box">
          <div className={`generated-pass ${isGenerated ? "generated" : ""}`}>
            {password}
          </div>
          <div className="copy-box">
            {isCopied && <p>COPIED</p>}
            <img src={copyIcon} alt="Copy Icon" onClick={copyPassword} />
          </div>
        </div>
        <div className="generate-process-box">
          <div className="roller-info">
            <p>Character Length</p>
            <p className="numb">{passwordLength}</p>
          </div>
          <div className="range-box">
            <input
              type="range"
              min="0"
              max="20"
              className="roller"
              defaultValue={passwordLength}
              onChange={(event) => setPasswordLength(event.currentTarget.value)}
            ></input>
            <div
              className="green-line"
              style={{ width: `${passwordLength * 5}% ` }}
            ></div>
          </div>
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
              <p>{passwordStrength ? `${passwordStrength}` : ""}</p>
              <div className="squares">
                <div className="squares">
                  <div className="squares">
                    {characterTypes.map((_, index) => (
                      <div
                        key={index}
                        className="square"
                        style={getLevelBackgroundColor(
                          index,
                          characterTypes.filter((checkbox) => checkbox).length
                        )}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={generatePassword}>
            Generate
            <img src={arrowIcon} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
