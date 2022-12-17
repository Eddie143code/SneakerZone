import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";
import { useState } from "react";
import ProductsProvider from "../store/reducers/products";
import { useProducts } from "../store/reducers/products";

export default function App({ Component, pageProps }: AppProps) {
  const products = useProducts;
  if (Component.getLayout) {
    return Component.getLayout(
      <ProductsProvider products={products}>
        <Component {...pageProps} />
      </ProductsProvider>
    );
  }
  return (
    <ProductsProvider products={products}>
      <Navbar />
      <Component {...pageProps} />
      {/*  <Footer />*/}
    </ProductsProvider>
  );
}
