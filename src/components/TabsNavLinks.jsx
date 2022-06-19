import React from "react";
import { NavLink } from "react-router-dom";

const TabsNavLinks = () => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-4 vh-100 d-flex flex-column justify-content-center">
          <NavLink
            to="/page-one"
            activeClassName="tab-active"
            className="tabs_links"
          >
            page-one
          </NavLink>
          <NavLink
            to="/page-two"
            activeClassName="tab-active"
            className="tabs_links"
          >
            page-two
          </NavLink>
          <NavLink
            to="/page-three"
            activeClassName="tab-active"
            className="tabs_links"
          >
            page-three
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TabsNavLinks;
