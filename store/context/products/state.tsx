import { useReducer } from "react";
import ProductContext from "./context";
import productReducer from "./reducer";
import {
  upload,
  getProducts,
  deleteProduct,
  addProductToCart,
  getCart,
} from "./actions";

const ProductsProvider = (props: any) =>{
  const initialState: any = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const uploadItem = (data: any) => {
    dispatch({ type: upload, payload: data });
  };
  const getItems = (data : any) => {
    dispatch({ type: getProducts, payload: data });
  };
  const deleteItem = (data: any) => {
    dispatch({ type: deleteProduct, payload: data });
  };
  const addtoCart = (data: any) => {
    dispatch({ type: addProductToCart, payload: data });
  };
  const fetchCart = (data: any) => {
    dispatch({ type: getCart, payload: data });
  };

  return (
    <ProductContext.Provider
      value={{
        allProducts: state.products,
        cart: state.cart,
        uploadItem,
        getItems,
        deleteItem,
        addtoCart,
        fetchCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
