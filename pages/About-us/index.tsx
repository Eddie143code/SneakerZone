import ProductContext from "../../store/context/products/context";
import React, { useEffect, useState, useContext } from "react";
const aboutUs = () => {
  const { getItems, allProducts, addtoCart, cart }: any =
    useContext(ProductContext);
  return (
    <div>
      <button onClick={() => console.log(cart)}>cart</button>
    </div>
  );
};

export default aboutUs;
