import React from "react";
import { useState } from "react";
import { Cross } from "./Icon";

const Cards = () => {
  const [setIcon, setSetIcon] = useState();
  return (
    <div className="w-100">
      <div className="container w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-50 justify-content-center">
          <div className="col-sm-3">
            <div className="normal_box" onClick={() => setSetIcon(!setIcon)}>
              {setIcon && <Cross />}
            </div>
          </div>
          <div className="col-sm-3">
            <div className="normal_box" onClick={() => setSetIcon(!setIcon)}>
              {setIcon && <Cross />}
            </div>
          </div>
          <div className="col-sm-3">
            <div className="normal_box" onClick={() => setSetIcon(!setIcon)}>
              {setIcon && <Cross />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
