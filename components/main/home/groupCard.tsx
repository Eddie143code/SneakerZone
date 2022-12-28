import React from "react";
import {
  Grid,
  ImageListItem,
  ImageList,
  Box,
  Card,
  Typography,
  Paper,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const brandCard = ({ image, text, group, width, height }: any) => {
  return (
    <Link href={`/products?${group}=${text.toLowerCase()}`}>
      <Paper variant="outlined">
        <Box>
          <Typography variant="h5" sx={{ color: "#850000" }}>
            {text}
          </Typography>
        </Box>
        <Box>
          {image ? (
            <Image
              alt={`${text}`}
              src={image}
              style={{
                width: `${width}`,
                height: `${height}`,
                objectFit: "contain",
              }}
            />
          ) : (
            <></>
          )}
        </Box>
      </Paper>
    </Link>
  );
};

export default brandCard;
