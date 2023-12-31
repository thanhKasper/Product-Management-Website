"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import RangeWithOpt from "./RangeWithOpt";
import DateRangeInput from "./DateRangeInput";

const OrderSearchBar = () => {
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
          placeholder="Search Customer's Order"
          onChange={e =>
            setForm(old => ({ ...old, searchKey: e.target.value }))
          }
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
                  Order's Price
                </label>
                <RangeWithOpt inputName="order-price" onUpdateForm={setForm} />
              </div>

              <div className="flex flex-col mt-4 gap-1">
                <label htmlFor="" className="text-secondary-100 font-medium">
                  Quantity
                </label>
                <RangeWithOpt
                  inputName="order-quantity"
                  onUpdateForm={setForm}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="" className="font-medium text-secondary-100">
                  Delivery Date
                </label>
                <DateRangeInput inputName="date" onUpdateForm={setForm} />
              </div>
              <Checkbox
                color="#D3EBF3"
                className="mt-4 font-medium"
                name="isDelivered"
                onChange={e =>
                  setForm(old => ({
                    ...old,
                    [e.target.name]: e.target.checked,
                  }))
                }
              >
                Is Delivered
              </Checkbox>
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

export default OrderSearchBar;
