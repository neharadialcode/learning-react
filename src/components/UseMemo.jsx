import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "red",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change color
      </button>
      <div style={themeStyle} className="ps-1">
        {doubleNumber}
      </div>
    </div>
  );
};

export default UseMemo;
function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
