import React, { use, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import Drawer from "../../../components/main/drawer/drawer";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useProductDispatch } from "../../../store/reducers/products";
import { useProducts } from "../../../store/reducers/products";
import { getOneProduct } from "../../../store/functions";
import Image from "next/image";

const oneProduct = () => {
  const [singleProduct, setSingleProduct] = useState<any>();
  const searchParams = useSearchParams();

  const dispatch: any = useProductDispatch();
  const products: any = useProducts();

  const getProduct = async () => {
    const oneProduct = searchParams.get("item");
    const productTemp = await getOneProduct({ id: oneProduct });
    setSingleProduct(productTemp);
  };

  useEffect(() => {
    getProduct();
  }, [searchParams]);

  const handleCart = () => {
    dispatch({ type: "getOneProduct", payload: singleProduct });
  };

  return (
    <Grid container>
      <button onClick={() => console.log(products)}></button>
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

export default oneProduct;
