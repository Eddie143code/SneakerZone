import React from "react";
import { Grid, Stack, Box, Typography, IconButton, Card } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const CartCard = ({ image, text }: any) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  if (isDesktop) {
    return (
      <Card
        variant="outlined"
        sx={{ width: "50%", height: "20vh", boxShadow: 8 }}
      >
        <Box sx={{ width: "100%" }}>
          <Image
            loader={() => image}
            alt={`${text}`}
            src={image}
            width={300}
            height={200}
            style={{
              padding: 0,
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    );
  }

  if (isLaptop) {
    return (
      <Card
        variant="outlined"
        sx={{ width: "65%", height: "20vh", boxShadow: 8 }}
      >
        <Box sx={{ width: "100%" }}>
          <Image
            loader={() => image}
            alt={`${text}`}
            src={image}
            width={300}
            height={200}
            style={{
              padding: 0,
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{ width: "80%", height: "20vh", boxShadow: 8 }}
    >
      <Box sx={{ width: "100%" }}>
        <Image
          loader={() => image}
          alt={`${text}`}
          src={image}
          width={300}
          height={200}
          style={{
            padding: 0,
            objectFit: "contain",
          }}
        />
      </Box>
    </Card>
  );
};

export default CartCard;
