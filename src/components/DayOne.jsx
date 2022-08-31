import React from "react";
import { useState } from "react";

const DayOne = () => {
  const data = [
    {
      name: "",
      class: "",
      age: "",
      subject: "",
    },
  ];
  const [inputValue, setInputValue] = useState(data);
  const OnsubmitHandler = (e) => {
    console.log(inputValue, "value");
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-xl-4 col-lg-6 ">
            <div className="input_card">
              <div>
                <label htmlFor="">Name</label>
                <input
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label htmlFor="">Class</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, class: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, age: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label htmlFor="">Subject</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, subject: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="text-center">
                <button
                  className="submit_btn border-0"
                  onClick={(e) => OnsubmitHandler(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayOne;
