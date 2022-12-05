import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Nike_Carousel } from "../../../components/main/home/home-images";

const index = () => {
  return (
    <Grid container>
      <Grid
        container
        style={{
          border: "1px solid black",
          height: "20vh",
          width: "100vw",
          marginTop: "6vh",
        }}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Image
            alt="1"
            src={Nike_Carousel}
            style={{ width: "100%", height: "20vh" }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container style={{ marginTop: "8vh" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          Name
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container style={{ marginTop: "6vh" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          Brand
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container style={{ marginTop: "8vh" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          Price
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container style={{ marginTop: "12vh", marginBottom: "16vh" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          Add to cart
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default index;
