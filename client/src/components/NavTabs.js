import React from "react";
import "../App.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Picture from "./Picture";
import Auth from '../utils/auth';

const styles = {
  links: {
      color: "#ac3b12",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: "700"
  },
  bar: {
    alignItems: "center",
    paddingBottom: "2%"
  }
}

function NavTabs() {

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Nav activeKey="1" style={styles.bar} >
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link">
                <Link to={"/"} style={styles.links}>
                  re:mind
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link">
                <Link to={"/greeting"} style={styles.links}>
                  home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="nav-link">
                <Link to={"/dashboard"} style={styles.links}>
                  dashboard
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" className="nav-link">
                <Link to={"/logout"} style={styles.links}>
                  logout
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link">
                <Link to={"/"} style={styles.links}>
                  <Picture />
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      ) : (
        <Nav activeKey="1" className="customNav">
          <Nav.Item>
            <Nav.Link eventKey="3" title="Item" className="nav-link">
              <Link to={"/login"} style={styles.links} >
                login
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" className="nav-link">
              <Link to={"/"} style={styles.links}>
                re:mind
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
          )}
          </div>
          );
}

export default NavTabs;
