import { users } from "../../../data/users";
import type { NextApiRequest, NextApiResponse } from "next";

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users);
}
