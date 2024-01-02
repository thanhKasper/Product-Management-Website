import FilterSearch from '@/utils/FilterSearch'
import { Input, Button } from "@chakra-ui/react";
import React from 'react'

const ProductSearchBar = () => {
  return (
    <div className="flex mt-6">
      <FilterSearch />
      <Input
        bgColor="white"
        borderRadius="none"
        variant="outline"
        placeholder="Search Products"
      />
      <Button borderTopLeftRadius={0} borderBottomLeftRadius={0} bgColor="#003756" _hover="" color="#D3EBF3">
        Search
      </Button>
    </div>
  );
}

export default ProductSearchBar