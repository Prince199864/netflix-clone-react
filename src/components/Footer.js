import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-block">
        <div className="footer-items">
          <ul className="footer-ul">
            <li className="footer-li"><a href="#" >FAQ</a></li>
            <li className="footer-li"><a href="#" >Investor Relations</a></li>
            <li className="footer-li"><a href="#" >Privacy</a></li>
            <li className="footer-li"><a href="#" >Speed Test</a></li>
          </ul>
        </div>
        <div className="footer-items">
          <ul className="footer-ul">
            <li className="footer-li"><a href="#" >Help Centre</a></li>
            <li className="footer-li"><a href="#" >Jobs</a></li>
            <li className="footer-li"><a href="#" >Cookie Preferences</a></li>
            <li className="footer-li"><a href="#" >Legal Notices</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-block">
        <div className="footer-items">
          <ul className="footer-ul">
            <li className="footer-li"><a href="#" >Account</a></li>
            <li className="footer-li"><a href="#" >Ways to Watch</a></li>
            <li className="footer-li"><a href="#" >Corporate Information</a></li>
            <li className="footer-li"><a href="#" >Only on Netflix</a></li>
          </ul>
        </div>
        <div className="footer-items">
          <ul className="footer-ul">
            <li className="footer-li"><a href="#" >Media Centre</a></li>
            <li className="footer-li"><a href="#" >Terms of Use</a></li>
            <li className="footer-li"><a href="#" >Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
