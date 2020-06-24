import React from "react";
import NavBarLItem from "./NavBarLItem";
import { Link } from "react-router-dom";

class NavBarL extends React.Component {
  render() {
    //van de doorgekomen namen een navbar Links item maken
    const showNamen = this.props.namen.map((naam) => (
      <NavBarLItem
        naam={naam}
        locatieVeranderen={this.props.locatieVeranderen}
        navBarLtoggle={this.props.navBarLtoggle}
      />
    ));
    return (
      <div id="mysidenavL" className="sidenavL">
        <ul>
          {showNamen}
          <Link to="/">
            <li
              id="home"
              className="persoonbutton"
              onClick={() => this.props.locatieVeranderen("Home")}
            >
              Gemiddelde
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBarL;
