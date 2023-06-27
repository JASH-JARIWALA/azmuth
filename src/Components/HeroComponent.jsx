import React from "react";
import "./Fonts.css";
import { Button } from "react-bootstrap";
// import video from "../videos/azmuthvideo1.mp4";

const video =
  "https://azmuth.s3.ap-south-1.amazonaws.com/azmuthvideo1.1370eaff70b528f4c1d7.mp4";
const image = "/images/azmuthvideo.gif";
export default function HeroComponent() {
  return (
    <>
      <div style={{ overflowX: "hidden" }} className="d-none">
        <div className="row " style={{ backgroundColor: "#232F50" }}>
          <div className="col-xl-5 col-sm-5 col-md-12 order-xl-first order-lg-first order-md-last order-sm-last">
            <div>
              <div
                data-aos="slide-right"
                style={{
                  fontSize: "60px",
                  color: "white",
                  paddingTop: "50px",
                  fontFamily: "Arbutus Slab",
                }}
                className="mk"
              >
                Azmuth
                <p
                  data-aos="slide-right"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 300,
                    letterSpacing: "2%",
                    color: "white",
                    verticalAlign: "top",
                    fontStyle: "regular",
                  }}
                >
                  Streamline logistics effortlessly with our AI-powered software
                  solutions. From pickup to doorstep delivery, we handle it all,
                  ensuring a seamless and hassle-free process. Join us for a
                  world of convenience, efficiency, and delightful customer
                  experiences.
                </p>
                <Button
                  variant="light"
                  style={{
                    width: "60%",
                    padding: "15px",
                    border: "none",
                    fontFamily: "Poppins",
                  }}
                  id="btn"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-sm-5 col-md-12  order-md-first order-lg-last order-xl-last">
            <img src={image} alt="" style={{ width: "100%" }} />
            <video autoPlay loop muted style={{ width: "100%" }}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div style={{ overflowX: "hidden" }} className=" d-sm-block ">
        <div className="row " style={{ backgroundColor: "#232F50" }}>
          <div className="col-xl-5 col-sm-5 col-md-12 order-xl-first order-lg-first order-md-last order-sm-last">
            <div>
              <div
                data-aos="slide-right"
                style={{
                  fontSize: "60px",
                  color: "white",
                  paddingTop: "50px",
                  fontFamily: "Arbutus Slab",
                }}
                className="mk"
              >
                Azmuth
                <p
                  data-aos="slide-right"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 300,
                    letterSpacing: "2%",
                    color: "white",
                    verticalAlign: "top",
                    fontStyle: "regular",
                  }}
                >
                  Streamline logistics effortlessly with our AI-powered software
                  solutions. From pickup to doorstep delivery, we handle it all,
                  ensuring a seamless and hassle-free process. Join us for a
                  world of convenience, efficiency, and delightful customer
                  experiences.
                </p>
                <Button
                  variant="light"
                  style={{
                    width: "60%",
                    padding: "15px",
                    border: "none",
                    fontFamily: "Poppins",
                  }}
                  id="btn"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-sm-5 col-md-12  order-first">
            <img
              src={image}
              alt=""
              className="dashboard-gif"
              style={{ width: "100%" }}
            />
            <video
              autoPlay
              loop
              muted
              className="dashboard-video"
              style={{ width: "100%" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
