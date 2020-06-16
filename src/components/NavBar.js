import React from "react";
import img from "./menu.png";
import NavBarL from "./NavBar/NavBarL";
import { Link } from "react-router-dom";
import NavBarR from "./NavBar/NavBarR";
function NavBar(props) {
  const navBarLtoggle = () => {
    const sideNavL = document.getElementById("mysidenavL");
    sideNavL.classList.toggle("sidenavLOpen");
  };
  const navBarRtoggle = () => {
    const sideNavR = document.getElementById("mysidenavR");
    sideNavR.classList.toggle("sidenavROpen");
  };
  return (
    <div className="nav">
      <nav>
        <img
          id="menubtn1"
          src={img}
          alt=""
          height="20"
          onClick={() => navBarLtoggle()}
        />
        <h2> {props.locatie}</h2>
        <img
          id="menubtn2"
          src={img}
          alt=""
          height="20"
          onClick={() => navBarRtoggle()}
        />
      </nav>
      <NavBarL
        locatieVeranderen={props.locatieVeranderen}
        locatie={props.locatie}
        namen={props.namen}
        navBarLtoggle={navBarLtoggle}
      />
      <NavBarR
        filterLeuk={props.filterLeuk}
        filterMoeilijk={props.filterMoeilijk}
        toggleFilterLeuk={props.toggleFilterLeuk}
        toggleFilterMoeilijk={props.toggleFilterMoeilijk}
      />
    </div>
  );
}

export default NavBar;
