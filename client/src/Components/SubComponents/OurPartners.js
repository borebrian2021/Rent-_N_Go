import React from 'react';
import moringa from '../../Image/Moringa.png'
import logo from '../../Image/logo.png'

const OurPartners = () => {
    return (
       
             <div class="partners bg-white rec-pro">
            <div class="container-fluid">
                <div class="sec-title">
                    <h2><span>Our </span>Partners</h2>
                    <p>The Companies That Represent Us.</p>
                </div>
                <div class="partners">
                    <div class="owl-item" ><img className='partners_img' src={logo} alt=""/></div>
                    <div class="owl-item" ><img className='partners_img' src={moringa} alt=""/></div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default OurPartners;
