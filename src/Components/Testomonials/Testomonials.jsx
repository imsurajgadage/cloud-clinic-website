import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../../Common/Data";
import SampleNextArrow from "../../Common/Arrows/SampleNextArrow";
import SamplePrevArrow from "../../Common/Arrows/SamplePrevArrow";

const Testomonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      id="slider-container"
      className="w-2/3 max-md:w-11/12 p-10 max-lg:p-5 mx-auto"
    >
      <p className="sections_heading">Our Testomonials</p>
      <Slider {...settings}>
        {testimonialData?.map((item) => (
          <article className="shadow-xl w-10 drop-shadow-xl p-6 rounded-lg gap-2">
            <p className="text-gray-800 m-auto text-xl"><b>"{" "}</b>{item?.experience}<b>{" "}"</b></p>
            <span className="text-gray-700 font-semibold text-2xl max-md:text-lg">
              {"-"} {item?.name}
            </span>
          </article>
        ))}
      </Slider>
    </div>
  );
};

export default Testomonials;
