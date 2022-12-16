import { Product } from "../../../database/models/product";
import type { NextApiRequest, NextApiResponse } from "next";

const oneProductHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    console.log("in post method in server");
    let { id }: any = req.headers;
    id = Number(id);
    console.log(id);
    const test = await Product.findOne({ where: { id: id } });

    if (!test) {
      console.log("product does not exist");
    }

    const product = await Product.destroy({ where: { id: id } });

    return res.status(200).json(product);
  }
};

export default oneProductHandler;
