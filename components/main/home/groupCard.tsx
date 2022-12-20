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

const brandCard = ({ image, text, group, width, height }: any) => {
  return (
    <Link href={`/products?${group}=${text.toLowerCase()}`}>
      <Card>
        <Box>
          <Typography>{text}</Typography>
        </Box>
        <Box>
          <Image
            alt={`${text}`}
            src={image}
            style={{ width: `${width}`, height: `${height}` }}
          />
        </Box>
      </Card>
    </Link>
  );
};

export default brandCard;
