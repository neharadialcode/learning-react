import React, { useEffect, useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [age, setAge] = useState("");

  const setHandle = () => {
    if ((name !== "", rollno !== "")) {
      // console.log(name, rollno, age);
    }
  };

  useEffect(
    (name = "name") => {
      console.log(name, rollno, age);
    },
    [name, age]
  );

  return (
    <div>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="py-2">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-100"
                name="property"
                id=""
                placeholder="name"
              />
            </div>
            <div className="py-2">
              <input
                onChange={(e) => setRollNo(e.target.value)}
                type="text"
                className="w-100"
                name=""
                id=""
                placeholder="roll no"
              />
            </div>
            <div className="py-2">
              <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                className="w-100"
                name=""
                id=""
                placeholder="age"
              />
            </div>
            <div className="text-center mt-3">
              <button onClick={() => setHandle()}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
