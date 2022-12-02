import React from "react";
import Image from "next/image";
import {
  Nike_Carousel,
  Adidas_Carousel,
  Converse_Carousel,
} from "../home/home-images/index";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const carouselComp = () => {
  const [array, setArray] = useState([
    { id: 1, name: Nike_Carousel },
    { id: 2, name: Adidas_Carousel },
    { id: 3, name: Converse_Carousel },
  ]);
  return (
    <Box>
      <Carousel>
        {array.map((item: any) => {
          return (
            <Image
              key={item.id}
              alt={item.id}
              src={item.name}
              style={{
                width: "100%",
                height: "22vh",
              }}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default carouselComp;
