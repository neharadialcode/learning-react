import React from "react";
import { NavLink } from "react-router-dom";

const TabsNavLinks = () => {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-12 vh_100_custom d-flex flex-column justify-content-center">
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
          <NavLink
            to="/rating"
            activeClassName="tab-active"
            className="tabs_links"
          >
            stars
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TabsNavLinks;
