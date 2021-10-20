import React from "react";
import "../App.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#dashboard"
              onClick={() => handlePageChange("Dashboard")}
              className={
                currentPage === "dashboard" ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#upload"
              onClick={() => handlePageChange("Upload")}
              className={
                currentPage === "upload" ? "nav-link active" : "nav-link"
              }
            >
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#logout"
              onClick={() => handlePageChange("Logout")}
              className={
                currentPage === "logout" ? "nav-link active" : "nav-link"
              }
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
