import React from 'react'
import './Fonts.css'
import { Button } from "react-bootstrap";
import video from '../videos/azmuthvideo1.mp4'
export default function HeroComponent() {
  return (
    <div className='' style={{overflowX:'hidden',width:'100%'}}>
        <div className="row d-flex justify-content-around ">
            <div className="col-xl-5 col-md-12 container "  style={{backgroundColor:'#232F50', paddingLeft:'90px'}}>
             <div  data-aos="slide-right" style={{fontSize:'80px',color:'white',paddingTop:'70px',fontFamily:'Arbutus Slab'}}>Azmuth
             
             <p
             data-aos="slide-right"
              style={{
                lineHeight: "43.4px",
                paddingTop: "10px",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight:300,
                letterSpacing:'2%',
                color:'white',
                verticalAlign:'top',
                fontStyle:'regular',
                

              }}
              className="mt-3"
            >
             Streamline logistics effortlessly with our AI-powered software solutions. From pickup to doorstep delivery, we handle it all, ensuring a seamless and hassle-free process. Join us for a world of convenience, efficiency, and delightful customer experiences.
            </p>
            <Button
              variant="light"
              style={{ width: "60%", padding: "15px", border: "none" ,fontFamily:'Poppins'}}
              id="btn"
              className="mt-2"

            >
              Book a call
            </Button>
             
             </div>
            </div>
            <div className="col-xl-7" style={{backgroundColor:'#232F50'}}>
            <video autoPlay loop muted style={{width:'100%',height:'650px'}}>
              <source  src={video} type='video/mp4'/>
            </video>
            </div>
        </div>
       
    </div>
  )
}
