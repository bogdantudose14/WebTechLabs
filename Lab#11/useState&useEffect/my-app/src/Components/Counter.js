import React, { useState } from "react";
import "./Counter.css";

//the React import is optional

function Counter() {
  // useState() is a hook that returns an array: [variable,variableSetter]
  // the parameter inside useState() is the initial value of the variable
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      {/* bind JS code/variable inside JSX code by using {} */}
      <p>Current count: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Counter;
