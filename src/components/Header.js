import React from "react";
import img from "../cropped-logoglat-small.png";

function Header() {
  return (
    <header className="header">
      <span>
        <img src={img} height="50px" />
      </span>

      <h1>Studenten dashboard</h1>
    </header>
  );
}

export default Header;
