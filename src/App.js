import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const names = "karthick".toUpperCase().split("");
  const [aryActive, setAryActive] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]);

  const letterHandler = (idx, val) => {
    setAryActive(
      aryActive.map((active, i) => {
        if (i === idx) {
          active = val;
        }
        return active;
      })
    );
  };

  return (
    <React.Fragment>
      <h2>Start clicking the letters!</h2>
      <div className="word">
        {names.map((el, idx) => (
          <span
            className={aryActive[idx] === true ? "active" : ""}
            key={idx}
            onClick={() => letterHandler(idx, true)}
            onAnimationEnd={() => letterHandler(idx, false)}
          >
            {el}
          </span>
        ))}
      </div>
    </React.Fragment>
  );
}
