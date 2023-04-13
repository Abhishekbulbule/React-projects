import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return (
    <div className="sticky-top container-fluid bg-dark text-light">
      <header >
        <nav className="d-flex flex-wrap  align-items-center justify-content-center justify-content-md-between py-2  border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center col-md-3 mb-2 fs-3 mb-md-0  text-light text-decoration-none"
          >
            NoteIt!
          </Link>

          <ul className="nav col-12 col-md-auto fs-5  mb-3 justify-content-center  mb-md-0">
            <li>
              <Link
                to="/"
                className={` px-2 mx-2 text-decoration-none  link-${
                  location.pathname === "/" ? "active border-bottom border-3 rounded" : "light"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Notes"
                className={` px-2 mx-2 text-decoration-none link-${
                  location.pathname === "/Notes" ? "active border-bottom border-3 rounded" : "light"
                }`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={` px-2 mx-2 text-decoration-none link-${
                  location.pathname === "/about" ? `active border-bottom border-3 rounded` : "light"
                }`}
              >
                About
              </Link>
            </li>
          </ul>

          {!localStorage.getItem('token')?<div className="col-md-3 text-end">
            <Link role="button" to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link role="button" to="/signup" className="btn btn-primary me-2">
              Sign-up
            </Link>
          </div>:<div className="col-md-3 text-end"><button className="btn btn-primary me-2"  onClick={handleLogOut}>Logout</button></div>}
        </nav>
      </header>
    </div>
  );
}
