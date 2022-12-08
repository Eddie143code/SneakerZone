import React, { useState } from "react";
import Drawer from "../../components/main/drawer/drawerAdmin";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Navbar from "../../components/admin/navbar";
import axios from "axios";

const drawerWidth = 200;

const index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [imageSent, setImageSent] = useState("");

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

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dm1rghu1m/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    setImageSent(data.public_id);
    console.log(data.public_id);
  };

  const handleClick = async () => {
    setImage(
      `https://res.cloudinary.com/dm1rghu1m/image/upload/v1670502085/${imageSent}`
    );
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="myfile">Select a file:</label>
            <input type="file" id="myfile" name="file" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input type="submit" />
          </form>
          <div>
            <button onClick={handleClick}>fetch image</button>
          </div>
          <div>
            {image && (
              <Image
                loader={() => image}
                alt="p"
                src={image}
                width={200}
                height={100}
              />
            )}
          </div>
        </Box>
      </Box>
    </Grid>
  );
};

export default index;
