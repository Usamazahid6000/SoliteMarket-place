import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Indexpictures = ({ propdata }) => {
  return (
    <>
      <CardGroup className="nftcard">
        <Card>
          <Card.Img variant="top" src={propdata.imgSrc} />
          <Card.Body>
            <button className="buyButton">Buy Now</button>
            <div className="title-icon">
              <div>
                <Card.Title>{propdata.title}</Card.Title>
              </div>
              <div className="icon">{propdata.icon}</div>
            </div>
            <Card.Text>{propdata.cardtext}</Card.Text>

            <div className="cardInfo">
              <div className="price">
                <Card.Title>{propdata.pricetitle}</Card.Title>
                <Card.Text>{propdata.price}</Card.Text>
              </div>
              <div className="biding">
                <Card.Title>{propdata.bidtitle}</Card.Title>
                <Card.Text>{propdata.bidprice}</Card.Text>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-footer"></small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Indexpictures;
