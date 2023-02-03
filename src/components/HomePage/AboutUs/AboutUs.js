import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div>
        <div className="Heading">
          <h3 className="about-us-main">About Us</h3>
          <h2 className="welcome">Welcome TO Beautello!</h2>
        </div>
        <div className="about">
          <div className="about-text">
            <h4 className="first-para">
              <i class="fa-solid fa-quote-left"></i>
              At Beautello, we have confidence in excellence with
              <br />
              a heart. We have made a platform that offers the most <br />
              noteworthy quality style benefits in a setting that
              <br />
              is more advantageous for the earth, our visitors,
              <br />
              and our staff.
              <i class="fa-solid fa-quote-right"></i>
            </h4>

            <h4 className="second-para">
              <i class="fa-solid fa-quote-left"></i>
              Select the salon, service, location and time and let
              <br />
              us take it from there for you. Our aim is to provide you easy
              <br />
              appointment booking so that you no longer have to wait at a
              <br />
              salon or worry about modifying the booking in case you have
              <br />
              to reschedule. The salon you booked will pamper you by
              <br />
              providing you a relaxing
              <br />
              experience
              <i class="fa-solid fa-quote-right"></i>
            </h4>
          </div>
          <div className="salon-pic">
            <img
              className="salon-barber"
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=604"
              alt="barber"
            />

            <img
              className="salon-barber"
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="barber"
            />

            <img
              className="salon-barber"
              src="https://images.unsplash.com/photo-1599387737838-660b75526801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="barber"
            />

            <img
              className="salon-barber"
              src="https://images.unsplash.com/photo-1613966802194-d46a163af70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxzYWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="barber"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
