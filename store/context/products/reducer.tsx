import { isConstructorDeclaration } from "typescript";
import {
  upload,
  getProducts,
  deleteProduct,
  getAllProducts,
  addProductToCart,
  getCart,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
} from "./actions";

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case upload: {
      return state;
    }
    case getProducts: {
      const allProducts = action.payload.map((item: any) => {
        return item;
      }) 
      return { ...state, products: [...allProducts]};
    }
    case deleteProduct: {
      console.log('reducer: ',action.payload)
      const id = action.payload.data
      const productList = action.payload.items
      const allProducts = productList.filter((item: any) => {
        return item.id !== id;
      });
      return { ...state, products: [...allProducts] };
    }
    case getAllProducts: {
      return state 
    }
    case addProductToCart: {
      const singleProduct = action.payload

      return { ...state, cart: [...state.cart, singleProduct] };
    }
    case getCart: {
      
      return state
    }
    
    
    case getTotal: {
      const initialValue = 0;
      const totalPrice = state.cart.reduce((cartTotal :any, cartItem: any)=> {
        const {price} = cartItem
        cartTotal += Number(price)
        return cartTotal
      }, initialValue)
      console.log(totalPrice)
      return {...state, total: totalPrice}
    }
    default:
      return state;
  }
};

export default productReducer;
