import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Fonts.css'
export default function Navbar() {
  return (
    <div style={{  backgroundColor:' #10265f',borderBottom:'1px solid grey',overflow:'hidden'}}>
    <div className="container">
      <div className="row ">
        <div className=" col-6  d-flex justify-content-between" id='logo'>
              <p className='mt-2 ' ><img  src={"./images/azmuthlogo.png"}  style={{ width: '100%',height:'70px', float: 'left' }}   className='w-sm-100'alt='' /></p>
        </div>
        <div className=" col-6 text-center d-flex justify-content-end" >  
             
             <InstagramIcon className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <LinkedInIcon className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <WhatsAppIcon className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <FacebookIcon className='mx-1 mt-4'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
       
             </div>
      </div>
       </div>
  </div>
  )
}
