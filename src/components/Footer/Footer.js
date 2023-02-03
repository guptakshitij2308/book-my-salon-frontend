import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-Main">
      <div className="Footer-Content">
        <div className="logo-socials">
          <h2 className="logo">
            <a href="/">
              Beautello
              <img
                className="logo-main"
                src="https://i.postimg.cc/J4zrbgfv/logo.png"
                alt="Logo-Main"
              />
            </a>
          </h2>
          <div className="socials">
            <a href="/">
              <i class="fa-brands fa-instagram logo-icon"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-facebook logo-icon"></i>
            </a>
            <a a href="/">
              <i class="fa-brands fa-twitter logo-icon"></i>
            </a>
            <a a href="/">
              <i class="fa-brands fa-youtube logo-icon"></i>
            </a>
          </div>
          <p className="para">
            Copyright © 2023 by Beautello™,
            <br /> All rights reserved.
          </p>
        </div>
        <div>
          <div className="Contact-Us">
            <div className="Footer-Heading">Contact Us</div>
            <p className="address para">
              623 Harrison St., 2nd Floor,
              <br />
              San Francisco, CA 94107
            </p>
            <p className="contact-details para">
              415-201-6370
              <br /> hello@omnifood.com
            </p>
          </div>
        </div>
        <div className="Account ">
          <div className="Footer-Heading">Account</div>

          <a href="/">
            Create account
            <i class="fa-solid fa-user-plus"></i>
          </a>
          <a href="/">
            Sign in<i class="fa-solid fa-arrow-right-to-bracket"></i>
          </a>
          <a a href="/">
            Register salon<i class="fa-regular fa-address-card"></i>
          </a>
          <a a href="/">
            Sign in owner<i class="fa-solid fa-circle-user"></i>
          </a>
        </div>
        <div className="Company">
          <div className="Footer-Heading">Learn More</div>
          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms</a>
          <a href="/">Help Center</a>
        </div>
      </div>
      <br />
      <div className="Copyright">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2023 © Beautello™ Ltd. All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;
