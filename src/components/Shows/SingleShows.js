import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import showsBtn1 from "../../assets/images/showsBtn.svg";
import showsBtn2 from "../../assets/images/showsBtn2.svg";
import Arrow from "../../assets/images/Arrow.svg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#111229",
    boxShadow: "6px -6px 2px #27347c",
    paddingBottom: "25px",
    borderRadius: "8px",
  },
  media: {
    height: 230,
  },
});
const onHover = () => {
  console.log("ol");
};
const SingleViews = ({ performer }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={performer.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <span className="pCategory">{performer.category}</span>
          <Typography
            gutterBottom
            variant="h5"
            className="performerName"
            component="h3"
          >
            {performer.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className="showBtnContainer">
        <Button size="small" className="btnAction">
          More info <img src={Arrow} alt="" />
        </Button>
        <Button onMouseHover={onHover} className="iconBtn" size="small">
          <img
            src={showsBtn1}
            alt="show"
            onMouseOver={(e) => (e.currentTarget.src = showsBtn2)}
            onMouseOut={(e) => (e.currentTarget.src = showsBtn1)}
          />
        </Button>
      </CardActions>
    </Card>
  );
};
export default SingleViews;
