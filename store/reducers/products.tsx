import { createContext, useContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";

export const ProductContext: any = createContext(null);

export const DispatchUploadProductContext: any = createContext(null);

export default function ProductsProvider({ children }: any) {
  const [product, dispatch] = useImmerReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={product}>
      <DispatchUploadProductContext.Provider value={dispatch}>
        {children}
      </DispatchUploadProductContext.Provider>
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}

export function useProductDispatch() {
  return useContext(DispatchUploadProductContext);
}

const productReducer = (products: any, action: any) => {
  switch (action.type) {
    case "upload": {
      return products;
    }
    case "getProducts": {
      console.log(products);
      products.products = action.payload.map((item: any) => {
        return item;
      });
      console.log(products);
      return products;
    }
    case "deleteProduct": {
      console.log(action.payload);
      const productList = action.payload.products.products;
      const id = action.payload.data;
      products.products = productList.filter((item: any) => {
        return item.id !== id;
      });
      return products;
    }
  }
};

const initialState: any = {
  products: [],
};
