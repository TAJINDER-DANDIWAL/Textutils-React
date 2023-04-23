import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
      className="colormode"
      style={{ color: props.mymode === "dark" ? "white" : "black" }}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mymode} bg-${props.mymode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.tittle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  {props.aboutme}
                </Link> */}
              </li>
            </ul>

            {/* it is switch to enable/disable dark mode */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.switchmode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mymode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   tittle: PropTypes.string,
// };
