import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../assets/images/slide1.jpeg";
import Slide2 from "../assets/images/slide2.jpeg";
import Slide3 from "../assets/images/slide3.jpeg";
import '../css/HomeSlider.css'; // Import the CSS file for custom styling

export const HomeSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={Slide1}
          alt="First slide"
          style={{ width: "100%", height: "750px", padding: "10px" }}
        />
        <Carousel.Caption className="caption">
          <h1>Build Your Body</h1>
          <p>Shape & Tone Your Body</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Slide2}
          alt="Second slide"
          style={{ width: "100%", height: "750px", padding: "10px" }}
        />

        <Carousel.Caption className="caption">
          <h1>Achieve Your Goals</h1>
          <p>Unlock Your Potential</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
          style={{ width: "100%", height: "750px", padding: "10px" }}
        />

        <Carousel.Caption className="caption">
          <h1>Fuel Your Body Fitness</h1>
          <p>Get Your Body Fit</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
