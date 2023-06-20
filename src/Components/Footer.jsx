import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Fonts.css'
export default function Footer() {
  return (
    <div style={{backgroundColor:' #10265f'}}>
    <div className="container ">
      <div className="row d-flex justify-content-around">
        <div className="col-sm-12  col-md-12 col-xl-3 d-flex justify-content-center" id='logo'>
              <p className='mt-3' style={{fontWeight:900,color:'white',fontSize:'19.5px'}}><img src={"./images/azmuthlogo.png"} style={{ width: '100%',height:'60px', float: 'left' }}  alt='' /></p>
        </div>
        <div className="col-sm-12  col-md-12 col-xl-6 col-12 mt-4 text-center " style={{fontSize:'15px'}} id='info'>
               <a href="#action1" className='mx-3 ' style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:300}}>Account</a>
               <a href="#action2"  className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:300}}>Condition of Solution</a>
              <a href="#action3"   className='mx-3' style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:300}}>Privacy Notice</a>
              <a href="#action2"  className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:300}}>Intrest-based Ads</a>
              <a href="#action3"   className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:300}}><br></br><CopyrightIcon fontSize='10px'/>2022-2023 , Azmuth</a>
             </div>
        <div className="col-sm-12  col-md-12 col-xl-3  pb-3  d-flex justify-content-center mt-2"id='social-links' >  
            
        <InstagramIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <LinkedInIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <WhatsAppIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <FacebookIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
       
             </div>
      </div>
       </div>
  </div>
  )
}
