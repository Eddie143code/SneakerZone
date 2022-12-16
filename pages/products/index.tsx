import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid } from "@mui/material";
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
  }, []);

  return (
    <Grid sx={{ display: "flex" }} container>
      <Grid container>
        <button onClick={() => console.log(items)}>show items</button>
        <button onClick={() => console.log(products)}>show products</button>
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
                border: "1px solid black",
                height: "30vh",
                width: "100vw",
              }}
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
                <Image
                  loader={() => item.image}
                  alt={i}
                  src={item.image}
                  width={200}
                  height={100}
                />
              </Grid>
              <Grid item xs={4}>
                {item.name}
                <Grid item xs={1}></Grid>
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default productlist;
