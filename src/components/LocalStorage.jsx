import React, { useState } from "react";
import { EyeClose, OpenEye } from "./Icon";

const LocalStorage = () => {
  const [activeIcon, setActiveIcon] = useState(false);
  const localValue = localStorage.getItem("neha");

  const handleClick = () => {
    localStorage.setItem("neha", true);
  };
  // console.log(localValue, "localValue");

  const handleRemove = () => {
    localStorage.removeItem("neha");
  };
  const ar = [
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
  ];
  const [dummyAr, setDummyAr] = useState([]);
  const [dummyAr2, setDummyAr2] = useState(false);
  const clickHandler = () => {
    setDummyAr2(true);
    setDummyAr(ar);
  };

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-5">
          <div>
            <small onClick={handleClick}>
              {activeIcon === "true" ? <OpenEye /> : <EyeClose />}
            </small>
            <button onClick={handleRemove}>remove state</button>
            <input className="w-100" type="" name="" id="" placeholder="Name" />
          </div>
          <div className="pt-5">
            <button onClick={clickHandler}>Show</button>
            {dummyAr2 &&
              dummyAr.map((obj, index) => (
                <button className="mx-3" key={index}>
                  {obj.value}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalStorage;
