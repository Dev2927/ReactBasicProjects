import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState(" ");

  // Use Ref
  const passwordRef = useRef(null);

  // Use CallBack function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}|[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);

  // UseEffect function
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, charAllowed, numAllowed, length]);

  // Copy Password Button
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="main-container">
        <h1>Password Generator</h1>
        <div className="password-contaniner">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard}>Copy</button>
        </div>

        <div className="second-container">
          <div className="range-container">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="number-container">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>

          <div className="char-container">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
