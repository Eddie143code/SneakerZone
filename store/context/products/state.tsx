import { useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import {
  upload,
  getProducts,
  deleteProduct,
  getOneProduct,
  getCart,
} from "./actions";

function ProductsProvider({ children }: any) {
  const initialState: any = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadItem = (data: any) => {
    dispatch({ type: upload, payload: data });
  };
  const getItems = () => {
    dispatch({ type: getProducts });
  };
  const deleteItem = (data: any) => {
    dispatch({ type: deleteProduct, payload: data });
  };
  const addtoCart = (data: any) => {
    dispatch({ type: getOneProduct, payload: data });
  };
  const fetchCart = (data: any) => {
    dispatch({ type: getCart, payload: data });
  };

  return (
    <Context.Provider
      value={{
        product: state.product,
        uploadItem,
        getItems,
        deleteItem,
        addtoCart,
        fetchCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ProductsProvider;
