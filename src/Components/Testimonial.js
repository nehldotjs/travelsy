import React, { useEffect, useRef } from "react";
import "../styles/testimonials.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "../customs/Carousel";
import TestimonialCards from "../customs/TestimonialCards";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true // whether animation should happen only once - while scrolling down
    });
  }, []);
  const Testimonial = [
    {
      id: 1,
      name: "Derek Dunn",
      header: "Best User Experience",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comment:
        "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed..."
    },
    {
      id: 2,
      name: "John Matt",
      header: "Friendly Staff",
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comment:
        "Whether it's a driving tour, a cruise, or a bus, leaf viewing is a great way to spend a fall vacation..."
    },
    {
      id: 3,
      name: "Linda Green",
      header: "Highly Recommend",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      comment:
        "Their platform is intuitive and smooth. I’ve never had such a seamless onboarding experience..."
    },
    {
      id: 4,
      name: "Carlos Reyes",
      header: "Reliable Support",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      comment:
        "Customer service here is top-notch. I had an issue and it was resolved within minutes..."
    },
    {
      id: 5,
      name: "Samantha Lin",
      header: "Beautiful Interface",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      comment:
        "Every detail in the design has been thoughtfully crafted. The interface is clean and modern..."
    },
    {
      id: 6,
      name: "James O’Connor",
      header: "Fast Performance",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
      comment:
        "Speed is everything, and this service nails it. One of the fastest platforms I’ve used."
    }
  ];

  return (
    <div className="testmonials-wrapper">
      <div className="testimonial-container">
        <div className="t-section1">
          <p data-aos="zoom-in">Testimonials</p>
          <h1 data-aos="zoom-in">
            what <br /> customers <br />
            <span>say about us</span>
          </h1>

          <div data-aos="zoom-in" className="t-carousel-btn ">
            <button onClick={() => sliderRef.current?.slickPrev()}>
              <IoIosArrowBack />
            </button>
            <div className="forward-slash"></div>
            <button onClick={() => sliderRef.current?.slickNext()}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div data-aos="zoom-in" className="t-section2">
          <Carousel
            data={Testimonial}
            sliderRef={sliderRef}
            render={(item, index) => <TestimonialCards key={index} {...item} />}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
