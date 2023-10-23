import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css"

function Navbar(){
    const location = useLocation();
    console.log(location);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
        >
          <Link
            to={"/task"}
            className={location.pathname === "/task" ? "active-link" : ""}
          >
            Tout Doux
          </Link>
        </button>

        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
        >
          <Link
            to={"/user/1"}
            className={
              location.pathname.startsWith("/user") ? "active-link" : ""
            }
          >
            User
          </Link>
        </button>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
        >
          <Link
            to={"/counter"}
            className={location.pathname === "/counter" ? "active-link" : ""}
          >
            Counter
          </Link>
        </button>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
        >
          <Link
            to={"/counter"}
            className={location.pathname === "/list" ? "active-link" : ""}
          >
            Product List
          </Link>
        </button>
      </nav>
    );
}
export default Navbar;