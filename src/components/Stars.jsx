import React, { useState, useEffect } from "react";
import { First, List } from "./Helper";
import { starts } from "./Icon";

function Stars() {
  // Similar to componentDidMount and componentDidUpdate:

  const [smallStar, setSmallStar] = useState(0);

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center vh-100 bg_light_pink">
      <div className="d-flex justify-content-center ">
        {starts.map((obj, index) => (
          <div key={index} onClick={() => setSmallStar(index + 1)}>
            <div
              className={`mx-2 ${
                smallStar === 0
                  ? "normal"
                  : smallStar >= index + 1
                  ? "svg_color"
                  : "normal"
              }`}
            >
              <small> {obj.starUrl}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Stars;
