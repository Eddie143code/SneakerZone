//import { products } from "../../../data/products";
import supabase from "../../../database/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { productObj, productObjArr } from "../../../types/types";

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products: any = await supabase.from("products").select("*");

    return res.status(200).json(products);
  }
  if (req.method === "POST") {
    console.log("in post method in server");
    const { name, brand, category, image, price }: productObj = req.body;
    console.log(name);
    console.log(brand);
    console.log(image);
    console.log(price);

    const product: any = await supabase.from("products").insert({
      name: name,
      brand: brand,
      category: category,
      image: image,
      price: price,
    });

    return res.status(200).json(product);
  }
};

export default productHandler;
