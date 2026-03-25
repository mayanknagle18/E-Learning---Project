import React from 'react';
import logoImage from "../assets/images/thumbnails/logo-white-img.png";
import { Link } from 'react-router-dom';

const InnerFooter = () => {
  return (
        <footer className="el_footer">
      <div className="el_container">
        <div className="el_footer_wrapper">
          <div className="el_footer_top">
            <Link to="#" className="el_footer_logo">
              <img src={logoImage} alt="footer logo" />
            </Link>
            <h6>Virtual Class for Zoom</h6>
          </div>
          <div className="el_footer_center">
            <h5>Subscribe to get our Newsletter</h5>
            <form action="" className="el_form_wrap">
              <input type="email" className="el_input el_auth_input" placeholder="Your Email" />
              <button type="submit" className="el_btn el_primary_btn el_btn_rounded">Subscribe</button>
            </form>
          </div>
          <div className="el_footer_bottom">
            <ul>
              <li>
                <Link to="#" className="el_footer_link">Careers</Link>
              </li>
              <li>
                <Link to="#" className="el_footer_link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="el_footer_link">Terms & Conditions</Link>
              </li>
            </ul>
            <p>© 2026 LearnHub Learning Platform. | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default InnerFooter;