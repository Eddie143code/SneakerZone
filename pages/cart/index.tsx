import React, { useEffect, useState } from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import {
  useProducts,
  useProductDispatch,
} from "../../store/context/products/reducer";

const cart = () => {
  const [cartItems, setCartItems] = useState<any>();

  const product: any = useProducts();
  const dispatch: any = useProductDispatch();
  const tempo = async () => {
    const temp = await dispatch({ type: "getCart" });
    setCartItems(temp);
  };
  useEffect(() => {
    tempo();
  }, []);

  return (
    <Grid container>
      <button onClick={() => console.log(product)}></button>
      <Grid item xs={12} style={{ height: "20vh" }}></Grid>
      {cartItems &&
        cartItems.map((item: any) => {
          return (
            <>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Box>
                  <Image loader={() => item.image} alt="1" src={item.image} />
                  <Typography>{item.name}</Typography>
                  <Typography>{item.brand}</Typography>
                  <Typography>{item.category}</Typography>
                  <Typography>{item.price}</Typography>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </>
          );
        })}
    </Grid>
  );
};

export default cart;
