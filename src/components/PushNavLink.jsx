import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const PushNavLink = ({ history }) => {
  const pathnamee = window.location.pathname;
  // const isSignUpValue = localStorage.removeItem("isSignup");
  const isSignUpValue = localStorage.getItem("isSignup");
  const [active, setActive] = useState(pathnamee);
  const pageTwoHandler = () => {
    history.push("/sign-up");
    setActive("/page-two");
  };
  return (
    <div className="min-w-200 d-flex flex-column justify-content-center vh_100_custom">
      {isSignUpValue === "true" ? (
        <>
          <div className="p-2 text-center">
            <button
              className={`common_btn ${active === "/" ? "active_btn" : ""}`}
              onClick={() => {
                history.push("/");
                setActive("/");
              }}
            >
              Home
            </button>
          </div>

          <div className="p-2 text-center">
            <button
              className={`common_btn ${
                active === "/page-two" ? "active_btn" : ""
              }`}
              onClick={() => pageTwoHandler()}
            >
              Ball
            </button>
          </div>
          <div className="p-2 text-center">
            <button
              className={`common_btn ${
                active === "/rating" ? "active_btn" : ""
              }`}
              onClick={() => {
                history.push("/rating");
                setActive("/rating");
              }}
            >
              Stars
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="p-2 text-center">
            <button
              className={`common_btn ${
                active === "/sign-up" ? "active_btn" : ""
              }`}
              onClick={() => {
                history.push("/sign-up");
                setActive("/sign-up");
              }}
            >
              Signin Form
            </button>
          </div>
          <div className="p-2 text-center">
            <button
              className={`common_btn ${
                active === "/log-in" ? "active_btn" : ""
              }`}
              onClick={() => {
                history.push("/log-in");
                setActive("/log-in");
              }}
            >
              Login Form
            </button>
          </div>{" "}
        </>
      )}
      {/* ) : (
        ""
      )} */}
      {/* <div className="p-2 text-center">
        <button
          className={`common_btn ${active === "/sign-in" ? "active_btn" : ""}`}
          onClick={() => {
            history.push("/sign-in");
            setActive("/sign-in");
          }}
        >
          Sign In
        </button>
      </div> */}
      {/* <div className="p-2 text-center">
        <button
          className={`common_btn ${
            active === "/image-upload" ? "active_btn" : ""
          }`}
          onClick={() => {
            history.push("/image-upload");
            setActive("/image-upload");
          }}
        >
          Upload img
        </button>
      </div> */}
    </div>
  );
};

export default withRouter(PushNavLink);
