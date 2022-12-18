import React, { useEffect, useState, useContext } from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import ProductContext from "../../store/context/products/context";

const cart = () => {
  const [cartItems, setCartItems] = useState<any>();
  const { fetchCart, cart }: any = useContext(ProductContext);
  const tempo = async () => {
    const temp = fetchCart();
    setCartItems(temp);
  };
  useEffect(() => {
    tempo();
  }, []);

  return (
    <Grid container>
      <button onClick={() => console.log(cartItems)}></button>
      <button onClick={() => console.log(cart)}></button>
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
