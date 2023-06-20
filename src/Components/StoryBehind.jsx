import React from 'react'
import './Fonts.css'
export default function StoryBehind() {
  return (
    <div style={{overflowX:'hidden'}}>
    <div className='container my-4 ' >
        <div className='row d-flex justify-content-between' >
        <div className='col-xl-6 col-md-12 col-sm-5 mt-5 mb-5'data-aos="fade-right">
                <img src={"./images/bgcontact.png"} style={{ width: '100%', float: 'right' }}  alt='' />
            </div>
            <div className='col-xl-6 col-md-12 col-sm-5 ps-sm-5' 
     style={{display:'fllex', alignSelf:'center',padding:'10px'}} data-aos="fade-left">
        <strong style={{fontFamily:'Poppins',fontWeight:700,fontSize:'82px',lineHeight:'90px',color:'#10265f' }} className='mt-5 mb-5'>Our Vision</strong>
        <p style={{fontFamily:'Poppins',fontWeight:'300',fontSize:'26px',lineHeight:'43.4px',letterSpacing:'2%',verticalAlign:'top',alignContent:'left'}} className='my-4'>“At its core, Azmuth stands for innovation. Azmuth came to life to create a world where complexities of shipping and delivery are transformed into effortless and delightful experiences. We strive to bring convenience and create unparalleled value for our customers.”</p>
        
        </div>
          
        </div>
    </div>
</div>
  )
}
