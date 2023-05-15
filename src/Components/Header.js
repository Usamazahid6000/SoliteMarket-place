import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assest/images/logo.svg";
//import Collapse from 'react-bootstrap/Collapse';

const Header = () => {
  return (
    <>
      <div className="Headers">
        <Container>
          <div className="Navbars">
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Container>
                <Navbar.Brand>
                  <img src={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <span className="Explore">
                      <Nav.Link>Explore</Nav.Link>
                    </span>
                    <Nav.Link>
                      <NavDropdown
                        title="Products"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav.Link>
                    <Nav.Link>Slotie</Nav.Link>
                    <Nav.Link>Slotie Junior</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <span className="wallet">
                      <Nav.Link>Connect Wallet</Nav.Link>
                    </span>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
