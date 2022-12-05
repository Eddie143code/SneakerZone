import React from "react";
import { Grid, Typography } from "@mui/material";

const footer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid>Contact us</Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid>About us</Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          Terms and conditions
        </Grid>
        <Grid item xs={6}>
          Circle, Circle, Circle
        </Grid>
      </Grid>
    </Grid>
  );
};

export default footer;
