//import { products } from "../../../data/products";
import { Product } from "../../../database/models/product";
import type { NextApiRequest, NextApiResponse } from "next";

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products = await Product.findAll({});
    return res.status(200).json(products);
  }
  if (req.method === "POST") {
    const { name, brand } = req.body;
    const product = await Product.create({ name: name, brand: brand });
    return res.status(200).json(product);
  }
};

export default userHandler;
