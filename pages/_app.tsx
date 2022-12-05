import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Navbar from "../components/main/navbar";
import Footer from "../components/main/footer";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [admin, setAdmin] = useState(true);
  if (admin) {
    return <Component {...pageProps} />;
  }
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
