import React, { use, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import { Grid } from "@mui/material";
import Drawer from "../../../components/main/drawer/drawer";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useProductDispatch } from "../../../store/reducers/products";
import { useProducts } from "../../../store/reducers/products";
import { getOneProduct } from "../../../store/functions";

const productlist = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const searchParams = useSearchParams();

  const dispatch = useProductDispatch();

  const getProduct = async () => {
    const oneProduct = searchParams.get("item");
    console.log(oneProduct);
    const productTemp = await getOneProduct({ id: oneProduct });
    setSingleProduct(productTemp);
  };

  useEffect(() => {
    getProduct();
  }, [searchParams]);

  return (
    <Grid container>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <button onClick={() => console.log(singleProduct)}></button>
          {singleProduct && singleProduct.name}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default productlist;
