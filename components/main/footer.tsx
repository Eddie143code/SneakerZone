import React from "react";
import { Grid, Typography } from "@mui/material";

const footer = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#850000", color: "#fff6c3", height: "20vh" }}
    >
      <Grid item xs={12} lg={2}></Grid>
      <Grid item xs={0} lg={4}>
        Contact us
      </Grid>
      <Grid item xs={0} lg={6}></Grid>

      <Grid item xs={12} lg={2}></Grid>
      <Grid item xs={0} lg={4}>
        About us
      </Grid>
      <Grid item xs={0} lg={6}></Grid>

      <Grid item xs={12} lg={2}></Grid>
      <Grid item xs={0} lg={4}>
        Terms and conditions
      </Grid>

      <Grid item xs={3} lg={3}></Grid>
      <Grid item xs={4} lg={2}>
        Circle, Circle, Circle
      </Grid>
      <Grid item xs={2} lg={1}></Grid>
    </Grid>
  );
};

export default footer;
