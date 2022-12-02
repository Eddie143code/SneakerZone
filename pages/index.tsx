import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Grid,
  ImageListItem,
  ImageList,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  Nike_Carousel,
  Adidas_Carousel,
  Converse_Carousel,
  Reebok_Carousel,
  Nike_Logo,
  Adidas_Logo,
  Converse_Logo,
  Reebok_Logo,
} from "../components/home/home-images/index";
import Carousel from "../components/carousel/carouselComp";
import BrandCard from "../components/home/brandCard";

export default function Home() {
  return (
    <Grid container>
      {/* Navbar  */}

      <Grid container>
        <Grid item xs={0} xl={2}></Grid>
        <Grid item xs={12} xl={8} style={{ height: "40vh", marginTop: "15%" }}>
          <Carousel />
        </Grid>
        <Grid item xs={0} xl={2}></Grid>
      </Grid>

      {/* Cards */}

      <Grid container style={{ height: "20vh" }}>
        <Grid item xs={5.75} style={{ textAlign: "center" }}>
          <BrandCard image={Nike_Carousel} text={"Nike"} />
        </Grid>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={5.75} style={{ textAlign: "center" }}>
          <BrandCard image={Adidas_Carousel} text={"Adidas"} />
        </Grid>
      </Grid>

      {/* Cards */}

      <Grid container>
        <Grid item xs={5.75} style={{ textAlign: "center" }}>
          <BrandCard image={Converse_Carousel} text={"Converse"} />
        </Grid>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={5.75} style={{ textAlign: "center" }}>
          <BrandCard image={Reebok_Carousel} text={"Reebok"} />
        </Grid>
      </Grid>

      {/* Logos */}

      <Grid container style={{ marginTop: "20%" }}>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={3}>
          <Image
            alt="1"
            src={Nike_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "20%" }}>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={3}>
          <Image
            alt="2"
            src={Adidas_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "20%" }}>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={3}>
          <Image
            alt="3"
            src={Converse_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "15%" }}>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={3}>
          <Image
            alt="4"
            src={Reebok_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5}></Grid>
      </Grid>
    </Grid>
  );
}
