import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import Sidebar from "./Sidebar";
import Indexpictures from "./Indexpictures";
import { BsThreeDots } from "react-icons/bs";
import Slotie1 from "../assest/images/Slotie1.svg";
import Solite2 from "../assest/images/Solite2.svg";
import Solite3 from "../assest/images/Solite3.svg";
import Solite4 from "../assest/images/Solite4.svg";
import Solite5 from "../assest/images/Solite5.svg";
import Solite6 from "../assest/images/Solite6.svg";
import Solite7 from "../assest/images/Solite7.svg";
import Solite8 from "../assest/images/Solite8.svg";
import { AiOutlineBars } from "react-icons/ai";
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
const Storefront = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogle = () => {
    setShowMenu((current) => !current);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} sm={12}>
            <div className="store-heading">
              <h3>Slotie NFT</h3>
            </div>
            <div className="store-title">
              <p>
                Sold out under 5 minutes. Utilty NFT that creates DeFi ecosystem
                in gambling. Join our Discord community
              </p>
            </div>
            <div className="nft-items">
              <div className="nft-ht">
                <h5>224 ETH</h5>
                <p>Total volume</p>
              </div>
              <div className="nft-ht">
                <h5> 0.001 ETH</h5>
                <p>Floor price</p>
              </div>
              <div className="nft-ht">
                <h5>3%</h5>
                <p>Listed</p>
              </div>
              <div className="nft-ht">
                <h5>345,834</h5>
                <p>Owners</p>
              </div>
              <div className="nft-ht">
                <h5>27%</h5>
                <p>Unique owners</p>
              </div>
            </div>
            <div className="search-bar">
              <div className="search-text">
                <IoIosArrowBack />
                <p>Filters</p>
              </div>
              <div className="search-box">
                <input type="text" placeholder="Search.." name="search" />
                <AiOutlineSearch />
              </div>
              <div className="range">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <span className="range-text">Price low to high</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="toogle-navbar">
            <AiOutlineBars onClick={toogle} />
          </div>
          <Col md={3} className={showMenu ? "toogle" : "hideshow"}>
            <Sidebar />
          </Col>
          <Col md={12} lg={9} sm={9}>
            <div className="ExploreSection">
              <div className="Section-Pictures">
                <Row>
                  {data.length > 0
                    ? data.map((items) => {
                        return (
                          <Col sm={12} md={6} lg={4} xl={3}>
                            <Indexpictures propdata={items} />
                          </Col>
                        );
                      })
                    : ""}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Storefront;
