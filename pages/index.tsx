import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
import { useState, useContext } from "react";
import {
  Nike_Carousel,
  Adidas_Carousel,
  Converse_Carousel,
  Reebok_Carousel,
  Nike_Logo,
  Adidas_Logo,
  Converse_Logo,
  Reebok_Logo,
  Woman,
  Man,
  Child,
} from "../components/main/home/home-images/index";
import Carousel from "../components/main/carousel/carouselComp";
import GroupCard from "../components/main/home/groupCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

import ProductContext from "../store/context/products/context";

export default function Home() {
  const router = useRouter();

  const { allProducts, cart }: any = useContext(ProductContext);

  return (
    <Grid container sx={{ backgroundColor: "#DC0000", color: "#fff6c3" }}>
      {/* Navbar  */}
      {/* <button onClick={() => console.log(allProducts)}></button>
      <button onClick={() => console.log(cart)}></button> */}

      <Grid container sx={{ backgroundColor: "#EEEEEE" }}>
        <Grid item xs={0} lg={3.5}></Grid>
        <Grid item xs={12} lg={5} style={{ height: "35vh", marginTop: "8%" }}>
          <Carousel />
        </Grid>
        <Grid item xs={0} lg={3.5}></Grid>
      </Grid>

      {/*Logos*/}
      <Grid container style={{ marginTop: "12%" }}>
        <Grid item xs={3} lg={3}>
          <Image
            alt="1"
            src={Nike_Logo}
            style={{ width: "20vw", height: "60%" }}
          />
        </Grid>
        <Grid item xs={3} lg={3}>
          <Image
            alt="2"
            src={Adidas_Logo}
            style={{ width: "20vw", height: "60%" }}
          />
        </Grid>
        <Grid item xs={3} lg={3}>
          <Image
            alt="3"
            src={Converse_Logo}
            style={{ width: "20vw", height: "60%" }}
          />
        </Grid>
        <Grid item xs={3} lg={3}>
          <Image
            alt="4"
            src={Reebok_Logo}
            style={{ width: "20vw", height: "70%" }}
          />
        </Grid>
      </Grid>

      {/* Brand Cards */}

      <Grid container style={{ marginTop: "5%" }}>
        <Grid item xs={2} lg={5}></Grid>
        <Grid item xs={4} lg={6}>
          <Typography variant="h1">Brand</Typography>
        </Grid>
        <Grid item xs={6} lg={1}></Grid>
      </Grid>

      <Grid container style={{ height: "20vh", marginTop: "5%" }}>
        <Grid item sm={0} lg={3}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <GroupCard
            image={Nike_Carousel}
            text="Nike"
            group={"brand"}
            width={"70%"}
            height={"15vh"}
          />
        </Grid>
        <Grid item xs={0.5} lg={0}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <GroupCard
            image={Adidas_Carousel}
            text="Adidas"
            group={"brand"}
            width={"70%"}
            height={"15vh"}
          />
        </Grid>
        <Grid item sm={0} lg={3}></Grid>
      </Grid>

      <Grid container style={{ height: "20vh", marginTop: "2%" }}>
        <Grid item sm={0} lg={3}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <GroupCard
            image={Converse_Carousel}
            text="Converse"
            group={"brand"}
            width={"70%"}
            height={"15vh"}
          />
        </Grid>
        <Grid item xs={0.5} lg={0}></Grid>
        <Grid item xs={5.75} lg={3} style={{ textAlign: "center" }}>
          <GroupCard
            image={Reebok_Carousel}
            text="Reebok"
            group={"brand"}
            width={"70%"}
            height={"15vh"}
          />
        </Grid>
        <Grid item xs={0} lg={3}></Grid>
      </Grid>

      {/* Category Cards */}

      <Grid container style={{ marginTop: "6%" }}>
        <Grid item xs={2} lg={5}></Grid>
        <Grid item xs={5} lg={6}>
          <Typography variant="h2">Category</Typography>
        </Grid>
        <Grid item xs={5} lg={1}></Grid>
      </Grid>

      <Grid container style={{ height: "20vh", marginTop: "8%" }}>
        <Grid item xs={2} lg={3}></Grid>
        <Grid item xs={4} lg={3} style={{ textAlign: "center" }}>
          <GroupCard text={"Men"} group={"category"} width={"30%"} />
        </Grid>
        <Grid item xs={0.5} lg={0}></Grid>
        <Grid item xs={4} lg={3} style={{ textAlign: "center" }}>
          <GroupCard text={"Women"} group={"category"} width={"35%"} />
        </Grid>
        <Grid item xs={2} lg={3}></Grid>
      </Grid>

      <Grid container style={{ marginTop: "4%" }}>
        <Grid item xs={4.5} lg={4.5}></Grid>
        <Grid item xs={3} lg={3} style={{ textAlign: "center" }}>
          <GroupCard text={"Children"} group={"category"} width={"50%"} />
        </Grid>
        <Grid item xs={4.5} lg={4.5}></Grid>
      </Grid>

      {/* Logos */}
    </Grid>
  );
}
