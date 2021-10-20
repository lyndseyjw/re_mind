import React from "react";
import "../App.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <Nav variant="pills" activeKey="1" className="customNav">
      
      <Nav.Item>
        <Nav.Link eventKey="3" disabled className="nav-link">
          <Link to={"/home"} > 
          Home
          </Link> 
        </Nav.Link>
      </Nav.Item>
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
          <Link to={"/logout"} > 
          Logout
          </Link> 
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
