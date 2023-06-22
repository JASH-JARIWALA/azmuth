import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Fonts.css'
export default function Navbar() {
  return (
    <div style={{  backgroundColor:' #232F50',borderBottom:'0.2px solid #3F5685',overflow:'hidden'}}>
    <div className="container">
      <div className="row ">
        <div className=" col-6  d-flex justify-content-between" id='logo'>
              <p className='' ><img  src={"./images/azmuthlogo.png"}  style={{ width: '100%',height:'70px', float: 'left' }}   className='w-sm-100'alt='' /></p>
        </div>
        <div className=" col-6 text-center d-flex justify-content-end" >  
             
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
