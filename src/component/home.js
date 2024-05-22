import React from 'react';
import { Navbar, Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Add your custom CSS here
import logo from '../../src/assets/images/logo/fitglide-logo.png';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#"><img src="logo" alt="Company Logo" height="30" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>

      <div className="container">
      <div className="row">
        <div className="col-md-8 col-center">
          <h2>Testimonials</h2>
          <Carousel>
            <Carousel.Item>
              <div className="img-box">
                <img
                  className="d-block w-100"
                  src="/examples/images/clients/1.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <p className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.
                </p>
                <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-box">
                <img
                  className="d-block w-100"
                  src="/examples/images/clients/2.jpg"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption>
                <p className="testimonial">
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.
                </p>
                <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-box">
                <img
                  className="d-block w-100"
                  src="/examples/images/clients/3.jpg"
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <p className="testimonial">
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.
                </p>
                <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>

      <footer className="footer mt-auto py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <a href="#"><i className="bi bi-house"></i> Home</a>
              <a href="#"><i className="bi bi-bicycle"></i> Cycle</a>
              <a href="#"><i className="bi bi-handbag"></i> Cart</a>
              <a href="#"><i className="bi bi-person"></i> Profile</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;
