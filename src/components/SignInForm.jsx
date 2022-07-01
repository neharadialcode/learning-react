import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Eye, EyeCross } from "./Icon";
import { InlineWidget } from "react-calendly";

const SignInForm = ({ history }) => {
  const initialState = {
    name: "",
    email: "",
    userName: "",
    password: "",
    confPassword: "",
  };
  const [dataArray, setDataArray] = useState([]);
  const [value, setValue] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [error, setError] = useState(false);

  const onSumbitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      value.email &&
      value.name &&
      value.password &&
      value.userName &&
      value.confPassword &&
      regex.test(value.email) === true &&
      passRegex.test(value.password) === true
    ) {
      console.log("value", value);
      setDataArray((prevState) => [...prevState, value]);
      setValue(initialState);
      setError(false);
      history.push("/list");
    }
  };
  const deleteHandler = (index) => {
    const duplicateArray = [...dataArray];
    const newArray = duplicateArray.filter((value, i) => i !== index);
    setDataArray(newArray);
    console.log(newArray, "newArray");
  };

  const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="w-100 sign_in vh-100 d-flex flex-column justify-content-center position-relative">
      <div className="container w-100 py-4">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form action="">
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
                  id="1"
                  placeholder="name"
                />
                <p className="text-danger mb-0">
                  {error && value.name === "" ? "name is requried" : ""}
                </p>
              </div>
              <div className="py-2">
                <input
                  onChange={(e) =>
                    setValue(() => ({
                      ...value,
                      userName: e.target.value,
                    }))
                  }
                  value={value.userName}
                  type="text"
                  className="w-100"
                  name=""
                  id="2"
                  placeholder="user name"
                />
                <p className="text-danger mb-0">
                  {error && value.userName === "" ? (
                    "roll no is requried"
                  ) : value.userName === "" ? (
                    ""
                  ) : value.userName.includes("_") ? (
                    <small className="text-green">exist</small>
                  ) : (
                    <small>not exist</small>
                  )}
                </p>
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
                  id="3"
                  placeholder="email"
                />
                <p className="text-danger mb-0">
                  {error && value.email === ""
                    ? "email is requried"
                    : error && regex.test(value.email) === false
                    ? "email not valid"
                    : ""}
                </p>
              </div>
              <div className="py-2">
                <div className="position-relative">
                  <input
                    onChange={(e) =>
                      setValue(() => ({
                        ...value,
                        password: e.target.value,
                      }))
                    }
                    value={value.password}
                    type={showPassword ? "text" : "password"}
                    className="w-100"
                    name=""
                    id="4"
                    placeholder="password"
                  />
                  <small
                    className={`eye_small ${
                      value.password === ""
                        ? "pointer-event-none"
                        : "cursor-pointer"
                    }`}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <Eye /> : <EyeCross />}
                  </small>
                </div>
                <p className="text-danger mb-0">
                  {error && value.password === ""
                    ? "password is requried"
                    : error && passRegex.test(value.password) === false
                    ? "Password is not strong"
                    : ""}
                </p>
              </div>
              <div className="py-2 ">
                <div className="position-relative">
                  <input
                    onChange={(e) =>
                      setValue(() => ({
                        ...value,
                        confPassword: e.target.value,
                      }))
                    }
                    value={value.confPassword}
                    type={showConfPassword ? "text" : "password"}
                    className="w-100"
                    name=""
                    id="5"
                    placeholder="confirm Password"
                  />
                  <small
                    className={`eye_small ${
                      value.confPassword === ""
                        ? "pointer-event-none"
                        : "cursor-pointer"
                    }`}
                    onClick={() =>
                      setShowConfPassword((prevState) => !prevState)
                    }
                  >
                    {showConfPassword ? <Eye /> : <EyeCross />}
                  </small>
                </div>
                <p className="text-danger mb-0">
                  {error && value.confPassword === ""
                    ? "password is requried"
                    : value.password === value.confPassword
                    ? ""
                    : "Password does not matched..."}
                </p>
              </div>

              <div className="text-center mt-3">
                <button type="submit" onClick={(e) => onSumbitHandler(e)}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="vh-100 w-100 bg-pink ">
        {dataArray.length > 0 &&
          dataArray.map((item, index) => (
            <>
              <div className="row mx-0 justify-content-center">
                <div className="col-lg-8">
                  <ul className="d-flex list-unstyled ">
                    <li className="w-100 custom_bg one">{item.name}</li>
                    <li className="w-100 custom_bg twoo">{item.email}</li>
                    <li className="w-100 custom_bg three">{item.userName}</li>
                    <li className="w-100 custom_bg four">{item.password}</li>
                    <li className="w-100 custom_bg five">
                      {item.confPassword}
                    </li>
                  </ul>
                </div>
                <div className="col-2 ">
                  <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
              </div>
            </>
          ))}
      </div> */}
    </div>
  );
};

export default withRouter(SignInForm);
