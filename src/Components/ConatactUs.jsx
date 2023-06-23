import React, { useRef } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Fonts.css'
import 'animate.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
export default function ConatactUs() {
  var settings = {
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    speed: 1000,
  };
  const sliderRef = useRef(null)
  console.log(sliderRef.current)

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-xl-6 p-2" data-aos="fade-right"
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "70px",
                lineHeight: "90px",
                marginTop: '35px',
                color: '#10265f',
                fontWeight: 700
              }}
            >
              Our Products
            </p>
            <Slider {...settings} ref={sliderRef}>


              <div className=''>
                <div className="p-3" style={{ border: '1px solid #cfcfcf', borderRadius: '10px', width: '100%', height: '350px', backgroundColor: '#10265f' }}>
                  <div className="col-12">
                    <img  src={"./images/docketlogo.svg"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', color: '10265f', backgroundColor: 'white' }} alt='' className="p-2" />

                  </div>

                  
                
                      <p className='mx-5' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '50px', color: 'white',paddingLeft:'20px'}}>Doket</p>
                      <p className='mb-4' style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, letterSpacing: '2%', color: 'white' }}>Your very own transport management system, a digital solution to everyday logistic operations. Introducing Doket, designed to help businesses run operations smoothly. Doket ensures timely and reliable deliveries to customers, enabling you to meet customer demands while focusing on your core business goals like optimizing the delivery cost and improving profits.</p>
                      <span className='mb-3' style={{ color: 'white', lineHeight: '25.7px', fontSize: '14px' }}>
                        <div class="row" >
                        <div class="col-6">
                          <li>First Mile</li>
                          <li>Mid Mile</li>
                          <li>RTO & RSVP</li>
                        </div> <div class="col-6">
                          <li>Hyperlocal</li>
                          <li>AI based Route Optimization</li>
                          <li>last Mile</li>
                        </div></div></span>
                    
                  
                </div>
              </div>
              <div className=''>
                <div className="p-3" style={{ border: '1px solid #cfcfcf', borderRadius: '10px', width: '100%', height: '350px', backgroundColor: '#10265f' }}>
                  <div className="col-12">
                    <img  src={"./images/umberlogo.svg"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', color: '10265f', backgroundColor: 'white' }} alt='' className="p-2" />

                  </div>

                  
                
                      <p className='mx-5' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '50px', color: 'white',paddingLeft:'20px'}}>Umber</p>
                      <p className='mb-4' style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 300, letterSpacing: '2%', color: 'white' }}>With advanced tracking technology and an extensive network of courier service  providers all under one umbrella, Umber ensures efficient and secure transportation reaching the corners of the country. With our easy to use dashboard and a hassle-free booking process, send anything anywhere seamlessly.</p>
                      <span className='mb-3 ' style={{ color: 'white', lineHeight: '25.7px', fontSize: '14px' }}>
                        <div class="row" >
                        <div class="col-6">
                          <li>3PL Partners</li>
                          <li>Smart Courier</li>
                          <li>Advanced Tracking</li>
                        </div> <div class="col-6">
                          <li>Smart Courier Selection</li>
                          <li>Order History / Bulk Bookings</li>
                          <li>Precise Cost Estimations</li>
                        </div></div></span>
                    
                  
                </div>
              </div>
              <div className=''>
                <div className="p-3" style={{ border: '1px solid #cfcfcf', borderRadius: '10px', width: '100%', height: '350px', backgroundColor: '#10265f' }}>
                  <div className="col-12">
                    <img  src={"./images/comesoonlogo.svg"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', color: '10265f', backgroundColor: 'white' }} alt='' className="p-2" />

                  </div>

                  
                
                      <p className='mx-5' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '50px', color: 'white',paddingLeft:'20px'}}>Coming Soon  - WMS</p>
                      <p className='' style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight:'27.2px',fontWeight: 300, letterSpacing: '2%', color: 'white' }}>Wait around and we would soon be with you.</p>
                    
                    
                  
                </div>
              </div>
            </Slider>
            <div className="row">
              <div className="col-6 "> <FontAwesomeIcon icon={faArrowLeft} className="mt-1 " style={{ float: 'left', fontSize: '40px',color:'#10265f' }} onClick={() => sliderRef.current.slickPrev()} /></div>
              <div className="col-6">
                <FontAwesomeIcon icon={ faArrowRight} className="mt-2" style={{float:'right',fontSize:'40px',color:'#10265f'}} onClick={()=> sliderRef.current.slickNext()}/>

              </div>




            </div>
          </div>
          <div className="col-12 col-xl-5  p-4 mt-3 " data-aos="fade-left">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "60px",
                lineHeight: "90px",
                fontWeight: 700,
                color: '#10265f'
              }}
            >
              Hello Us.
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="name" placeholder="Your Name" name='name' />
              </Form.Group>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your email" name='email' />
                </Col>
                <Col>
                  <Form.Control placeholder="Your Phone" name='phone' />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your Company" name='company' />
                </Col>
                <Col>
                  <Form.Control placeholder="Your position/role" name='role' />
                </Col>
              </Row>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Drop a line"
                  style={{ height: "100px" }}
                  className="mt-3"
                />
              </Col>
              <Col>
                <Button
                  className="mt-3 mb-5"
                  style={{
                    width: "100%",
                    backgroundColor: "#10265f",
                    border: "none",
                    color: "white",
                    height: '50px',
                    fontFamily: 'Poppins'
                  }}
                >
                  Book a call
                </Button>
              </Col>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
