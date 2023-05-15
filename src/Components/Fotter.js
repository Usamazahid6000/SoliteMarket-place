import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import Fotterlogo from "../assest/images/logo.svg";

const Fotter = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="footer-Section">
            <Col lg={12} className='w-100'>
              <div className="check">
                <div className="footer-logo">
                  <img src={Fotterlogo} />
                </div>
                <div className="footer-items">
                  <ul className="list-item">
                    <li>Terms</li>
                    <li>Privacy policy</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Fotter;
