import React, {use, useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import Link from "next/link";
import {Grid} from "@mui/material"
import Drawer from "../../components/drawer/drawer"

const productlist = () => {
const  items = [1,2,3,4,5]

  return (
    <Grid container>
      <Grid container><Grid item xs={1}></Grid><Grid item xs={2}>            <Drawer /></Grid><Grid item xs={9}></Grid></Grid>
      {items.map((item : any, i : any)=> { 
        return <Grid key={i} container style={{border: "1px solid black", height: "30vh", width: '100vw'}}><Grid item xs={1}></Grid><Grid item xs={6}>box</Grid><Grid item xs={4}>Name<Grid item xs={1}></Grid></Grid></Grid>
        })}

    </Grid>
  );
};



export default productlist;
