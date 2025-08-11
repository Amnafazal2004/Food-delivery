import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footercontent">
        <div className="footercontentleft">
           <img src={assets.logo} alt="" />
           <p>Thank you for visiting our site. We are committed to providing you with the best experience possible. If you have any questions or feedback, please don't hesitate to contact us. Stay connected by following us on social media, and be the first to know about our latest updates and offers. Your privacy is important to us, and we ensure your information is kept secure. All rights reserved</p>
           <div className="footersocialicons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footercontentcenter">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footercontentright">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-233-2333-2233</li>
              <li>contact@tomato.com</li>
            </ul>
        </div>
       </div>
       <hr />
       <p className="footercopyright">
        Copyright 2024 © Tomato.com. All rights reserved
       </p>
    </div>
  )
}

export default Footer
