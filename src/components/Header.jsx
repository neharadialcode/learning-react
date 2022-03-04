import React, { useState } from "react";

const Header = () => {
  const nameChangeHandler = (event) => {
    console.log(event.target.name);
  };
  const rollNoChangeHandler = (event) => {
    console.log(event.target.name);
  };
  const ageChangeHandler = (event) => {
    console.log(event.target.name);
  };

  const [count, setCount] = useState(0);
  function decreamentCount() {
    setCount(count - 1);
  }

  function increamentCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="py-2">
              <label className="px-5">Name:</label>
              <input
                onChange={nameChangeHandler}
                type="text"
                name="Name"
                id=""
                placeholder="name"
              />
            </div>
            <div className="py-2">
              <label className="px-5" htmlFor="">
                Roll No:
              </label>
              <input
                onChange={rollNoChangeHandler}
                type="text"
                name="Roll No"
                id=""
                placeholder="roll no"
              />
            </div>
            <div className="py-2">
              <label className="px-5" htmlFor="">
                Age:
              </label>
              <input
                onChange={ageChangeHandler}
                type="text"
                name=""
                id=""
                placeholder="age"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <button onClick={decreamentCount} className="btn-dark px-2 mx-2">
              -
            </button>
            <span>{count}</span>
            <button onClick={increamentCount} className="btn-dark px-2 mx-2">
              +
            </button>
          </div>
          <div>
            <p className="two box">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              ipsam natus vero magnam nihil cum possimus quo laudantium aperiam
              odit ipsum at voluptate praesentium dolore modi voluptatibus
              labore, molestiae amet. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eveniet, ipsam natus vero magnam nihil cum
              possimus quo laudantium aperiam odit ipsum at voluptate
              praesentium dolore modi voluptatibus labore, molestiae amet. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ipsam
              natus vero magnam nihil cum possimus quo laudantium aperiam odit
              ipsum at voluptate praesentium dolore modi voluptatibus labore,
              molestiae amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
