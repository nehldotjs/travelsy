import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../customs/carousel.css";
 
const Carousel = ({ data, render, sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "1.0px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "20px" }
      }
    ]
  };

  return (
    <div className="slider__container">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slider__item">
            {render(item, index)}
          </div>
        ))}
      </Slider> 
    </div>
  );
};

export default Carousel;
