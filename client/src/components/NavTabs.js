import React from "react";
import "../App.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {

  return (
    <Nav activeKey="1" className="customNav color">
      
      <Nav.Item>
        <Nav.Link eventKey="1" className="nav-link">
          <Link to={"/"} className='link'> 
          Home
          </Link> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" className="nav-link">
          <Link to={"/dashboard"} className='link'>
          Dashboard
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Item" className="nav-link">
          <Link  to={"/login"} className='link'>
          Login
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" className="nav-link">
          <Link to={"/logout"} className='link'> 
          Logout
          </Link> 
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
