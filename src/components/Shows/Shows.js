import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import SingleViews from "./SingleShows";
import performerObject from "./performersinfo";
import ShowsSlider from "./ShowsSlider";

const Shows = () => {
  return (
    <div className="showContainer">
      <Container maxWidth="md">
        <div className="topHeader">
          <h2 className="title">Upcoming Shows</h2>
          <a>View All</a>
        </div>
        <Box display={{ xs: "none", md: "block", sm: "block" }} component="div">
          <Grid container spacing={3}>
            {performerObject?.map((performer) => (
              <Grid key={performer.id} item sm={6} md={3}>
                <SingleViews performer={performer} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display={{ xs: "block", md: "none", sm: "none" }} component="div">
          <ShowsSlider />
        </Box>
      </Container>
    </div>
  );
};

export default Shows;
