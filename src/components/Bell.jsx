import React from "react";
import { withRouter } from "react-router-dom";
import { BellIcon } from "./Icon";

const Bell = ({ history }) => {
  const pathname = window.location.pathname;
  return (
    <div>
      <div onClick={() => history.push("/notifications")} className="bell">
        {pathname === "/notifications" ? <span>10</span>: <span>20</span>}
        <BellIcon />
      </div>
    </div>
  );
};

export default withRouter(Bell);
