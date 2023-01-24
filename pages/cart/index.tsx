import React, { useEffect, useState, useContext } from "react";
import { Grid, Stack, Box, Typography, IconButton, Card } from "@mui/material";
import Image from "next/image";
import ProductContext from "../../store/context/products/context";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CartCard from "../../components/main/custom-cards/cart-card/cartCard";

import { productObj } from "../../types/types";

const Cart = () => {
  const { cart, fetchTotal, total }: any = useContext(ProductContext);

  useEffect(() => {
    fetchTotal();
    console.log("render");
  }, []);

  return (
    <Grid
      container
      sx={{ backgroundColor: "#DC0000", color: "#fff6c3", fontWeight: 500 }}
    >
      {/*<button onClick={() => console.log(cart)}></button>*/}
      <Grid item xs={12} style={{ height: "10vh" }}></Grid>
      {cart &&
        cart.map((item: productObj) => {
          console.log(item);
          return (
            <>
              <Grid item xs={2} lg={3}></Grid>
              <Grid item xs={10} lg={5}>
                <Stack
                  key={item.id}
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 4, md: 5 }}
                  sx={{ marginTop: "5%" }}
                >
                  <CartCard text={item.name} image={item.image} />

                  <Stack direction="row" spacing={{ xs: 1, md: 5 }}>
                    <Typography>{item.name} </Typography>
                    <Typography>{item.brand} </Typography>
                    <Typography>{item.category} </Typography>
                    <Typography>R {item.price}</Typography>
                  </Stack>

                  {/*<Box sx={{flexDirection: "column"}}><IconButton onClick={()=> decrease(item.id) }><RemoveIcon/></IconButton><IconButton onClick={()=> increase(item.id)}><AddIcon /></IconButton></Box> */}
                </Stack>
              </Grid>
              <Grid item xs={0} lg={4}></Grid>
            </>
          );
        })}
      <Grid item xs={2} lg={7}></Grid>
      <Grid sx={{ marginTop: "5%" }} item xs={10} lg={5}>
        <Typography variant="h4">TOTAL: R {total}</Typography>
      </Grid>
    </Grid>
  );
};

export default Cart;
