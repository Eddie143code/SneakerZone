import React from "react";
import { Box, Card, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const productCard = ({ text, image }: any) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  if (isDesktop) {
    return (
      <Card variant="outlined">
        <Box sx={{ width: "100%" }}>
          <Image
            loader={() => image}
            alt={`${text}`}
            src={image}
            width={350}
            height={200}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    );
  }

  if (isLaptop) {
    return (
      <Card variant="outlined">
        <Box sx={{ width: "100%" }}>
          <Image
            loader={() => image}
            alt={`${text}`}
            src={image}
            width={200}
            height={150}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Card>
    );
  }

  return (
    <Card variant="outlined">
      <Box sx={{ width: "100%" }}>
        <Image
          loader={() => image}
          alt={`${text}`}
          src={image}
          width={200}
          height={100}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Card>
  );
};

export default productCard;
