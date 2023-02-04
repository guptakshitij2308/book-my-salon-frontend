import "./OpenCard.css";
import React from "react";
import { Link } from "react-router-dom";

function OpenCard() {
  return (
    <div className="card-parent">
      <div className="card-open">
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
        <div className="container-card">
          <div>
            <h1 className="salonName">Lorem ipsum</h1>
            <Link to="/book-my-slot">
              <a className="button-card">Book Now</a>
            </Link>
          </div>
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
          <h4 className="address-salon">Indira Nagar, Gwalior</h4>

          <div className="list">
            <h3>Availability</h3>
            <i class="fa-solid fa-clock"></i>
            11:00AM to 9:00PM
          </div>

          <div className="services-card-open">
            <h3>Services </h3>

            <div>
              <i class="fa-solid fa-scissors"></i>Hair Cut &nbsp;{" "}
              <i class="fa-solid fa-spa"></i>Spa
              <i class="fa-solid fa-user-hair-mullet"></i>
            </div>
          </div>

          {/* <b>service 1</b> <br/> cost */}
          <div className="reviews-card">
            <h2>Reviews </h2>
            <li>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.{" "}
            </li>
            <li>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.{" "}
            </li>
            <li>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.{" "}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenCard;
