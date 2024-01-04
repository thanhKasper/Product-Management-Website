'use client'
import Sidebar from "@/components/sidebar";
import { Button } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const router = useRouter()
  return (
    <section className="w-full flex">
      <Sidebar currentPage="Product" />
      <main className="flex-grow px-8 py-4 bg-secondary-100">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">Book/Figure Title stay here</h1>
          <button
            onClick={() => {
              router.push("/products");
            }}
            className="group transition font-medium flex items-center bg-orange-400 px-4 h-8 gap-1 rounded-md hover:bg-orange-300 hover:pl-3 duration-300"
          >
            <img
              className="w-4 group-hover:mr-1"
              src="/left-arrow.svg"
              alt=""
            />
            Back
          </button>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-y-4">
          <p className="font-semibold">Provider: </p>
          <p className="col-span-11">GA Bunko</p>
          <p className="font-semibold">Size:</p>
          <p className="col-span-11">some size here</p>
          <p className="font-semibold">Genre/Type:</p>
          <div className="col-span-11 flex gap-4">
            <Tag size="lg">Genre 1</Tag>
            <Tag size="lg">Genre 2</Tag>
            <Tag size="lg">Genre 3</Tag>
          </div>
          <p className="font-semibold">Quantity:</p>
          <p className="col-span-11">A number will appear</p>
        </div>
        <Button className="mt-4" colorScheme="yellow">
          Edit
        </Button>
        <Button className="ml-4 mt-4" colorScheme="red">
          Delete
        </Button>
      </main>
    </section>
  );
};

export default ProductDetail;
