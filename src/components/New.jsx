import React, { useState, useEffect } from "react";
import { First, List } from "./Helper";
import { starts } from "./Icon";

function Example() {
  // Similar to componentDidMount and componentDidUpdate:

  const [smallStar, setSmallStar] = useState(0);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5  pt-5">
        {starts.map((obj, index) => (
          <div key={index} onClick={() => setSmallStar(index + 1)}>
            <div
              className={`mx-2 ${
                smallStar === 0 ? "" : smallStar >= index + 1 ? "svg_color" : ""
              }`}
            >
              <span> {obj.starUrl}</span>
              {console.log(setSmallStar, smallStar, "setSmallStar")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Example;
