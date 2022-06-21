import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const PushNavLink = ({ history }) => {
  const pathnamee = window.location.pathname;
  const [active, setActive] = useState(pathnamee);
  const pageTwoHandler = () => {
    history.push("/page-two");
    setActive("/page-two");
  };
  return (
    <div className="min-w-200 d-flex flex-column justify-content-center vh-50">
      <div className="p-2">
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
      <div className="p-2">
        <button
          className={`common_btn ${active === "/page-one" ? "active_btn" : ""}`}
          onClick={() => {
            history.push("/page-one");
            setActive("/page-one");
          }}
        >
          About
        </button>
      </div>
      <div className="p-2">
        <button
          className={`common_btn ${active === "/page-two" ? "active_btn" : ""}`}
          onClick={() => pageTwoHandler()}
        >
          Stats
        </button>
      </div>
    </div>
  );
};

export default withRouter(PushNavLink);
