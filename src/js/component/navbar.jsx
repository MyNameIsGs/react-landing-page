import React from "react";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://www.youtube.com/watch?v=MvAioN61BaU"
        >
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="https://www.youtube.com/watch?v=MvAioN61BaUnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://www.youtube.com/watch?v=MvAioN61BaU"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/watch?v=MvAioN61BaU"
              >
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.youtube.com/watch?v=MvAioN61BaU"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.youtube.com/watch?v=MvAioN61BaU"
                  >
                    Service A
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.youtube.com/watch?v=MvAioN61BaU"
                  >
                    Service B
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.youtube.com/watch?v=MvAioN61BaU"
                  >
                    Service C
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
