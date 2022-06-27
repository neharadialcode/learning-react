import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [rollno, setRollNo] = useState("");
  const [age, setAge] = useState("");

  const setHandle = () => {
    if ((name !== "", rollno !== "")) {
    }
  };

  useEffect(
    (name = "name") => {
      console.log(name, rollno, age);
    },
    [name, age]
  );

  const [value, setValue] = useState({
    name: "",
    email: "",
    rollNo: "",
  });
  const [saveValue, setSaveValue] = useState();
  console.log(saveValue, "saveValue");

  const [count, setCount] = useState(0);

  function minusCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function plustCount() {
    if (count < 10) {
      setCount(count + 1);
      function Neew() {
        setCount(count - 1);
      }
    }
  }

  return (
    <div className="w-100">
      <div className="container w-100 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="py-2">
              <input
                value={value.name}
                onChange={(e) =>
                  setValue(() => ({
                    ...value,
                    name: e.target.value,
                  }))
                }
                type="text"
                className="w-100"
                name="property"
                id=""
                placeholder="name"
              />
            </div>
            <div className="py-2">
              <input
                onChange={(e) =>
                  setValue(() => ({
                    ...value,
                    rollNo: e.target.value,
                  }))
                }
                value={value.rollNo}
                type="number"
                className="w-100"
                name=""
                id=""
                placeholder="roll no"
              />
            </div>
            <div className="py-2">
              <input
                onChange={(e) =>
                  setValue(() => ({
                    ...value,
                    email: e.target.value,
                  }))
                }
                value={value.email}
                type="email"
                className="w-100"
                name=""
                id=""
                placeholder="age"
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" onClick={() => setSaveValue(value)}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div>
          <button onClick={minusCount} className="bg-transparent mx-2">
            minus
          </button>
          <small className="position-relative ">{count}</small>
          <button onClick={plustCount} className="bg-transparent mx-2">
            plus
          </button>
          {/* <button onClick={() => new}></button> */}
        </div>
      </div>
    </div>
  );
};
export default Form;
