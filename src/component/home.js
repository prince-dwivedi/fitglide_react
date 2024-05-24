import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles/homepage.css'; // Ensure this path is correct
import logo from '../../src/assets/images/logo/fitglide-logo.png'; // Adjusted path
import facebookIcon from '../../src/assets/images/social/facebook.png'; // Adjusted path
import twitterIcon from '../../src/assets/images/social/twitter.png'; // Adjusted path
import instagramIcon from '../../src/assets/images/social/instagram.png'; // Adjusted path

// Testimonial data
const testimonials = [
  {
    id: 1,
    image: require('../../src/assets/images/users/sandip.jpg').default,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.',
    author: 'Paula Wilson',
    role: 'Media Analyst'
  },
  // Add more testimonials as needed
];

// Dynamically load all images from the carousel folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../src/assets/images/carousel', false, /\.(png|jpe?g|svg)$/)); // Adjusted path

function HomePage() {

  const handleSubmit = (values, actions) => {
    // Sending the form data to info@fitglide.in
    const { name, email, message } = values;
    const formData = {
      name,
      email,
      message
    };

    // Here you can send formData to your backend or use any email service like SendGrid
    console.log(formData);

    // Reset form fields
    actions.resetForm();
  };
  return (
    <div>
      {/* Header Section */}
      <div className="container-fluid header">
        <div className="row align-items-center">
          <div className="col">
            <div className="logo-container">
              <Link to="/">
                <img 
                  src={logo}
                  height="80" // Adjusted logo height
                  alt="Fit Glide" 
                  title="Fit Glide"
                  className="logo"
                />
              </Link>
            </div>
          </div>
          <div className="col text-end">
            <div className="social-media-container">
              <Button variant="light" href="#"><img src={facebookIcon} alt="Facebook" /></Button>
              <Button variant="light" href="#"><img src={twitterIcon} alt="Twitter" /></Button>
              <Button variant="light" href="#"><img src={instagramIcon} alt="Instagram" /></Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container-fluid carousel-container mt-3">
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>Slide {index + 1}</h3>
                <p>Description for slide {index + 1}.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Flex Cells Section */}
      <div className="container-fluid flex-cells-container mt-3">
        <div className="row">
          <div className="col flex-cell light-red-bg">
            <div className="flex-cell-inner">
              <h1>Exercise</h1>
              <p>Exercise is the cornerstone of our fitness journey. It keeps our bodies strong, flexible, and resilient. Incorporating regular outdoor activities can boost your energy levels and improve your overall health.</p>
              <h4>Choose your Workout</h4>
            </div>
          </div>
          <div className="col flex-cell light-black-bg">
            <div className="flex-cell-inner">
              <h1>Nourishment</h1>
              <p>Nourishment is essential for fueling your body and achieving your fitness goals. Eating a balanced diet rich in nutrients supports your workouts and aids in recovery. Nutrition impacts your wellbeing directly</p>
              <h4>Build Balanced Diet</h4>
            </div>
          </div>
          <div className="col flex-cell grey-bg">
            <div className="flex-cell-inner">
              <h1>Discipline</h1>
              <p>Dedication is the key to long-term success in your fitness journey. Staying committed to your goals and maintaining a disciplined routine will bring about lasting results. Your consistency is what drives real progress.</p>
              <h4>Building a Routine</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Proposition Section */}
      <div className="container-fluid proposition-section mt-3">
        <h2>OUR PROPOSITION.</h2>
        <p>At FitGlide, we’re not just about workouts; we’re about Transformation. Step into a world of Fitness, where outdoor sports like cycling become the avenue for not only physical fitness but a holistic body and mind metamorphosis. Join us on this exciting journey to redefine your health, one pedal at a time.</p>
        <Button variant="dark" className="know-more-button">Know More</Button>
      </div>

      {/* Testimonials Section */}
      <div className="container testimonials-section mt-3">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Success Stories</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                {testimonials.map((testimonial, index) => (
                  <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="img-box">
                      <img src={testimonial.image} alt={`${index + 1}`} />
                    </div>
                    <p className="testimonial">{testimonial.text}</p>
                    <p className="overview"><b>{testimonial.author}</b>, {testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Contact Us Form Section */}
     <div className="container contact-form-section mt-3">
        <h2>Contact Us</h2>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Enter your message"
                  value={values.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* Footer Section */}
      <footer className="container-fluid footer mt-3">
        <div className="row">
          <div className="col-md-4">
            <h3>Discover FitGlide</h3>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/meet-the-team">Meet the Team</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect with Us</h3>
            <ul>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/social-media">Social Media</Link></li>
              <li><Link to="/community-forum">Community Forum / Q&A</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Tips and Tricks</h3>
            <ul>
              <li><Link to="/expert-tips">Expert Tips and Advice</Link></li>
              <li><Link to="/challenges">Challenges and Competitions</Link></li>
              <li><Link to="/nutrition-tips">Nutrition Tips and Recipes</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
 
}

export default HomePage;
