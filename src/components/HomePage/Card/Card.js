import "./CardStyles.css";
import React, { useState } from "react";
import SalonDetails from "../../../Details/SalonDetails";

const Card = () => {
  // eslint-disable-next-line
  const [detail, setDetails] = useState(SalonDetails);

  return (
    <div className="Card-Component">
      <section className="Salons">
        <div className="center">
          <h3>Popular Salons</h3>
        </div>

        <div className="row-card">
          {detail.map((detail) => {
            return (
              <div className="column" key={detail.id}>
                <div className="Salon">
                  <div className="card">
                    <div className="salon-image">
                      <div className="salon-tag">Best</div>
                      <img src={detail.Image} alt="Salon-1" />
                    </div>

                    <div className="salon-content">
                      <h3>{detail.heading}</h3>
                      <div className="mark">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{detail.span}</span>
                      </div>
                      <span className="amount">{detail.amount}</span>
                    </div>
                    <div className="salon-footer">
                      <ul>
                        <li>
                          <span>{detail.size}</span>
                        </li>
                        <li>
                          <img src={detail.chairImage} alt="Chair-1" />
                          <span>{detail.chairs}</span>
                        </li>
                        <li>
                          <img src={detail.mirrorImage} alt="mirror" />
                          <span>{detail.mirror}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-salons">
          <a className="more-salon-btn" href="/">
            More Salons
          </a>
        </div>
      </section>
    </div>
  );
};

export default Card;
