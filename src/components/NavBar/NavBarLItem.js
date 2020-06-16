import React from "react";
import { Link } from "react-router-dom";

function NavBarLItem(props) {
  return (
    <Link
      to={`/student/${props.naam}`}
      className="persoonbutton"
      onClick={(event) => props.locatieVeranderen(event.target.id)}
    >
      <li id={props.naam}>{props.naam}</li>
    </Link>
  );
}

export default NavBarLItem;
