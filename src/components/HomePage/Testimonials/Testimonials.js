import "./Testimonials.css";
import React, { useState } from "react";
import TestimonialsDetails from "../../../Details/TestimonialsData";
// // import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  // eslint-disable-next-line
  const [Details, setDetails] = useState(TestimonialsDetails);

  return (
    <div className="Testimonials-parent">
      <section className="Testimonial-Area">
        <div className="Container">
          <div className="section-title">
            <h2> Our Testimonials</h2>
            <p>What our clients say about us ?</p>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Details.map((Details) => {
              return (
                <SwiperSlide>
                  <div className="testimonial" key={Details.id}>
                    <p>{Details.content}</p>
                    <div className="client-info">
                      <div className="client-img">
                        <a href="/">
                          <img src={Details.Image} alt="Client" />
                        </a>
                      </div>
                      <div className="client-details">
                        <h6>{Details.name}</h6>
                        <span>{Details.profession}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          ;
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
