import React from "react";
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import "./Fonts.css";
import "animate.css";
export default function Features() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <div
        className="container mt-5 mb-5"
        style={{ position: "relative", textAlign: "center" }}
      >
        {/* LG */}
        <div
          className="d-none d-xl-block"
          data-aos="fade-up"
          style={{ paddingTop: "80px" }}
        >
          <img
            alt=""
            src={"./images/Spider.png"}
            style={{ width: "40%", height: "500px" }}
          />

          <div
            className="p-3"
            data-aos="fade-left"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "-20px",
              left: "73px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/1.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "left",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2 "
              style={{ fontWeight: "600", float: "left" }}
            >
              {" "}
              IRO - Intelligent Route Optimization
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-left"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "100px",
              left: "36px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/3.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "left",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "left" }}
            >
              {" "}
              Real time tracking
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-left"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "220px",
              left: "-8px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/5.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "left",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "left" }}
            >
              SCS - Smart Courier Selection
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-left"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "345px",
              left: "36px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/7.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "left",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2 "
              style={{ fontWeight: "600", float: "left" }}
            >
              First Mile
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-left"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "465px",
              left: "73px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/9.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "left",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "left" }}
            >
              Mid-Mile
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-right"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "-20px",
              right: "73px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/2.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "right",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2 "
              style={{ fontWeight: "600", float: "right" }}
            >
              Last- Mile
            </p>
          </div>
          <div
            className=""
            data-aos="fade-right"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingRight: "10px",
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "100px",
              right: "36px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/4.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "right",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "right", fontSize: "13px" }}
            >
              BND - Behavioural and Decision pattern analysis
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-right"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "220px",
              right: "-8px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/6.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "right",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2 "
              style={{ fontWeight: "600", float: "right" }}
            >
              AI based Algorithms
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-right"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "345px",
              right: "36px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/8.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "right",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "right" }}
            >
              3PL Aggregator
            </p>
          </div>
          <div
            className="p-3"
            data-aos="fade-right"
            style={{
              width: "35%",
              border: "1px solid #cfcfcf",
              position: "absolute",
              backgroundColor: "white",
              top: "465px",
              right: "73px",
              marginTop: "65px",
              borderRadius: "5px",
            }}
          >
            <img
              alt=""
              src={"./images/10.png"}
              style={{
                width: "50px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#10265f",
                color: "white",
                float: "right",
                borderRadius: "5px",
              }}
            />
            <p
              className="mx-auto px-2 pt-2"
              style={{ fontWeight: "600", float: "right" }}
            >
              Hyperlocal Deliveries
            </p>
          </div>
        </div>
        {/* MD/SM */}
        <div className="row d-xl-none d-md-block d-sm-block">
          <div className="col-12" data-aos="fade-left">
            <div
              className="p-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                alt=""
                src={"./images/1.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                IRO - Intelligent Route Optimization
              </p>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            {" "}
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "end",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Real time tracking
              </p>
              <img
                alt=""
                src={"./images/2.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div className="col-12" data-aos="fade-left">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                alt=""
                src={"./images/3.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                SCS - Smart Courier Selection
              </p>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "end",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                First Mile
              </p>
              <img
                alt=""
                src={"./images/4.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div className="col-12" data-aos="fade-left">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                alt=""
                src={"./images/5.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Mid-Mile
              </p>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "end",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Last- Mile
              </p>
              <img
                alt=""
                src={"./images/6.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div className="col-12" data-aos="fade-left">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                alt=""
                src={"./images/7.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                BND - Behavioural and Decision pattern analysis
              </p>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "end",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                AI based Algorithms
              </p>
              <img
                alt=""
                src={"./images/8.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div className="col-12" data-aos="fade-left">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
              }}
            >
              <img
                alt=""
                src={"./images/9.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                3PL Aggregator
              </p>
            </div>
          </div>
          <div className="col-12" data-aos="fade-right">
            <div
              className="p-3 mt-3"
              style={{
                border: "1px solid #cfcfcf",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "end",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Hyperlocal Deliveries
              </p>
              <img
                alt=""
                src={"./images/10.png"}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  padding: "10px",
                  backgroundColor: "#10265f",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
