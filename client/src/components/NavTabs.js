import React from "react";
import "../App.css";
import {Nav , NavDropdown} from 'react-bootstrap'

function NavTabs({ currentPage, handlePageChange }) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
 
 <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Sleep</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Gratitude</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Mood</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#dashboard" onClick={() => handlePageChange("Dashboard")}
              className={currentPage === "dashboard" ? "nav-link active" : "nav-link"} >
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" href="#upload"
              onClick={() => handlePageChange("Upload")}
              className={
                currentPage === "upload" ? "nav-link active" : "nav-link" 
              } >
              Upload
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled href="#logout"
              onClick={() => handlePageChange("Logout")}
              className={
                currentPage === "logout" ? "nav-link active" : "nav-link"
              }
            >
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>

  );
}


export default NavTabs;
