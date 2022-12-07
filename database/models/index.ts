import { User } from "./user";
import { Product } from "./product";
import { connectToDatabase } from "../db";

User.sync();
Product.sync();

export { User, Product };
