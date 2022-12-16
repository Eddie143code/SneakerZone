import React, { useState, useEffect } from "react";
import Drawer from "../../components/admin/drawerAdmin";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  List,
  ListItem,
  Button,
} from "@mui/material";
import Image from "next/image";
import Navbar from "../../components/admin/navbar";
import axios from "axios";
import CLOUDINARY from "../../env/cloudinary";
import { useProductDispatch, useProducts } from "../../store/reducers/products";
import { getProductData, deleteProduct } from "../../store/functions";

const drawerWidth = 200;

const allProducts = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [items, setItems] = useState<any>("");

  const products: any = useProducts();

  const dispatch: any = useProductDispatch();

  const getData = async () => {
    const data = await getProductData({});
    await dispatch({ type: "getProducts", payload: data });

    setItems(products);
  };

  const deleteData = async (item: any) => {
    const data = await deleteProduct({ id: item });
    const newItems = await dispatch({
      type: "deleteProduct",
      payload: { products: products, data: data },
    });
    setItems(newItems);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container>
      <Box sx={{ display: "flex" }}>
        <Navbar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Drawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
            {/*  <button onClick={() => console.log(items)}></button>*/}

            {products &&
              products.products.map((item: any) => {
                return (
                  <Box style={{ borderStyle: "solid", borderWidth: "0.1rem" }}>
                    <Image
                      loader={() => item.image}
                      alt={item.id}
                      src={item.image}
                      width={180}
                      height={80}
                    ></Image>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="h6">{item.brand}</Typography>
                    <Typography variant="h6">{item.category}</Typography>
                    <Typography variant="h6">{item.price}</Typography>
                    {/* <Button color="secondary" variant="contained">
                      Edit
                    </Button> */}
                    <Button
                      onClick={() => deleteData(item.id)}
                      color="error"
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </Box>
                );
              })}
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default allProducts;

allProducts.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
