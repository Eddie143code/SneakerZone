import React, { useState, useEffect, useContext } from "react";
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
import ProductContext from "../../store/context/products/context";

const drawerWidth = 200;

const AllProducts = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [items, setItems] = useState<any>("");

  const { allProducts, getItems, deleteItem }: any = useContext(ProductContext);

  const getData = async () => {
    const data = getItems({});
  };

  const deleteData = async (item: any) => {
    const data = deleteItem(item);
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, [items]);

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

            {allProducts &&
              allProducts.map((item: any) => {
                return (
                  <Box
                    key={item.name}
                    style={{ borderStyle: "solid", borderWidth: "0.1rem" }}
                  >
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

export default AllProducts;

AllProducts.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
