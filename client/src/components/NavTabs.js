import React from "react";
import "../App.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Picture from "./Picture";
import Auth from '../utils/auth';
import './NavTabs.css';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const styles = {
  links: {
      color: "#ac3b12",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: "700"
  },
  bar: {
    alignItems: "center",
<<<<<<< HEAD
    borderBottom: "2px solid #ac3b12",
    top: 0,
=======
    paddingBottom: "2%",
    borderBottom: '2px solid #ac3b12'
>>>>>>> 5528258e17121e1c19f7317e137f6c2d2200ac41
  }
}

function NavTabs() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { data } = useQuery(QUERY_ME);

  return (
    <div className="container-fluid">
      {Auth.loggedIn() ? (
        <>
          <Nav activeKey="1" style={styles.bar} className='color'>
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link link">
                <Link to={"/"} style={styles.links} className='left'>
                  re:mind
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link link">
                <Link to={"/greeting"} style={styles.links}>
                  home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className="nav-link link">
                <Link to={"/dashboard"} style={styles.links} >
                  dashboard
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <a 
                variant="light" 
                type="submit" 
                onClick={logout} 
                style={styles.links}
                className="nav-link">
                  logout
              </a>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="1" className="nav-link link">
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
