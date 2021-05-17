import React from "react";
import Slider from "react-slick";
import performerObject from "./performersinfo";
import SingleViews from "./SingleShows";
const ShowsSlider = () => {
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
          slidesToShow: 1,
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
    <div className="showsSlider">
      <Slider {...settings}>
        {performerObject?.map((performer) => (
          <div key={performer.id} className="perfomerContainer">
            <SingleViews performer={performer} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowsSlider;
