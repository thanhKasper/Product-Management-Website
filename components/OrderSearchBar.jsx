import React from 'react'
import { Input, Button } from '@chakra-ui/react';

const OrderSearchBar = () => {
  return (
    <div className="w-full relative">
      <div id="product-search" className="flex mt-6">
        <div className="cursor-pointer w-56 bg-primary text-secondary-100 font-semibold flex flex-row gap-2 items-center px-3 rounded-s-md">
          <img src="/filter.svg" alt="" />
          <p className="cursor-pointer">Advanced Filter</p>
        </div>
        <Input
          bgColor="white"
          borderRadius="none"
          variant="outline"
          placeholder="Search Orders"
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
      {/* <div
        id="advanced-filter"
        className="z-10 w-full h-80 bg-primary absolute rounded-md px-10 py-8"
      >
        <form action="">
          <div className="flex items-center gap-4">
            <label htmlFor="price" className="text-secondary-100 font-medium">
              Price
            </label>
            <div className="flex gap-2">
              <Input
                borderRadius={4}
                bgColor="white"
                paddingX={2}
                size="sx"
                type="number"
                width="6rem"
                placeholder="from"
              />
              <p className="text-secondary-100">-</p>
              <Input
                borderRadius={4}
                bgColor={"white"}
                paddingX={2}
                size="sx"
                type="number"
                width="6rem"
                placeholder="to"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="" className="text-secondary-100 font-medium">
              Quantity
            </label>
            <div className="flex gap-2">
              <Input
                borderRadius={4}
                bgColor="white"
                paddingX={2}
                size="sx"
                type="number"
                width="6rem"
                placeholder="from"
              />
              <p className="text-secondary-100">-</p>
              <Input
                borderRadius={4}
                bgColor={"white"}
                paddingX={2}
                size="sx"
                type="number"
                width="6rem"
                placeholder="to"
              />
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default OrderSearchBar