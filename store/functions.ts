import axios from "axios";
import CLOUDINARY from "../env/cloudinary";
import { urlParamsObj, productObj } from "../types/types";

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
  const { name, brand, category, image, price } = product;
  const imageFinal = `https://res.cloudinary.com/${CLOUDINARY}/image/upload/v1670501190/${image}`;
  const productData = {
    name: name,
    brand: brand,
    category: category,
    image: imageFinal,
    price: price,
  };
  const data = await axios.post("/api/products", productData);

  return data;
};

export const getProductData = async (product: urlParamsObj) => {
  const { brand, category } = product;
  let items: productObj[] | null = null;
  const data: any = await axios.get("/api/products");
  let filter: productObj[] | null = null;

  if (!brand && !category) {
    if (!data.data) {
      return items;
    }
    return (items = data.data);
  } else if (brand && !category) {
    filter = data.data.filter((product: productObj) => {
      return product.brand === brand;
    });

    return (items = filter);
  } else if (category && !brand) {
    filter = data.data.filter((product: productObj) => {
      return product.category === category;
    });
    return (items = filter);
  } else if (brand && category) {
    filter = data.data.filter((product: productObj) => {
      return product.brand === brand && product.category === category;
    });
  } else {
    return items;
  }
};

export const deleteProductData = async (product: any) => {
  const id = product;
  console.log("in functions: ", product);
  const productData: any = { headers: { id: id } };
  const data = await axios.delete(`/api/products/${id}`, productData);
  const items = data.data;
  return items;
};

export const getOneProduct = async (product: any) => {
  const { id } = product;

  const data = await axios.get("/api/products");

  const oneProduct = data.data.find((item: any) => {
    if (item.id == id) {
      return item;
    }
  });

  return oneProduct;
};
