import axios from "axios";
import CLOUDINARY from "../env/cloudinary";

export const postImage = async (product: any) => {
  //const data = await axios.post("/api/products", product);
  const { formData } = product;
  const data = await axios.post(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY}/image/upload`,
    formData
  );

  return data;
};

export const postProduct = async (product: any) => {
  console.log(product);
  const { name, brand, image } = product;
  const imageFinal = `https://res.cloudinary.com/${CLOUDINARY}/image/upload/v1670501190/${image}`;
  const productData = { name: name, brand: brand, image: imageFinal };
  const data = await axios.post("/api/products", productData);

  return data;
};
