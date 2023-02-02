import React from "react";
import "./SignupOwner.css";

const SignupOwner = () => {
  return (
    <div className="form-parent">
      <div className="form-box">
        <h1>Register your Salon</h1>
        <form>
          <h2>Salon Information</h2>
          <div className="salon-group">
            <div className="salon-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name of the Salon" />
            </div>
            <div className="salon-field">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Salon Address" />
            </div>
            <div className="salon-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Owner Name" />
            </div>
            <div className="salon-field">
              <i className="fa-regular fa-calendar"></i>
              <input type="time" className="opentime" />
            </div>
            <div className="salon-field">
              <i className="fa-solid fa-phone"></i>
              <input type="number" placeholder="Contact No." />
            </div>
            <div className="salon-field">
              <i className="fa-regular fa-calendar"></i>
              <input type="time" className="closetime" />
            </div>
            <div className="salon-field">
              <i className="fa-solid fa-image"></i>
              <input type="file" placeholder="No file Chosen" />
            </div>
            <div className="salon-field salon-field-extend">
              <label htmlFor="Services">Services</label>
              <input type="checkbox" id="Haircut" name="Haircut" />
              <label htmlFor="Haircut">Haircut</label>
              <input
                type="checkbox"
                id="Manicure/Pedicure"
                name="Manicure/Pedicure"
              />
              <label htmlFor="Manicure/Pedicure">Manicure/Pedicure</label>
              <input type="checkbox" id="Massage" name="Massage" />
              <label htmlFor="Massage">Massage</label>
              <input type="checkbox" id="Facial" name="Facial" />
              <label htmlFor="Facial">Facial</label>
            </div>
            <div className="salon-field">
              <i className="fa-solid fa-circle-info"></i>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                placeholder="Salon Description"
              ></textarea>
            </div>
          </div>
          <h2>Data Information</h2>
          <div className="data-group">
            <div className="data-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="data-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="btn-field">
            <button className="button">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupOwner;
