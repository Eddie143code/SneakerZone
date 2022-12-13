//import { products } from "../../../data/products";
import { Product } from "../../../database/models/product";
import type { NextApiRequest, NextApiResponse } from "next";

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products = await Product.findAll({});
    return res.status(200).json(products);
  }
  if (req.method === "POST") {
    console.log("in post method in server");
    const { name, brand, image } = req.body;
    console.log(name);
    console.log(brand);
    console.log(image);

    const product = await Product.create({
      name: name,
      brand: brand,
      image: image,
    });
    console.log(product);
    return res.status(200).json(product);
  }
};

export default productHandler;
