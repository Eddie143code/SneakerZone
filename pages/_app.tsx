import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";
import { useState } from "react";
import ProductsProvider from "../store/context/products/state";

export default function App({ Component, pageProps }: AppProps) {

  if (Component.getLayout) {
    return Component.getLayout(
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    );
  }
  return (
<ProductsProvider>
  <Navbar />
      <Component {...pageProps} />
      {/*  <Footer />*/}</ProductsProvider>
      

  );
}
