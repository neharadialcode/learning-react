import React from "react";
import { useState } from "react";
import { ballData } from "./Icon";

const PageTwo = () => {
  const [ball, setBall] = useState();
  return (
    <div className="vh-100 bg-success text-white d-flex flex-column justify-content-center align-items-center w-100">
      <div className="d-flex">
        {ballData.map((obj, index) => (
          <div onClick={() => setBall(index)} key={index} className="px-2">
            <small className={ball >= index ? "fill_blue" : ""}>
              {obj.starUrl}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageTwo;
