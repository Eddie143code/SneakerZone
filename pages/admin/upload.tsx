import React, { useState, useContext } from "react";
import Drawer from "../../components/admin/drawerAdmin";
import {
  Grid,
  Typography,
  Box,
  Toolbar,
  Stack,
  Button,
  Input,
} from "@mui/material";
import Navbar from "../../components/admin/navbar";
import { postImage, postProduct } from "../../store/functions";

import { productObj } from "../../types/types";

import productContext from "../../store/context/products/context";

const drawerWidth = 200;

const Upload = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [name, setName] = useState<any>("");
  const [brand, setBrand] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [price, setPrice] = useState<any>("");

  const { uploadItem }: any = useContext(productContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "sneaker-uploads");

    const productData: productObj = {
      name: name,
      brand: brand,
      category: category,
      image: "",
      price: price,
    };

    uploadItem({ formData: formData, productData: productData });
  };

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
          <Typography paragraph>THIS IS THE UPLOAD PAGE</Typography>
          <Stack spacing={10}>
            <form onSubmit={handleSubmit}>
              <Box style={{ paddingTop: "4%" }}>
                <label htmlFor="myfile">Select a file:</label>
                <Input disableUnderline type="file" id="myfile" name="file" />
              </Box>
              <Box style={{ paddingTop: "4%" }}>
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  style={{ marginLeft: "6.5%", height: "10%", width: "50%" }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box style={{ paddingTop: "4%" }}>
                <label htmlFor="brand">Brand: </label>
                <input
                  style={{ marginLeft: "6.5%", height: "10%", width: "50%" }}
                  name="brand"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Box>
              <Box style={{ paddingTop: "4%" }}>
                <label htmlFor="category">Category: </label>
                <input
                  style={{ marginLeft: "0.5%", height: "10%", width: "50%" }}
                  name="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Box>
              <Box style={{ paddingTop: "4%" }}>
                <label htmlFor="price">Price: </label>
                <input
                  style={{ marginLeft: "7%", height: "10%", width: "50%" }}
                  name="price"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Box>
              <Box style={{ paddingTop: "6%" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default Upload;

Upload.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
