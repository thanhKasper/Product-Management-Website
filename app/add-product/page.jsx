"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MultivaluesAutocomplete from "@/components/MultivaluesAutocomplete";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

const AddProduct = () => {
  const router = useRouter();
  const [navActive, setnavActive] = useState("Patient");
  const [newProduct, setNewProduct] = useState({});
  const [isShowOpt, setShowOpt] = useState(false);
  const [multVal, setMultVal] = useState([]);
  console.log(newProduct);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <section
      className="flex"
      onClick={e => {
        const eleID = e.target?.attributes[0]?.value;
        if (eleID == "genre-input") {
          setShowOpt(true);
        } else {
          setShowOpt(false);
        }
      }}
    >
      <Sidebar currentPage={"Product"} />
      <main className="px-8 py-4 flex-grow bg-secondary-100">
        <h1 className="font-bold text-5xl text-primary">Add Product</h1>
        <form
          action=""
          className="mt-10 flex flex-col gap-4 w-10/12 mx-auto"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="flex gap-2">
            <FormControl sx={{ width: "20%" }}>
              <FormLabel>Product Type</FormLabel>
              <Select
                bgColor="white"
                placeholder="Choose option"
                name="type"
                onInput={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              >
                <option value="LN">Light Novel</option>
                <option value="FG">Figure</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                bgColor="white"
                name="name"
                onChange={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </FormControl>
          </div>
          <div className="flex gap-2">
            <FormControl sx={{ width: "60%" }}>
              <FormLabel>Size</FormLabel>
              <Input
                type="text"
                bgColor="white"
                name="size"
                onChange={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Provider</FormLabel>
              <Input
                type="text"
                bgColor="white"
                name="provider"
                onChange={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                bgColor="white"
                name="quantity"
                onChange={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                bgColor="white"
                name="price"
                onChange={e => {
                  setNewProduct(old => ({
                    ...old,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </FormControl>
          </div>
          <FormControl>
            {newProduct.type == "LN" ? (
              <>
                <label className="font-medium">Type/Genre</label>
                <MultivaluesAutocomplete
                  label="Type/Genre"
                  options={[
                    "genre1",
                    "genre2",
                    "genre3",
                    "genre4",
                    "genre5",
                    "genre6",
                  ]}
                  isShowOpt={isShowOpt}
                  onUpdateForm={setNewProduct}
                />
              </>
            ) : (
              <>
                <label className="font-medium">Type</label>
                <Select maxWidth='25%' bgColor='white' mt={2} name='figureType' onInput={(e)=>{
                  setNewProduct(old => {
                    delete old.genre
                    return ({
                      ...old, 
                      [e.target.name]: e.target.value
                    })
                  })
                }}>
                  <option value="f1">Figure Type 1</option>
                  <option value="f2">Figure Type 2</option>
                  <option value="f3">Figure Type 3</option>
                  <option value="f4">Figure Type 4</option>
                </Select>
              </>
            )}
          </FormControl>
          <div className="flex justify-end gap-2">
            <Button
              colorScheme="red"
              onClick={() => {
                router.push("/products");
              }}
            >
              Cancel
            </Button>
            <Button type="submit" colorScheme="green">
              Submit
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default AddProduct;
