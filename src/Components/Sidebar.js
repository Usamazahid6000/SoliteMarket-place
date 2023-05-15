import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const Sidebar = () => {
  return (
    <>
      
      <div className="side-bar">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body>
              <div className="bo">
                <div className="menu-btn">
                  <button className="all">All</button>
                  <button>Buy now</button>
                </div>
                <div className="other-option">
                  <button>Open for offers</button>
                  <button>Live Auction</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              <div className="bo">
                <Form className="formin">
                  <Form.Group className="mb-3" controlId="formBasicmin">
                    <Form.Control type="number" placeholder="Min" />
                  </Form.Group>
                  <Form.Label>to</Form.Label>

                  <Form.Group className="mb-3" controlId="formBasicmax">
                    <Form.Control type="number" placeholder="Max" />
                  </Form.Group>
                </Form>
                <div className="apply-btn">
                  <button>Apply</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Breeding Availibility</Accordion.Header>
            <Accordion.Body>
              <div className="bo"></div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Clothes</Accordion.Header>
            <Accordion.Body>
              <div className="bo">
                <div className="check-menu">
                  <div className="chk-text">
                    <p>C12</p>
                  </div>
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id="checkbox"
                  />
                </div>
                <div className="check-menu">
                  <div className="chk-text">
                    <p>C13</p>
                  </div>
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id="checkbox"
                  />
                </div>
                <div className="check-menu">
                  <div className="chk-text">
                    <p>C14</p>
                  </div>
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id="checkbox"
                  />
                </div>
                <div className="check-menu">
                  <div className="chk-text">
                    <p>C15</p>
                  </div>
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id="checkbox"
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mouth</Accordion.Header>
            <Accordion.Body>
              <div className="bo"></div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Eyes</Accordion.Header>
            <Accordion.Body>
              <div className="bo"></div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ear</Accordion.Header>
            <Accordion.Body>
              <div className="bo"></div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
