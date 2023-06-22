import React, { useRef } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';
import './Fonts.css'
import 'animate.css';
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
                    <img  src={"./images/docket2.png"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', color: '10265f', backgroundColor: 'white' }} alt='' className="p-2" />

                  </div>

                  <div className="col-12" style={{ float: 'left' }}>
                    <div style={{ float: 'left' }}>
                      <spam className='' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '90px', color: 'white' }}>Doket - B2B</spam>
                      <p className='' style={{ fontFamily: 'Poppins', fontSize: '16px', lineHeight: '33px', fontWeight: 300, letterSpacing: '2%', color: 'white' }}>Your very own transport management system, a digital solution to everyday logistic operations.</p>
                      <span className='mb-3 mt-3' style={{ color: 'white', lineHeight: '25.7px', fontSize: '15px' }}><div class="row" style={{ display: 'flex' }}>
                        <div class="col-6">
                          <li>First Mile</li>
                          <li>Mid Mile</li>
                          <li>Last Mile</li>
                        </div> <div class="col-6">
                          <li>Hyperlocal</li>
                          <li>RTO</li>
                          <li>RVP</li>
                        </div></div></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=''>
                <div className="p-3" style={{ border: '1px solid #cfcfcf', borderRadius: '10px', width: '100%', height: '350px', backgroundColor: '#10265f' }}>
                  <div className="col-12">
                    <img  src={"./images/docket2.png"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', color: '10265f', backgroundColor: 'white' }} alt='' className="p-2" />

                  </div>
                  <div className="col-12" style={{ float: 'left' }}>
                    <p className='pt-3' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '200%', color: 'white' }}>Doket - B2B</p>
                  </div>
                  <div className="col-12" style={{ float: 'left', color: 'white' }}>
                    <li style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '33px', letterSpacing: '2%' }}>Courier Aggregator</li>
                    <li style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '33px', letterSpacing: '2%' }}>Smart Courier Selection</li>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="p-3" style={{ border: '1px solid #cfcfcf', borderRadius: '10px', width: '100%', height: '350px', backgroundColor: '#10265f' }}>
                    <div className="col-12">
                      <img  src={"./images/docket2.png"}  style={{ width: '50px', height: '50px', borderRadius: '9px', float: 'left', backgroundColor: 'white', color: '#10265f' }} alt='' className="p-2" />

                    </div>
                    <div className="col-12" style={{ float: 'left' }}>
                      <p className='pt-3' style={{ fontFamily: 'Poppins', fontSize: '30px', lineHeight: '200%', color: 'white' }}>Coming Soon - WMS</p>
                    </div>
                    <div className="col-12" style={{ float: 'left' }}>
                      <p style={{ fontFamily: 'Poppins', fontSize: '20px', lineHeight: '200%', color: 'white' }}>Wait around and we would soon be with you</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="row">
              {/* <div className="col-6 "> <ArrowBackIcon className="mt-1" style={{ float: 'left', fontSize: '40px' }} onClick={() => sliderRef.current.slickPrev()} /></div> */}
              <div className="col-6">
                <img  src={"./images/arrowleft.png"}  className="mt-2" style={{float:'right',fontSize:'40px'}} onClick={()=> sliderRef.current.slickNext()}/>

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
