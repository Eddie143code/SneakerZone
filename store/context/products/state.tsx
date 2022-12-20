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
} from "./actions";
import {
  getProductData,
  deleteProductData,
  postImage,
  postProduct,
} from "../../functions";
import {
  urlParams,
  urlParamsObj,
  productObj,
  productObjArr,
} from "../../../types/types";

const ProductsProvider = (props: any) => {
  const initialState: any = {
    products: [],
    cart: [],
    total: 0,
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const uploadItem = async (data: any) => {
    const { formData } = data;
    const { productData } = data;
    const { name, brand, category, price } = productData;
    let image: string = "";
    await postImage({ formData: formData }).then(
      (d) => (image = d.data.public_id)
    );

    await postProduct({
      name: name,
      brand: brand,
      category: category,
      image: image,
      price: price,
    });
    dispatch({ type: upload });
  };

  const getItems = async ({ brand, category }: urlParamsObj) => {
    console.log(typeof brand);
    console.log(typeof category);
    const data = await getProductData({ brand, category });
    dispatch({ type: getProducts, payload: data });
  };

  const deleteItem = async (data: any) => {
    await deleteProductData(data);
    const brand: urlParams = "";
    const category: urlParams = "";
    const items: productObjArr = await getProductData({ brand, category });
    dispatch({ type: deleteProduct, payload: { data: data, items: items } });
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

  const increase = (data: any) => {
    dispatch({ type: increaseQuantity, payload: data });
  };

  const decrease = (data: any) => {
    dispatch({ type: decreaseQuantity, payload: data });
  };

  const fetchTotal = (data: any) => {
    dispatch({ type: "getTotal" });
  };

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
