import React, { use, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid } from "@mui/material";
import Drawer from "../../components/main/drawer/drawer";
import axios from "axios";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "../../components/main/sidebar/sidebar";

const productlist = () => {
  const [items, setItems] = useState<any>("");

  const getData = async () => {
    const data: any = await axios.get("/api/products");
    setItems(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid sx={{ display: "flex" }} container>
      <Grid container>
        <button onClick={() => console.log(items)}></button>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        {isMobile ? <Drawer /> : <Sidebar />}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {items &&
        items.map((item: any, i: any) => {
          return (
            <Grid
              key={i}
              container
              style={{
                border: "1px solid black",
                height: "30vh",
                width: "100vw",
              }}
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
                <Image
                  loader={() => item.image}
                  alt={i}
                  src={item.image}
                  width={200}
                  height={100}
                />
              </Grid>
              <Grid item xs={4}>
                {item.name}
                <Grid item xs={1}></Grid>
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default productlist;
