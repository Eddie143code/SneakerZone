import { createContext, useContext, useReducer } from "react";
import {
  upload,
  getProducts,
  deleteProduct,
  getOneProduct,
  getCart,
} from "./actions";

const productReducer = (product: any, action: any) => {
  switch (action.type) {
    case upload: {
      return product;
    }
    case getProducts: {
      product.products = action.payload.map((item: any) => {
        return item;
      });

      return product;
    }
    case deleteProduct: {
      const productList = action.payload.products.products;
      const id = action.payload.data;
      product.products = productList.filter((item: any) => {
        return item.id !== id;
      });
      return product;
    }
    case getOneProduct: {
      const singleProduct = action.payload;
      const cart = [...product.cart, singleProduct];
      return { ...product, cart: cart };
    }
    case getCart: {
      return product;
    }
  }
};

export default productReducer;
