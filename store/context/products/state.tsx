import { useReducer } from "react";
import ProductContext from "./context";
import productReducer from "./reducer";
import {
  upload,
  getProducts,
  deleteProduct,
  getAllProducts,
  addProductToCart,
  getCart,
  increaseQuantity,
  decreaseQuantity,
  getTotal
} from "./actions";
import { getProductData } from "../../functions";

const ProductsProvider = (props: any) => {
  const initialState: any = {
    products: [],
    cart: [],
    total: 0
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const uploadItem = (data: any) => {
    dispatch({ type: upload, payload: data });
  };

  const getItems = async ({brand, category}: any) => {
    const data  = await getProductData({ brand, category });
    dispatch({ type: getProducts, payload: data });
  };

  const deleteItem = (data: any) => {
    dispatch({ type: deleteProduct, payload: data });
  };

  const addtoCart = (data: any) => {
    dispatch({ type: addProductToCart, payload: data });
  };

  const fetchCart = () => {
    dispatch({ type: getCart, payload: null });
  };

  const fetchAllProducts = () => {
    dispatch({ type: getAllProducts, payload: null });
  };

  const increase = (data : any) => {

    dispatch({type: increaseQuantity, payload:data})
  }

  const decrease = (data : any) => {
    dispatch({type: decreaseQuantity, payload:data})
  }

  const fetchTotal = (data: any) => {
    dispatch({type: 'getTotal'})
  }

  return (
    <ProductContext.Provider
      value={{
        allProducts: state.products,
        cart: state.cart,
        total: state.total,
        uploadItem,
        getItems,
        deleteItem,
        addtoCart,
        fetchCart,
        fetchAllProducts,
        increase,
        decrease,
        fetchTotal,    
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
