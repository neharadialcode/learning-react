import React, { useEffect, useState } from "react";

const PageOne = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      text: "hello hello",
      name: "text-dark",
    },
    {
      text: "hello2 hello2",
      name: "text-success",
    },
    {
      text: "hello2 hello2",
      name: "text-primary",
    },
  ];
  const changeHandler = () => {
    for (let i = 0; i <= data.length; i++) {
      if (count >= 2) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      changeHandler();
    }, 1500);
  }, [count]);

  console.log(count);

  return (
    <div className="vh-100 bg-danger text-white d-flex flex-column justify-content-center align-items-center w-100">
      {data &&
        data.map((obj, index) => (
          <h1 className={` ${count === index ? `${obj.name}` : ""}`}>
            {obj.text}
          </h1>
        ))}
    </div>
  );
};

export default PageOne;
