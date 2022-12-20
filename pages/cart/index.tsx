import React, { useEffect, useState, useContext } from "react";
import { Grid, Stack, Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import ProductContext from "../../store/context/products/context";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { getTotal } from "../../store/context/products/actions";

const cart = () => {
  const [cartItems, setCartItems] = useState<any>();
  const [cartTotal, setCartTotal] = useState<any>();

  const { fetchCart, cart, increase, decrease, fetchTotal, total }: any =
    useContext(ProductContext);

  useEffect(() => {
    fetchTotal();
    console.log("render");
  }, [cartItems]);

  return (
    <Grid container>
      <button onClick={() => console.log(cartItems)}></button>
      <button onClick={() => console.log(cart)}></button>
      <Grid item xs={12} style={{ height: "20vh" }}></Grid>
      {cart &&
        cart.map((item: any) => {
          console.log(item);
          return (
            <>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Stack
                  key={item.id}
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 1, md: 5 }}
                >
                  <Image
                    loader={() => item.image}
                    alt={item.name}
                    src={item.image}
                    width={200}
                    height={100}
                  />
                  <Typography>{item.name}</Typography>
                  <Typography>{item.brand}</Typography>
                  <Typography>{item.category}</Typography>
                  {/*<Box sx={{flexDirection: "column"}}><IconButton onClick={()=> decrease(item.id) }><RemoveIcon/></IconButton><IconButton onClick={()=> increase(item.id)}><AddIcon /></IconButton></Box> */}
                  <Typography>R {item.price}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={2}></Grid>
            </>
          );
        })}
      <Grid item xs={2} lg={6}></Grid>
      <Grid item xs={4} lg={4}>
        TOTAL: R {total}
      </Grid>
      <Grid item xs={6} lg={2}></Grid>
    </Grid>
  );
};

export default cart;
