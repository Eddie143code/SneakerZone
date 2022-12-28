import React, { useEffect, useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, Stack, Box, Button, Typography } from "@mui/material";
import Drawer from "../../components/main/drawer/drawer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ProductContext from "../../store/context/products/context";

import { urlParams, productObj } from "../../types/types";

import ProductCard from "../../components/main/custom-cards/product-card/productCard";

const Productlist = () => {
  const { getItems, allProducts, addtoCart, cart }: any =
    useContext(ProductContext);

  const searchParams = useSearchParams();

  const getData = async () => {
    const brand: urlParams = searchParams.get("brand");
    const category: urlParams = searchParams.get("category");

    getItems({ brand, category });
  };

  useEffect(() => {
    getData();
  }, [searchParams]);

  const handleCart = (product: number) => {
    let singleProduct: productObj = allProducts.find((item: productObj) => {
      return item.id == product;
    });
    singleProduct = { ...singleProduct, quantity: 1 };
    addtoCart(singleProduct);
  };

  return (
    <Grid
      sx={{ display: "flex", backgroundColor: "#DC0000", color: "#fff6c3" }}
      container
    >
      <Grid container>
        <button onClick={() => console.log(allProducts)}>allProducts</button>
        <button onClick={() => console.log(cart)}>cart</button>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Drawer />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {allProducts &&
        allProducts.map((item: any, i: any) => {
          return (
            <Grid
              key={i}
              container
              style={{
                marginTop: "2%",
                height: "35vh",
                width: "100vw",
              }}
            >
              <Grid item xs={1} lg={3}></Grid>
              <Grid item xs={6} lg={5} style={{ marginTop: "5%" }}>
                <ProductCard text={item.name} image={item.image} />
              </Grid>
              <Grid
                item
                xs={6}
                lg={2}
                style={{
                  marginTop: "5%",
                }}
              >
                <Stack direction="column" style={{ marginLeft: "5%" }}>
                  <Box>{item.name}</Box>
                  <Box>{item.brand}</Box>
                  <Box>{item.category}</Box>
                  <Box>R {item.price}</Box>
                  {/* <Button
                    href={`/products/product?item=${item.id}`}
                    variant="contained"
                    style={{ width: "50%" }}
                  >
                    <Typography style={{ fontSize: "0.8em" }}>
                      View Product
                    </Typography> 
                  </Button> */}
                  <Button
                    onClick={() => handleCart(item.id)}
                    variant="contained"
                    sx={{ width: "60%", margin: 0 }}
                  >
                    Add to cart
                  </Button>
                </Stack>
                <Grid item xs={0} lg={2}></Grid>
              </Grid>
              <Grid item lg={1} style={{ marginTop: "5%" }}></Grid>
              <Grid item lg={4}></Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Productlist;
