import React from "react";
import Slider from "react-slick";
import allReviewsData from "./allReviewsData";
const ReviewsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: "",
    prevArrow: "",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="reviewSlider">
      <Slider {...settings}>
        {allReviewsData?.map((review) => (
          <div key={review.id} className="singleReview singleSlider ">
            <div className="reviewProfile">
              <img src={review.imgSrc} alt="" />
              <div className="reviewInfo">
                <h6>{review.name}</h6>
                <div className="reviewAddress">
                  <img src={review.countryFlag} alt="" />
                  <span style={{ marginLeft: "5px" }}>Palo Alto, CA</span>
                </div>
              </div>
            </div>
            <div className="reviewContent">
              <p>{review.reviewContent}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
