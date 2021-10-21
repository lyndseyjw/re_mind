import React from "react";
import "../App.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <Nav activeKey="1" className="customNav">
      
      <Nav.Item>
        <Nav.Link eventKey="1" disabled className="nav-link">
          <Link to={"/"} > 
          Home
          </Link> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" className="nav-link">
          <Link to={"/dashboard"}>
          Dashboard
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item" className="nav-link">
          <Link  to={"/mood"} >
          Mood
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" disabled className="nav-link">
          <Link to={"/logout"} > 
          Logout
          </Link> 
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
