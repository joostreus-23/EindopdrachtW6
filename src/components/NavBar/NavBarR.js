import React from "react";
import { Link } from "react-router-dom";

function NavBarR(props) {
  return (
    <div className="sidenavR" id="mysidenavR">
      <ul>
        <li className="filterbutton">
          <label for="filter">
            <input
              type="checkbox"
              checked={props.filterLeuk}
              onChange={() => props.toggleFilterLeuk()}
              value="leuk"
            ></input>
            <span> Leuk</span>
          </label>
        </li>
        <li className="filterbutton">
          <label for="filter">
            <input
              type="checkbox"
              checked={props.filterMoeilijk}
              onChange={() => props.toggleFilterMoeilijk()}
              value="moeilijk"
            ></input>
            Moeilijk
          </label>
        </li>
      </ul>
    </div>
  );
}

export default NavBarR;
