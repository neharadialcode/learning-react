import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EyeClose, OpenEye } from "./Icon";

const DayOne = ({ history }) => {
  const isSignUpValue = localStorage.getItem("isSignup");
  const [error, setError] = useState(false);
  const data = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [inputValue, setInputValue] = useState(data);
  const [changeState, setChangeState] = useState(false);

  // FOR INPUT TYPE CHANGE
  const [valueShow, setValueShow] = useState(false);
  const [valueShow2, setValueShow2] = useState(false);
  const [arrayData, setArrayData] = useState([]);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordRegex =
    /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i;

  const userNameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

  /**
   *
   */
  useEffect(() => {
    if (isSignUpValue === "true") {
      history.push("/");
      window.location.reload();
    }
  }, [isSignUpValue]);

  /**
   *
   * @param {event} e
   */
  const OnsubmitHandler = (e) => {
    setError(true);
    if (
      inputValue.name &&
      inputValue.email &&
      inputValue.username &&
      inputValue.password &&
      inputValue.confirmPassword !== "" &&
      emailRegex.test(inputValue.email) &&
      passwordRegex.test(inputValue.password) &&
      userNameRegex.test(inputValue.username)
    ) {
      localStorage.setItem("isSignup", true);
      arrayData.push(inputValue);
      setError(false);
      setInputValue(data);
    }
  };
  const [colorChange, setcolorChange] = useState("");
  const deleteHandler = (index) => {
    arrayData.splice(index, 1);
    setChangeState(!changeState);
  };

  useEffect(() => {
    setArrayData(arrayData);
  }, [changeState]);

  return (
    <div className="w-100 bg-primary">
      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="text-center">
            <button className="text-white border-0 bg-transparent">
              Login
            </button>
          </div>
          <div className="col-xl-4 col-lg-6 ">
            <div className="text-center">
              <input
                type="text"
                placeholder="add color"
                onChange={(e) => setcolorChange(e.target.value)}
              />
              <p style={{ color: `${colorChange}` }}>
                Hello every one type something to change color
              </p>
            </div>
            <div className="input_card bg-white">
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
                  value={inputValue.name}
                />
              </div>
              {error ? (
                inputValue.name === "" ? (
                  <p className="text-danger mb-0"> Name is required</p>
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
                  value={inputValue.email}
                />
              </div>
              {error &&
                (inputValue.email === "" ? (
                  <p className="text-danger mb-0"> Email is required</p>
                ) : error && emailRegex.test(inputValue.email) === false ? (
                  <p className="text-danger mb-0">Invalid email</p>
                ) : (
                  ""
                ))}
              <div>
                <label htmlFor="">Username</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, username: e.target.value })
                  }
                  type="text"
                  name=""
                  id=""
                  value={inputValue.username}
                />
              </div>
              {error ? (
                inputValue.username === "" ? (
                  <p className="text-danger mb-0"> Username is required</p>
                ) : (
                  userNameRegex.test(inputValue.username) === false && (
                    <p className="text-danger mb-0"> invalid username</p>
                  )
                )
              ) : (
                ""
              )}
              <div className="position-relative">
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) =>
                    setInputValue({ ...inputValue, password: e.target.value })
                  }
                  type={valueShow ? "text" : "password"}
                  name=""
                  id=""
                  value={inputValue.password}
                />
                {inputValue.password !== "" && (
                  <div
                    className="open_eye"
                    onClick={() => setValueShow(!valueShow)}
                  >
                    {valueShow ? <OpenEye /> : <EyeClose />}
                  </div>
                )}
              </div>
              {error ? (
                inputValue.password === "" ? (
                  <p className="text-danger mb-0"> password is required</p>
                ) : (
                  error &&
                  passwordRegex.test(inputValue.password) === false && (
                    <p className="text-danger mb-0"> Add strong password</p>
                  )
                )
              ) : (
                ""
              )}
              <div className="position-relative">
                <label htmlFor="">Confirm password</label>
                <input
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      confirmPassword: e.target.value,
                    })
                  }
                  type={valueShow2 ? "text" : "password"}
                  name=""
                  id=""
                  value={inputValue.confirmPassword}
                />
                {inputValue.confirmPassword !== "" && (
                  <div
                    className="open_eye"
                    onClick={() => setValueShow2(!valueShow2)}
                  >
                    {valueShow2 ? <OpenEye /> : <EyeClose />}
                  </div>
                )}
              </div>
              {error ? (
                inputValue.confirmPassword === "" ? (
                  <p className="text-danger mb-0">
                    Confirm Password is required
                  </p>
                ) : (
                  inputValue.confirmPassword !== inputValue.password && (
                    <p className="text-danger mb-0">Password not Matched</p>
                  )
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

      <div className="container">
        <div>
          {arrayData.length > 0 && (
            <table class="table table-sm table-dark">
              <thead>
                <tr>
                  <th className="ps-3" scope="col">
                    Name
                  </th>
                  <th className="ps-3" scope="col">
                    Email
                  </th>
                  <th className="ps-3" scope="col">
                    Username
                  </th>
                  <th className="ps-3" scope="col">
                    Password
                  </th>
                  <th className="ps-3" scope="col">
                    ConfirmPassword
                  </th>
                  <th className="ps-3" scope="col">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrayData &&
                  arrayData.map((obj, index) => (
                    <tr key={index}>
                      <td className="ps-3">{obj.name}</td>
                      <td className="ps-3"> {obj.email}</td>
                      <td className="ps-3"> {obj.username}</td>
                      <td className="ps-3"> {obj.password}</td>
                      <td className="ps-3"> {obj.confirmPassword}</td>
                      <td className="ps-3">
                        <button
                          onClick={() => deleteHandler(index)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayOne;
