import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SingleLabel from "./SingleLabel";
import labelIcon from "../../assets/images/Calendar.svg";
import LabelSlider from "./LabelSlider";
import { Box } from "@material-ui/core";
const Label = () => {
  return (
    <>
      <Box
        className="labelWrapper"
        display={{ xs: "none", md: "flex", sm: "flex" }}
        component="div"
      >
        <SingleLabel
          size="200"
          progress="60"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="200"
          progress="20"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="200"
          progress="60"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
        <SingleLabel
          size="200"
          progress="40"
          strokeWidth="2"
          circleOneStroke="#3A3B48"
          circleTwoStroke="#DD4CAC"
        />
      </Box>
      <Box
        className="labelWrapper"
        display={{ xs: "block", md: "none", sm: "none" }}
        component="div"
      >
        <LabelSlider />
      </Box>
    </>
  );
};

export default Label;
