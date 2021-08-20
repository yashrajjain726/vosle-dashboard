import ReviewCard from "./card";
import React from "react";
import { Grid } from "@material-ui/core";

  
class Cards extends React.Component {
  state = {};
  render() {
    return (
      <Grid container spacing={3} style={{padding:'2%'}}>
        <Grid item sm={4} xs={12}>
        <ReviewCard title="Total AR Experiences" number="361" famous="Number of Total AR Experiences"/>
        </Grid>
        <Grid item sm={4} xs={12}>
        <ReviewCard  title="Total View Count" number="18153" famous="Total counts of AR Experiences"/>
           </Grid>
        <Grid item sm={4} xs={12}>
          <ReviewCard  title="Most Viewed" number="cube" famous="Most Viewed Experiences"/>
        </Grid>
      </Grid>
    );
  }
}

export default Cards;
