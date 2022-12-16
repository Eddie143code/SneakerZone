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
} from "../components/main/home/home-images/index";
import Carousel from "../components/main/carousel/carouselComp";
import BrandCard from "../components/main/home/brandCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

export default function Home() {
  const router = useRouter();

  return (
    <Grid container>
      {/* Navbar  */}

      <Grid container>
        <Grid item xs={0} lg={3.5}></Grid>
        <Grid item xs={12} lg={5} style={{ height: "40vh", marginTop: "8%" }}>
          <Carousel />
        </Grid>
        <Grid item xs={0} lg={3.5}></Grid>
      </Grid>

      {/* Cards */}

      <Grid container style={{ height: "20vh" }}>
        <Grid item sm={0} lg={3}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <Link href="/products?brand=Nike">Nike</Link>
          <BrandCard image={Nike_Carousel} />
        </Grid>
        <Grid item xs={0.5} lg={0}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <Link href="/products?brand=Adidas">Adidas</Link>
          <BrandCard image={Adidas_Carousel} />
        </Grid>
        <Grid item sm={0} lg={3}></Grid>
      </Grid>

      <Grid container style={{ height: "20vh", marginTop: "2%" }}>
        <Grid item sm={0} lg={3}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <Link href="/products?brand=Converse">Converse</Link>
          <BrandCard image={Converse_Carousel} />
        </Grid>
        <Grid item xs={0.5} lg={0}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <Link href="/products?brand=Reebok">Reebok</Link>

          <BrandCard image={Reebok_Carousel} />
        </Grid>
        <Grid item sm={0} lg={3}></Grid>
      </Grid>

      {/* Logos */}

      <Grid container style={{ marginTop: "12%" }}>
        <Grid item xs={4.5} lg={5.5}></Grid>
        <Grid item xs={3} lg={1}>
          <Image
            alt="1"
            src={Nike_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5} lg={5.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "10%" }}>
        <Grid item xs={4.5} lg={5.5}></Grid>
        <Grid item xs={3} lg={1}>
          <Image
            alt="2"
            src={Adidas_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5} lg={5.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "10%" }}>
        <Grid item xs={4.5} lg={5.5}></Grid>
        <Grid item xs={3} lg={1}>
          <Image
            alt="3"
            src={Converse_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5} lg={5.5}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "10%" }}>
        <Grid item xs={4.5} lg={5.5}></Grid>
        <Grid item xs={3} lg={1}>
          <Image
            alt="4"
            src={Reebok_Logo}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={4.5} lg={5.5}></Grid>
      </Grid>
    </Grid>
  );
}
