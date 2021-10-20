import React from "react";
import "../App.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <Nav variant="pills" activeKey="1">
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Sleep</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Gratitude</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Mood</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="1" className="nav-link">
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className="nav-link">
          <Link  to={"/login"} >
          Login
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled className="nav-link">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
