import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(x) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${x.mode} bg-${x.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {x.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  {x.aboutText}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{
                x.toggleMode();
               

              }}
              
            />
            <label className={`form-check-label text-${x.revMode} `} htmlFor="flexSwitchCheckDefault">
              {`Enable ${x.revMode}mode`}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtiles",
  aboutText: "About-TextUtiles",
};
