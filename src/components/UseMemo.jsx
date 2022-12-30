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
    <div className="d-flex flex-column justify-content-center align-content-center w-100 ">
      <div className="row justify-content-center mx-0">
        <div className="col-3 ">
          <input
            className="w-100"
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <div style={themeStyle} className="ps-1 mt-2 py-1 rounded">
            {doubleNumber}
          </div>
          <div className="py-2">
            <button
              className="btn btn-dark"
              onClick={() => setDark((prevDark) => !prevDark)}
            >
              change color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
