import { Input, Button } from "@chakra-ui/react";
import MultivaluesAutocomplete from "./MultivaluesAutocomplete";
import React from "react";
import { useState } from "react";
import RangeWithOpt from "./RangeWithOpt";

// Search bar need useState from its parent
const ProductSearchBar = ({ isShowOpt }) => {
  const [closeAdvancedFilter, setCloseAdvancedFilter] = useState(true);
  const [form, setForm] = useState({});
  console.log(form);
  return (
    <div className="w-full relative">
      <div id="product-search" className="flex mt-6">
        <div
          onClick={() => {
            setCloseAdvancedFilter(old => !old);
          }}
          className="cursor-pointer w-56 bg-primary text-secondary-100 font-semibold flex flex-row gap-2 items-center px-3 rounded-s-md"
        >
          <img src="/filter.svg" alt="" />
          <p className="cursor-pointer">Advanced Filter</p>
        </div>
        <Input
          bgColor="white"
          borderRadius="none"
          variant="outline"
          placeholder="Search Products"
          name="searchKey"
          onChange={e => {
            setForm(old => ({ ...old, [e.target.name]: e.target.value }));
          }}
        />
        <Button
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          bgColor="#003756"
          _hover=""
          color="#D3EBF3"
        >
          Search
        </Button>
      </div>
      <div
        id="advanced-filter"
        className={`z-10 w-full bg-primary absolute rounded-md px-10  ${
          closeAdvancedFilter
            ? "h-0 p-0 transition-all"
            : "transition-all h-80 py-8"
        }`}
      >
        <form
          action=""
          className={`flex flex-col justify-between gap-5 h-full ${
            closeAdvancedFilter ? "hidden" : ""
          }`}
        >
          <div className="grid grid-cols-2">
            <div>
              <div>
                <label htmlFor="" className="font-medium text-secondary-100">
                  Price
                </label>
                <RangeWithOpt onUpdateForm={setForm} inputName="price" />
              </div>

              <div className="flex flex-col mt-4 gap-1">
                <label htmlFor="" className="text-secondary-100 font-medium">
                  Quantity
                </label>
                <RangeWithOpt onUpdateForm={setForm} inputName="quantity" />
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-secondary-100">
                Genre/Type
              </label>
              <MultivaluesAutocomplete
                options={[
                  "Rom Com",
                  "Tragedy",
                  "Drama",
                  "Fantasy",
                  "Isekai",
                  "Shounen",
                  "Shoujo",
                ]}
                isShowOpt={isShowOpt}
                onUpdateForm={setForm}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button size="sm" colorScheme="red">
              Reset
            </Button>
            <Button size="sm" colorScheme="messenger">
              Apply
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductSearchBar;
