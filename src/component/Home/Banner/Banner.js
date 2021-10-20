import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
       <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://previews.123rf.com/images/pitinan/pitinan1905/pitinan190502263/122394565-medical-healthcare-concept-doctor-in-hospital-with-digital-medical-icons-graphic-banner-showing-symb.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <div className="black">
      <h3>Shimla Hospital</h3>
      <p>Shimla Hospital
      Address: Shimla Tower
       Thana Mor, Sg Shalgaria, Pabna
      Phone: 01713228218</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/medicine-healthcare-service-header-banner-circles-element-flat-line-vector-design-concept-clinic-hospital-ambulance-91433406.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="black">
      <h3>Shimla Hospital</h3>
      <p>Shimla Hospital
      Address: Shimla Tower
       Thana Mor, Sg Shalgaria, Pabna
      Phone: 01713228218</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'85vh'}}
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/male-doctor-hospital-opening-hand-260nw-1325309450.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="black">
      <h3>Shimla Hospital</h3>
      <p>Shimla Hospital
      Address: Shimla Tower
       Thana Mor, Sg Shalgaria, Pabna
      Phone: 01713228218</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;