import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import retro from "./images/image-retro-pcs.jpg";
import laptop from "./images/image-top-laptops.jpg";
import gaming from "./images/image-gaming-growth.jpg";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./App.css";

import logo from "./images/logo.svg";
import desk from "./images/image-web-3-desktop.jpg";
import mobile from "./images/image-web-3-mobile.jpg";

import "bootstrap/dist/css/bootstrap.min.css";



function bodyy() {
    return (
       <>
        
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" my-lg-4 my-3">
          <Container>
            <Navbar.Brand href="#">
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link className="redd fontw" href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link className="ps-md-5 redd fontw" href="#action2">
                    New
                  </Nav.Link>
                  <Nav.Link className="ps-md-5 redd fontw" href="#action1">
                    Popular
                  </Nav.Link>
                  <Nav.Link className="ps-md-5 redd fontw" href="#action2">
                    Trending
                  </Nav.Link>
                  <Nav.Link className="ps-md-5 redd fontw" href="#action1">
                    Categories
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Container>
        <Row>
          <Col md={8}>
            <Image fluid src={desk} className="d-none d-sm-block" />{" "}
            <Image fluid className="d-block d-sm-none" src={mobile} />
            <Row className="mt-sm-2 gy-md-4 ">
              <Col style={{ fontSize: "40px", fontWeight: "800" }} lg={5}>
                The Bright Future Of Web 3.0?
              </Col>
              <Col className="ps-lg-5 ps-3   " lg={7}>
                We dive into the next evolution of web that claims to put the
                power of the platform back into the hands of the people.But is
                it really fulfilling its promise? <br />
                <br />
                <Button className=" red hov py-md-3 px-md-5 py-2 px-3 ">
                  READ MORE
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="gblue mt-3 mt-md-0 " md={4}>
            <div className="one blue px-2 pe-lg-5 ps-lg-4 py-3 p-md-2">
              <h1 className="orange py-3">New</h1>
              <h3 className="offwhite cur">Hydrogen Vs Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div className="two blue px-2 ps-lg-4 py-3 p-md-2 pe-lg-5">
              <h3 className="offwhite cur">The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generator?
              </p>
            </div>
            <div className="three blue px-2 ps-lg-4 py-3 p-md-2 pe-lg-5">
              <h3 className="offwhite cur">Is VC Funding Drying Up</h3>
              <p>
                Private funding by VC firms is down 50% YOY.We take a look at
                what that means.
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" pt-xl-5 mt-5 mt-md-3 pb-2">
          <Col className="px-xl-4  mb-4" md={4}>
            <Row>
              <Col xs={5} sm={4} md={12} lg={6}>
                {" "}
                <Image className="h-100 w-100" src={retro} fluid />
              </Col>
              <Col
                className="d-flex align-items-center"
                xs={7}
                sm={8}
                md={12}
                lg={6}
              >
                {" "}
                <span>
                  <h2>01</h2> <h4 className="curt"> Retriving Retro PCs </h4>
                  <p> What happens when old PCs are given modern upgrades?</p>
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="px-xl-4 mb-4 " md={4}>
            <Row>
              <Col xs={5} sm={4} md={12} lg={6}>
                <Image src={laptop} className="h-100 w-100" fluid />
              </Col>
              <Col
                className="d-flex align-items-center "
                xs={7}
                sm={8}
                md={12}
                lg={6}
              >
                {" "}
                <span>
                  {" "}
                  <h2>02</h2> <h4 className="curt">Top 10 Laptops of 2022</h4>{" "}
                  <p>Our best picks for various needs and budgets.</p>
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="px-xl-4 mb-4" md={4}>
            <Row>
              <Col xs={5} sm={4} md={12} lg={6}>
                {" "}
                <Image className="h-100 w-100" src={gaming} fluid />
              </Col>
              <Col
                className="d-flex align-items-center"
                xs={7}
                sm={8}
                md={12}
                lg={6}
              >
                {" "}
                <span>
                  <h2>03</h2> <h4 className="curt">The Growth Of Gaming</h4>
                  <p>How the pandemic has sparked fresh opportunites.</p>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    
       
       </>
    );
}

export default bodyy;