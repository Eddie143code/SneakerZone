import React from "react";
import {
  Grid,
  ImageListItem,
  ImageList,
  Box,
  Card,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const brandCard = ({ image, text }: any) => {
  return (
    <Link href={`/products`}>
      <Card>
        <Box>
          <Typography>{text}</Typography>
        </Box>
        <Box>
          <Image alt="1" src={image} style={{ width: "70%", height: "14vh" }} />
        </Box>
      </Card>
    </Link>
  );
};

export default brandCard;
