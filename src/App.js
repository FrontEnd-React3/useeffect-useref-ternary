import React, { useState, useEffect, useRef } from "react";

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if (count === 4) {
    //   setCount(0);
    //   out.current = "Limit";
    // } else {
    //   out.current = "";
    // }
    (count === 4) ? (out.current = "Limit", setCount(0)) : (out.current = "");
  }, [count]);
  // Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

  const out = useRef(null);
  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Add the counter</button>
      <h2>{count}</h2>
      <h2>{out.current}</h2>
    </div>

  )
}





export default App;
