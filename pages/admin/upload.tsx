import React, { useState } from "react";
import Drawer from "../../components/admin/drawerAdmin";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Input,
} from "@mui/material";
import Image from "next/image";
import Navbar from "../../components/admin/navbar";
import axios from "axios";
import CLOUDINARY from "../../env/cloudinary";
import { postImage, postProduct } from "../../store/functions";
import { padding } from "@mui/system";

const drawerWidth = 200;

const upload = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [name, setName] = useState<any>("");
  const [brand, setBrand] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [imageSent, setImageSent] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [price, setPrice] = useState<any>("");

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
    let image: any;
    const data: any = await postImage({ formData: formData }).then(
      (d) => (image = d.data.public_id)
    );
    const post: any = await postProduct({
      name: name,
      brand: brand,
      category: category,
      image: image,
      price: price,
    });
  };

  const handleClick = async () => {
    console.log(imageSent);
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

export default upload;

upload.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
