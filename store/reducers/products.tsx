import { createContext, useContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import cart from "../../pages/cart";

export const ProductContext: any = createContext(null);

export const DispatchUploadProductContext: any = createContext(null);

const initialState: any = {
  products: [],
  cart: [],
};

export default function ProductsProvider({ children }: any) {
  const [product, dispatch] = useReducer(productReducer, initialState);

  return (
    <DispatchUploadProductContext.Provider value={dispatch}>
      <ProductContext.Provider value={product}>
        {children}
      </ProductContext.Provider>
    </DispatchUploadProductContext.Provider>
  );
}

const productReducer = (product: any, action: any) => {
  switch (action.type) {
    case "upload": {
      return product;
    }
    case "getProducts": {
      product.products = action.payload.map((item: any) => {
        return item;
      });

      return product;
    }
    case "deleteProduct": {
      const productList = action.payload.products.products;
      const id = action.payload.data;
      product.products = productList.filter((item: any) => {
        return item.id !== id;
      });
      return product;
    }
    case "getOneProduct": {
      const singleProduct = action.payload;
      const cart = [...product.cart, singleProduct];
      return { ...product, cart: cart };
    }
    case "getCart": {
      return product;
    }
  }
};

export function useProducts() {
  return useContext(ProductContext);
}

export function useProductDispatch() {
  return useContext(DispatchUploadProductContext);
}
