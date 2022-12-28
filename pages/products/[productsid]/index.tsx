import React, { use, useEffect, useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import Drawer from "../../../components/main/drawer/drawer";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getOneProduct } from "../../../store/functions";
import Image from "next/image";
import ProductContext from "../../../store/context/products/context";
import { getProductData } from "../../../store/functions";

const OneProduct = () => {
  const [singleProduct, setSingleProduct] = useState<any>();
  const { allProducts, fetchAllProducts, addtoCart, cart }: any =
    useContext(ProductContext);
  const searchParams = useSearchParams();

  const getProduct = async () => {
    const oneProduct = searchParams.get("item");
    // const productFilter = allProducts.find((item: any) => {
    //   return item.id == oneProduct;
    // });

    //console.log(productFilter);
    //setSingleProduct(productFilter);
  };

  useEffect(() => {
    getProduct();
  }, [singleProduct]);

  const handleCart = () => {
    addtoCart(singleProduct);
  };

  return (
    <Grid container>
      <button onClick={() => console.log(singleProduct)}>single</button>
      <button onClick={() => console.log(allProducts)}>all</button>
      <button onClick={() => console.log(cart)}>cart</button>
      <Grid container style={{ height: "10vh" }}></Grid>
      <Grid container>
        {singleProduct && (
          <>
            <Grid xs={1}></Grid>
            <Grid item xs={10} style={{ height: "30vh" }}>
              <Stack direction="column" style={{ width: "100%" }}>
                <Image
                  loader={() => singleProduct.image}
                  alt="1"
                  src={singleProduct.image}
                  width={300}
                  height={220}
                />
              </Stack>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={2}></Grid>
            <Grid xs={7} spacing={2}>
              <Typography>{singleProduct.name} </Typography>
              <Typography>{singleProduct.brand}</Typography>
              <Typography>{singleProduct.category}</Typography>
              <Typography>R {singleProduct.price}</Typography>
            </Grid>
            <Grid xs={4}></Grid>
            <Grid xs={6}>
              <Button
                onClick={handleCart}
                variant="contained"
                style={{ marginTop: "5%" }}
              >
                Add to cart
              </Button>
            </Grid>
            <Grid xs={2}></Grid>
            <Grid xs={3}></Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default OneProduct;
