import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <img className="IMG" src="logo.jpeg" alt="" />

      <Link to="/Movies">
        <h1>Tv Shows</h1>
      </Link>
      <Link to="/Home">
        <h1>En direct</h1>
      </Link>
      <Link to="/">
        <h1>Store</h1>
      </Link>
    </div>
  );
}

export default Navbar;
