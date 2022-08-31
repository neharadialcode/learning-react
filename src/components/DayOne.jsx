import React from "react";
import { useState } from "react";

const DayOne = () => {
  const [error, setError] = useState(false);
  const data = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [inputValue, setInputValue] = useState(data);

  const OnsubmitHandler = (e) => {
    setError(true);
    console.log(error, "error");
    if (
      inputValue.name &&
      inputValue.email &&
      inputValue.username &&
      inputValue.password &&
      inputValue.confirmPassword
    ) {
      console.log(inputValue, "value");
    }
    // setError(false);
    // setInputValue(data.name === "");
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
              {error ? (
                inputValue.name === "" ? (
                  <p className="text-danger"> Name is required</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <div>
                <label htmlFor="">Email</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, email: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              {error ? (
                inputValue.email === "" ? (
                  <p className="text-danger"> Email is required</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <div>
                <label htmlFor="">Username</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, username: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                />
              </div>
              {error ? (
                inputValue.username === "" ? (
                  <p className="text-danger"> Username is required</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <div>
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, password: e.target.value })
                  }
                  type="password"
                  name=""
                  id=""
                />
              </div>
              {error ? (
                inputValue.password === "" ? (
                  <p className="text-danger"> password is required</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <div>
                <label htmlFor="">Confirm password</label>
                <input
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      confirmPassword: e.target.value,
                    })
                  }
                  type="password"
                  name=""
                  id=""
                />
              </div>
              {error ? (
                inputValue.confirmPassword === "" ? (
                  <p className="text-danger"> Confirm Password is required</p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
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
