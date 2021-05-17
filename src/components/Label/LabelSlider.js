import React, { Component } from "react";
import Slider from "react-slick";
import SingleLabel from "./SingleLabel";

const LabelSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: "",
    prevArrow: "",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          arrows: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="labelSlider">
      <Slider {...settings}>
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="110"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
      </Slider>
    </div>
  );
};

export default LabelSlider;
