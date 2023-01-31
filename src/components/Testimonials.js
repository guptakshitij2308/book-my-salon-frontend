import "./Testimonials.css";
import React, { useState } from "react";
import TestimonialsDetails from "./TestimonialsData";
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

// // import Swiper core and required modules
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper";

// export default function App() {
//   return (
//     <div className="Testimonials-parent">
//       <section className="Testimonial-Area">
//         <div className="Container">
//           <div className="section-title">
//             <h2> Our Testimonials</h2>
//             <p>What our clients say about us ?</p>
//           </div>

//           <div className="testimonial-content">
//             <Swiper
//               slidesPerView={2}
//               spaceBetween={30}
//               pagination={{
//                 clickable: true,
//               }}
//               modules={[Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide>
//                 <div className="testimonial">
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type
//                   </p>
//                   <div className="client-info">
//                     <div className="client-img">
//                       <a href="/">
//                         <img
//                           src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                           alt="Client"
//                         />
//                       </a>
//                     </div>
//                     <div className="client-details">
//                       <h6>Alexa Grace</h6>
//                       <span>Software Developer , Amazon</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="testimonial">
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type
//                   </p>
//                   <div className="client-info">
//                     <div className="client-img">
//                       <a href="/">
//                         <img
//                           src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                           alt="Client"
//                         />
//                       </a>
//                     </div>
//                     <div className="client-details">
//                       <h6>Alexa Grace</h6>
//                       <span>Software Developer , Amazon</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="testimonial">
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type
//                   </p>
//                   <div className="client-info">
//                     <div className="client-img">
//                       <a href="/">
//                         <img
//                           src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                           alt="Client"
//                         />
//                       </a>
//                     </div>
//                     <div className="client-details">
//                       <h6>Alexa Grace</h6>
//                       <span>Software Developer , Amazon</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
