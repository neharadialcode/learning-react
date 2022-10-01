import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const loginArr = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(loginArr);
  const submitHandler = () => {
    if (login.email !== "" && login.password !== "") {
      console.log("sxdcfvgbhnjk", login);
    }
  };

  return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <div>
            <div>
              <label htmlFor=""> Email</label>
              <input
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                className="w-100 border"
                type="text"
                value={login.email}
              />
            </div>
            <div className="pt-3">
              <label htmlFor=""> Password</label>
              <input
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                className="w-100 border"
                type="text"
                name=""
                value={login.password}
                id=""
              />
            </div>
            <div className="text-center pt-4">
              <button
                onClick={() => submitHandler()}
                className="btn-success btn"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
