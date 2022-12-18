import {
  upload,
  getProducts,
  deleteProduct,
  getAllProducts,
  addProductToCart,
  getCart,
} from "./actions";

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case upload: {
      return state;
    }
    case getProducts: {
      const allProducts = action.payload.map((item: any) => {
        return item;
      });
      return { ...state, products: allProducts };
    }
    case deleteProduct: {
      const productList = action.payload.products.products;
      const id = action.payload.data;
      const allProducts = productList.filter((item: any) => {
        return item.id !== id;
      });
      return { ...state, allProducts };
    }
    case getAllProducts: {
      const allProducts = action.payload;
      return { ...state, products: allProducts };
    }
    case addProductToCart: {
      const singleProduct = action.payload;
      const cart = [...state.cart, singleProduct];
      return { ...state, cart: cart };
    }
    case getCart: {
      const newState = state;
      return { newState };
    }
    default:
      return state;
  }
};

export default productReducer;
