import Prototypes from "prop-types";

import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header
      className={`p-3 bg-${props.mode} text-${
        props.mode === "dark" ? "light" : "dark"
      } fw-bold border-bottom `}
    >
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className={`d-flex align-items-center fs-2 mb-1 mb-lg-0 text-${
              props.mode === "dark" ? "light" : "dark"
            } text-decoration-none`}
          >
            {props.title}
          </Link>

          <ul className="nav col-12 col-lg-auto ms-auto me-md-auto mb-2 px-2 justify-content-center align-items-center fs-5 mb-md-0">
            <li>
              <Link
                to="/"
                className={`nav-link px-2 text-${
                  props.mode === "dark" ? "white" : "dark"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link px-2 text-${
                  props.mode === "dark" ? "white" : "dark"
                }`}
              >
                About
              </Link>
            </li>
            
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <div
              className={`form-check form-switch  my-1 me-3  text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                class="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
                
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {props.mode === "dark"
                  ? "Enable Light Mode"
                  : "Disable Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
Header.prototype = {
  title: Prototypes.string.isRequired,
  about: Prototypes.string,
};
Header.defaultProps = {
  title: "Set Title",
  about: "About text here",
};
