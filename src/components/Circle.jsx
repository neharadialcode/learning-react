import React from "react";

const Circle = () => {
  const data = [
    {
      para: "dfghjbk",
    },
    {
      para: "dfghjbk",
    },
    {
      para: "dfghjbk",
    },
    {
      para: "dfghjbk",
    },
    {
      para: "dfghjbk",
    },
    {
      para: "dfghjbk",
    },
  ];
  return (
    <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row parent_main">
        {/* {data.map((obj, index) => (
          <div
            key={index}
            className={`text-center parent`}
            style={{ width: `${100 / data.length}%` }}
          >
            <h1>{obj.para}</h1>
          </div>
        ))} */}
        {data.map((obj, index) => (
          <div
            key={index}
            className={`text-center parent_new`}
            style={{ width: `${100 / data.length}%` }}
          >
            <p>{obj.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circle;
