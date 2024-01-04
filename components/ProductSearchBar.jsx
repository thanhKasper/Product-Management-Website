import { Input, Button } from "@chakra-ui/react";
import MultivaluesAutocomplete from "./MultivaluesAutocomplete";
import React from "react";
import { useState } from "react";



const ProductSearchBar = ({isShowOpt}) => {
  const [closeAdvancedFilter, setCloseAdvancedFilter] = useState(true)
  return (
    <div className="w-full relative">
      <div id="product-search" className="flex mt-6">
        <div onClick={()=>{setCloseAdvancedFilter(old => !old)}} className="cursor-pointer w-56 bg-primary text-secondary-100 font-semibold flex flex-row gap-2 items-center px-3 rounded-s-md">
          <img src="/filter.svg" alt="" />
          <p className="cursor-pointer">Advanced Filter</p>
        </div>
        <Input
          bgColor="white"
          borderRadius="none"
          variant="outline"
          placeholder="Search Products"
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
        className={`z-10 w-full bg-primary absolute rounded-md px-10 py-8 h-80 ${closeAdvancedFilter ? 'hidden' : ''}`}
      >
        <form action="" className="flex flex-col justify-between gap-5 h-full">
          <div className="flex gap-40">
            <div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-secondary-100 font-medium"
                >
                  Price
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    borderRadius={4}
                    bgColor="white"
                    paddingX={2}
                    size='sm'
                    type="number"
                    width="6rem"
                    placeholder="from"
                  />
                  <p className="text-secondary-100">-</p>
                  <Input
                    borderRadius={4}
                    bgColor={"white"}
                    paddingX={2}
                    size="sm"
                    type="number"
                    width="6rem"
                    placeholder="to"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-1">
                <label htmlFor="" className="text-secondary-100 font-medium">
                  Quantity
                </label>
                <div className="flex gap-2">
                  <Input
                    borderRadius={4}
                    bgColor="white"
                    paddingX={2}
                    size="sm"
                    type="number"
                    width="6rem"
                    placeholder="from"
                  />
                  <p className="text-secondary-100">-</p>
                  <Input
                    borderRadius={4}
                    bgColor={"white"}
                    paddingX={2}
                    size="sm"
                    type="number"
                    width="6rem"
                    placeholder="to"
                  />
                </div>
              </div>
            </div>

            <MultivaluesAutocomplete
              label="Genre/Type"
              options={["Rom Com", "Tragedy", "Drama", "Fantasy", "Isekai", "Shounen", "Shoujo"]}
              isShowOpt={isShowOpt}
            />
          </div>

          <div className="flex justify-center gap-3">
            <Button size="sm" colorScheme="red">
              Cancel
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
