import React from "react";
import { useState } from "react";
import { Eye, EyeCross } from "./Icon";

const SignInForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const [error, setError] = useState(false);
  const onSumbitHandler = (e) => {
    e.preventDefault();
    setError(true);
    setShowPassword(true);
    setShowConfPassword(true);
  };

  const passRegex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="w-100 sign_in vh-100 d-flex flex-column justify-content-center">
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
                  {error && value.userName === "" ? "roll no is requried" : ""}
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
    </div>
  );
};

export default SignInForm;
