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
import CLOUDINARY from "../../env/cloudinary";
import { postImage, postProduct } from "../../store/functions";

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
      image: image,
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

export default upload;

upload.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
