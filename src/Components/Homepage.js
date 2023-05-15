import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Indexpictures from "./Indexpictures";
import { BsThreeDots } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import Slotie1 from "../assest/images/Slotie1.svg";
import Solite2 from "../assest/images/Solite2.svg";
import Solite3 from "../assest/images/Solite3.svg";
import Solite4 from "../assest/images/Solite4.svg";
import Solite5 from "../assest/images/Solite5.svg";
import Solite6 from "../assest/images/Solite6.svg";
import Solite7 from "../assest/images/Solite7.svg";
import Solite8 from "../assest/images/Solite8.svg";
import Table_icon1 from "../assest/images/Table_icon1.svg";
import Table_icon2 from "../assest/images/Table_icon2.svg";
import Table_icon3 from "../assest/images/Table_icon3.svg";
import Table_icon4 from "../assest/images/Table_icon4.svg";
import Table_icon5 from "../assest/images/Table_icon5.svg";
import Table_icon6 from "../assest/images/Table_icon6.svg";
import Picture1 from "../assest/images/Picture1.svg";
import Picture2 from "../assest/images/Picture2.svg";
import Picture3 from "../assest/images/Picture3.svg";
import Picture4 from "../assest/images/Picture4.svg";

const data = [
  {
    imgSrc: Slotie1,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite2,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite3,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite4,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite5,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite6,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite7,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite8,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Slotie1,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite2,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite3,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },

  {
    imgSrc: Solite4,
    title: "@senior",
    icon: <BsThreeDots />,
    cardtext: "Senior Slotie #2312",
    pricetitle: "Price",
    price: "1.214 ETH",
    bidtitle: "Highest bid",
    bidprice: "0.525 wETH",
  },
];

const Homepage = () => {
  return (
    <>
      <Container>
        <div className="introSection">
          <Row>
            <Col lg={12}>
              <div className="info">
                <p>Explore, sell and buy Slotie NFTs</p>
                <h1>
                  Ready to get <br />
                  started?
                </h1>
              </div>
              <div className="button-group">
                <button className="btn">Buy</button>
                <button className="btn">Sell</button>
              </div>
            </Col>
            <Col md={12} lg={12}>
              <div className="pictures">
                <img src={Picture1} className="w-304" />
                <img src={Picture2} className="w-258" />
                <img src={Picture3} className="w-304" />
                <img src={Picture4} className="w-634" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="ExploreSection">
          <div className="Section-intro">
            <h5>Explore</h5>
            <p>342 Available Sloties</p>
          </div>
          <div className="Section-Pictures">
            <Row>
              {data.length > 0
                ? data.map((items) => {
                    return (
                      <Col sm={12} md={6} lg={3}>
                        <Indexpictures propdata={items} />
                      </Col>
                    );
                  })
                : ""}
            </Row>
            <Row>
              <Col md={12} className="text-center">
                <button className="load-btn">Load more</button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <div className="Activity-Section">
        <Container>
          <Row>
            <h2 className="heading">Activity</h2>
            <Col lg={12} sm={12}>
              <Table hover variant="dark">
                <thead>
                  <tr>
                    <th>Slotie NFT</th>
                    <th>Collection</th>
                    <th>Price</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={Table_icon1} />
                      Boomie #230221
                    </td>
                    <td>Senior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Table_icon2} />
                      Boomie #230221
                    </td>
                    <td>Junior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Table_icon3} />
                      Boomie #230221
                    </td>
                    <td>Senior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Table_icon4} />
                      Boomie #230221
                    </td>
                    <td>Senior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Table_icon5} />
                      Boomie #230221
                    </td>
                    <td>Senior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Table_icon6} />
                      Boomie #230221
                    </td>
                    <td>Senior Slotie</td>
                    <td>231.14 ETH</td>
                    <td>1 minute ago</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <button className="view-btn">View all</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
