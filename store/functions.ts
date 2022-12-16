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

export const getProductData = async (product: any) => {
  const { brand, category } = product;
  let items = null;
  const data: any = await axios.get("/api/products");
  let filter: any;

  if (!brand && !category) {
    if (!data.data) {
      return items;
    }

    return (items = data.data);
  } else if (brand && !category) {
    filter = data.data.filter((product: any) => {
      return product.brand === brand;
    });

    return (items = filter);
  } else if (category && !brand) {
    filter = data.data.filter((product: any) => {
      return product.category === category;
    });
    return (items = filter);
  } else if (brand && category) {
    filter = data.data.filter((product: any) => {
      return product.brand === brand && product.category === category;
    });
  } else {
    return items;
  }
};

export const deleteProduct = async (product: any) => {
  const { id } = product;
  const productData: any = { headers: { id: id } };
  const data = await axios.delete(`/api/products/${id}`, productData);
  const items = data.data;
  return items;
};
