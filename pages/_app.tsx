import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";
import { useState, useContext } from "react";
import ProductsProvider from "../store/context/products/state";

export default function App({ Component, pageProps }: any) {
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
      {/*  <Footer />*/}
      <Footer />
    </ProductsProvider>
  );
}
