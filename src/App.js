import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState("");
  const [print, setPrint] = useState(false);

  useEffect(() => {
    arrOfState.map((char) => {
      if (charMap[char]) {
        charMap[char] === 1;
      } else {
        charMap[char] = 1;
      }
    });
    // console.log(arrOfState);
    // console.log(charMap);

    // const charKey = Object.keys(charMap);
    // console.log(charKey);

    // const charValue = Object.values(charMap);
    // console.log(charValue);
  });

  function inputChange(e) {
    setState(e.target.value);
    setPrint(false);
  }

  function printData() {
    setPrint(true);
    console.log(arrOfState);
    console.log(charMap);
  }

  const [...arrOfState] = state;
  const charMap = {};

  return (
    <div className="App">
      <h1>Count Characters & Print on Console</h1>
      {print ? <h2 style={{ color: "green" }}>{state}</h2> : null}
      <input type="text" placeholder="Enter Text" onChange={inputChange} />{" "}
      <button onClick={printData}>Print</button>
      <h3>Total Characters Count : {state.length}</h3>
    </div>
  );
}
