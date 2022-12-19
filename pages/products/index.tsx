import React, { useEffect, useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid, Stack, Box, Button, Typography } from "@mui/material";
import Drawer from "../../components/main/drawer/drawer";
import axios from "axios";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSearchParams } from "next/navigation";
import { getProductData } from "../../store/functions";
import ProductContext from "../../store/context/products/context";

const productlist = () => {
  const [items, setItems] = useState<any>();

  const { getItems, allProducts, addtoCart, cart }: any =
    useContext(ProductContext);

  const searchParams = useSearchParams();

  const getData = async () => {
    const brand = searchParams.get("brand");
    const category = searchParams.get("category");
    
    getItems({brand, category});
  };

  useEffect(() => {
    getData();
  }, [searchParams]);

  const handleCart = (product: any) => {
    let singleProduct = allProducts.find((item: any) => {
      return item.id == product;
    });
    singleProduct = {...singleProduct, quantity: 1}
    addtoCart(singleProduct);

  };

  return (
    <Grid sx={{ display: "flex" }} container>
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
                marginTop: "8%",
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
                    style={{ width: "50%"}}
                    
                  >
                    Add to cart
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
