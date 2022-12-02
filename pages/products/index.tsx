import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Link from "next/link";

const productlist = () => {
  return (
    <div>
      productlist <Link href={`/products/1`}>one product</Link>
    </div>
  );
};

export default productlist;
