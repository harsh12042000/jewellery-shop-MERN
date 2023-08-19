import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/banner-01.jpg'}
          alt="Live the moment"
        />
        <Carousel.Caption>
          <h3>Live the moment</h3>
          <p>WHEN YOU HAVE CONFIDENCE, YOU CAN HAVE A LOT OF FUN AND WHEN YOU HAVE FUN, YOU CAN DO AMAZING THINGS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/banner-02.jpg'}
          alt="classic jewellery"
        />

        <Carousel.Caption>
          <h3>Classic jewellery</h3>
          <p>LOVE'S EMBRACE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      { <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/banner-03.jpg'}
          alt="The jeweller"
        />

        <Carousel.Caption>
          <h3>THE JEWELLER</h3>
          <h3>
            OF QUEENS
          </h3>
        </Carousel.Caption>
      </Carousel.Item> }
    </Carousel>
  );
};

export default Hero;
