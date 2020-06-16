import React from "react";
import NavBarLItem from "./NavBarLItem";
import { Link } from "react-router-dom";

class NavBarL extends React.Component {
  render() {
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

{
  /* <Link to="/student/Aranka">
          <li
            id="Aranka"
            className="button"
            onClick={() => props.locatieVeranderen("Aranka")}
          >
            Aranka
          </li>
        </Link>
        <Link to="/student/Floris">
          <li
            id="Floris"
            className="button"
            onClick={() => props.locatieVeranderen("Floris")}
          >
            Floris
          </li>
        </Link>
        <Link to="/student/Hector">
          <li
            id="Hector"
            className="button"
            onClick={() => props.locatieVeranderen("Hector")}
          >
            Hector
          </li>
        </Link>
        <Link to="/student/Martina">
          <li
            id="Martina"
            className="button"
            onClick={() => props.locatieVeranderen("Martina")}
          >
            Martina
          </li>
        </Link>
        <Link to="/student/Maurits">
          <li
            id="Maurits"
            className="button"
            onClick={() => props.locatieVeranderen("Maurits")}
          >
            Maurits
          </li>
        </Link>
        <Link to="/student/Rahima">
          <li
            id="Rahima"
            className="button"
            onClick={() => props.locatieVeranderen("Rahima")}
          >
            Rahima
          </li>
        </Link>
        <Link to="/student/Sandra">
          <li
            id="Sandra"
            className="button"
            onClick={() => props.locatieVeranderen("Sandra")}
          >
            Sandra
          </li>
        </Link>
        <Link to="/student/Wietske">
          <li
            id="Wietske"
            className="button"
            onClick={() => props.locatieVeranderen("Wietske")}
          >
            Wietske
          </li>
        </Link>
        <Link to="/student/Storm">
          <li
            id="Storm"
            className="button"
            onClick={() => props.locatieVeranderen("Storm")}
          >
            Storm
          </li>
        </Link>
        <Link to="/">
          <li
            id="home"
            className="button"
            onClick={() => props.locatieVeranderen("Home")}
          >
            Home
          </li>
        </Link> */
}

{
  /* <ul>
          <Link
            to={`/student/Evelyn`}
            className="persoonbutton"
            id="Evelyn"
            onClick={(event) => this.props.locatieVeranderen(event.target.id)}
          >
            <li id="Evelyn" className="button">
              Evelyn
            </li>
          </Link>
        </ul> */
}
