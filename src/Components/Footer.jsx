import React from 'react'
import './Fonts.css'
export default function Footer() {
  return (
    <div style={{  backgroundColor:' #232F50',borderBottom:'0.2px solid #3F5685',overflow:'hidden'}}>
    <div className="">
      <div className="row  d-flex justify-content-around">
        <div className=" col-md-12 col-sm-12 col-xl-3 col-lg-3 " id='logo'>
              <p className='pt-3' ><img  src={"./images/azmuthlogo.png"}  style={{ height:'50px', float: 'left' }}   className='w-sm-100'alt='' /></p>
        </div>
        <div className=" mt-2 col-md-12 col-sm-12 col-xl-3 col-lg-6 d-flex justify-content-center">
    <p style={{fontFamily:'Poppins',fontWeight:400,color:'white',fontSize:'12px'}} className='mt-4 '>       Hello@azmuth.com   |  © 2022-2023, Azmuth </p>
        </div>
        <div className=" mb-2 col-md-12 col-sm-12 col-xl-3 col-lg-3 " id='vi' >  
             
             <img  src={"./images/Facebook.png"} className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'2px',color:'#10265f'}}/>
             <img  src={"./images/Instagram.png"}  className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'1px',color:'#10265f'}}/>
             <img  src={"./images/WhatsApp.png"} n className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'1px',color:'#10265f'}}/>
             <img  src={"./images/linkedin.png"} className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'3px',color:'#10265f'}}/>
       
             </div>
      </div>
       </div>
  </div>
  )
}
