import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="col-2 left sideBarBackground">
        <h3>Conversion Types:</h3>
        <ul>
          <li>Length</li>
          <li>Temperature</li>
          <li>Volume</li>
          <li>Weight</li>
          {/* <li /> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
