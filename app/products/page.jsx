'use client'

import React from "react";
import { useState } from "react";
import ShowList from "@/components/ShowList";
import Link from "next/link";

const ProductPage = () => {
  const headerList = ["SSN", "Fullname", "Birth Date", "Gender", ""];

  return (
      <ShowList headerList={headerList} currentPage="Product">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">PRODUCT LIST</h1>
          <Link href="/" className="bg-accent2-200 hover:bg-accent2-100 px-6 py-2 font-semibold text-white rounded-xl">Add Product</Link>
        </div>
      </ShowList>
  );
};

export default ProductPage;
