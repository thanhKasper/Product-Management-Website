"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

const AddProduct = () => {
  const router = useRouter();
  const [navActive, setnavActive] = useState("Patient");
  return (
    <section className="flex">
      <Sidebar currentPage={"Product"} />
      <main className="px-8 py-4 flex-grow bg-secondary-100">
        <h1 className="font-bold text-5xl text-primary">Add/Edit Product</h1>
        <form action="" className="mt-10 flex flex-col gap-4 w-10/12 mx-auto">
          <div className="flex gap-2">
            <FormControl sx={{ width: "20%" }}>
              <FormLabel>Product ID</FormLabel>
              <Input type="text" bgColor="white" />
            </FormControl>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input type="text" bgColor="white" />
            </FormControl>
          </div>
          <div className="flex gap-2">
            <FormControl sx={{ width: "60%" }}>
              <FormLabel>Size</FormLabel>
              <Input type="text" bgColor="white" />
            </FormControl>
            <FormControl>
              <FormLabel>Provider</FormLabel>
              <Input type="text" bgColor="white" />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Input type="number" bgColor="white" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" bgColor="white" />
            </FormControl>
          </div>
          <FormControl>
            <FormLabel>Type/Genre</FormLabel>
            <Input type="text" bgColor="white" />
          </FormControl>
          <div className="flex justify-end gap-2">
            <Button colorScheme="red" onClick={() => {router.push('/products')}}>Cancel</Button>
            <Button colorScheme="green">Submit</Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default AddProduct;
