import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid, Stack, Box, Button, Typography } from "@mui/material";
import Drawer from "../../components/main/drawer/drawer";
import axios from "axios";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSearchParams } from "next/navigation";
import { useProductDispatch } from "../../store/reducers/products";
import { useProducts } from "../../store/reducers/products";
import { getProductData } from "../../store/functions";

const productlist = () => {
  const [items, setItems] = useState<any>("");

  const products = useProducts();

  const searchParams = useSearchParams();

  const dispatch: any = useProductDispatch();

  const getData = async () => {
    const brand = searchParams.get("brand");
    const category = searchParams.get("category");
    const data = await getProductData({ brand, category });
    dispatch({ type: "getProducts", payload: data });
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, [searchParams]);

  return (
    <Grid sx={{ display: "flex" }} container>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Drawer />
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
                height: "20vh",
                width: "100vw",
              }}
            >
              <Grid item xs={1} lg={3}></Grid>
              <Grid
                item
                xs={6}
                lg={3}
                style={{ marginTop: "5%", borderBottom: "1px solid black" }}
              >
                <Image
                  loader={() => item.image}
                  alt={i}
                  src={item.image}
                  width={200}
                  height={100}
                />
              </Grid>
              <Grid
                item
                xs={4}
                lg={2}
                style={{
                  marginTop: "5%",

                  borderBottom: "1px solid black",
                }}
              >
                <Stack direction="column" style={{ marginLeft: "5%" }}>
                  <Box>{item.name}</Box>
                  <Box>{item.brand}</Box>
                  <Box>{item.category}</Box>
                  <Box>R {item.price}</Box>
                  <Button
                    href={`/products/product?item=${item.id}`}
                    variant="contained"
                    style={{ width: "50%" }}
                  >
                    <Typography style={{ fontSize: "0.8em" }}>
                      View Product
                    </Typography>
                  </Button>
                </Stack>
                <Grid item xs={1} lg={4}></Grid>
              </Grid>
              <Grid
                item
                lg={1}
                style={{ marginTop: "5%", borderBottom: "1px solid black" }}
              ></Grid>
              <Grid item lg={4}></Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default productlist;
