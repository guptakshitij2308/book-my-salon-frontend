import "./BookMySlot.css";
import React from "react";

const BookMySlot = () => {
  return (
    <div className="book-my-slot">
      <div className="book-form">
        <h1 className="tagline">
          DON'T WAIT IN LINE ,
          <br /> BOOK ONLINE
        </h1>
        <div className="Details-All">
          <div className="details details-primary">
            <label className="input-text">Name</label>
            <input placeholder="Name" />
            <label className="input-text">Email</label>
            <input placeholder="Email" />
            <label className="input-text">Mobile Number</label>
            <input placeholder="Mobile Number" />
            <label className="input-text" for="Gender" name="Gender">
              Where did you hear from us?
            </label>
            <select id="Gender" required>
              <option value="">Please choose your gender:</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="details details-primary">
            <label className="input-text">Salon Name</label>
            <input placeholder="Salon Name" />
            <label className="input-text">
              Time Slot ( Between 09:00 to 21:00)
            </label>
            <input
              type="time"
              placeholder="Time Slot"
              min="08:00"
              max="22:00"
            />
            <label className="input-text">Number Of Hours</label>
            <input
              type="number"
              min="0"
              max="6"
              oninput="validity.valid||(value='');"
              className="number-of-hours"
            />

            <label className="input-text" for="Services" name="Services">
              Services Required
            </label>
            {/* <div className="services"> */}
            <select id="Services" required>
              <option value="">Choose the type of the service you want:</option>
              <option value="Hair Care">Hair Care</option>
              <option value="Grooming">Grooming</option>
              <option value="Manicures & Pedicures">
                Manicures & Pedicures
              </option>
              <option value="MakeUp">MakeUp</option>
              <option value="SPA">SPA</option>
              <option value="Grooming">Grooming</option>
            </select>
            {/* </div> */}
          </div>
        </div>

        <a className="book-button" href="/">
          Book My Slot
        </a>
      </div>
    </div>
  );
};

export default BookMySlot;
