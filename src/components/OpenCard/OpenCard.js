import "./OpenCard.css";
import React from "react";
import { Link } from "react-router-dom";
import SalonDetails from "../../Details/SalonDetails";
import ParticlesBackground from "../ParticlesBackground";

const OpenCard = () => {
  return (
    <div>
      <ParticlesBackground />
      <div className="parent-card">
        <div className="parent-card-image">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="salon-card"
          />
        </div>
        <div className="salon-card-details">
          <div className="salon-details-header">
            <h1 className="salonName">Lorem ipsum</h1>
            <div className="ratings">
              <h4>4.0</h4>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="salon-details-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Doec qu.
            </p>
          </div>
          <div className="timing-address">
            <div className="heading-details">
              <div className="timing-details">
                <h3 className="timing-heading">
                  Availability
                  <i class="fa-solid fa-clock"></i>
                </h3>
              </div>
              <div className="address-details">
                <h3 className="address-heading">
                  Address
                  <i class="fa-solid fa-location-dot"></i>
                </h3>
              </div>
            </div>

            <div className="timing-address-details">
              <div className="timing-content">
                <div className="start-end-time">
                  <div className="start-time">
                    <h3>Opening Time</h3>
                    <h3>9:00 AM</h3>
                  </div>
                  <div className="close-time">
                    <h3>Closing Time</h3>
                    <h3>9:00 PM</h3>
                  </div>
                </div>
              </div>
              <div className="address-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec qu
                </p>
              </div>
            </div>
          </div>

          <div className="services-book">
            <div className="services-salon">
              <h3>Services Offered</h3>
              <div className="services-offered">
                <li>
                  <i class="fa-solid fa-circle-check"></i>Haircut
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>Spa
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>Manicure
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>Pedicure
                </li>
              </div>
            </div>
          </div>
          <a className="book-now">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default OpenCard;
