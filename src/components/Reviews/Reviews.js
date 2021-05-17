import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import allReviewsData from "./allReviewsData";
import Pagination from "./Pagination";
import ReviewsSlider from "./ReviewsSlider";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewPerPage] = useState(3);

  useEffect(() => {
    setReviews(allReviewsData);
  }, []);
  const lastReviewIndex = currentPage * reviewPerPage;
  const firstReviewIndex = lastReviewIndex - reviewPerPage;

  const currentReviews = reviews.slice(firstReviewIndex, lastReviewIndex);
  const totalPage = Math.ceil(reviews?.length / reviewPerPage);
  return (
    <div className="reviews">
      <Container maxWidth="lg">
        <div className="topHeader">
          <h2 className="title">Reviews</h2>
          <Box
            display={{ xs: "none", md: "block", sm: "block" }}
            component="div"
          >
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
            />
          </Box>
        </div>
        <Box display={{ xs: "none", md: "block", sm: "block" }} component="div">
          <Grid container spacing={3}>
            {currentReviews?.map((review) => (
              <Grid key={review.id} item sm={6} md={4}>
                <div className="singleReview">
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
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box display={{ xs: "block", md: "none", sm: "none" }} component="div">
          <ReviewsSlider />
        </Box>
      </Container>
    </div>
  );
};

export default Reviews;
