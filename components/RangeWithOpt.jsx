import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import React, { useState } from "react";

const RangeWithOpt = () => {
  const [filterOpt, setFilterOpt] = useState();
  let inputOpt;
  if (filterOpt == "from") {
    inputOpt = (
      <Input
        borderRadius={4}
        bgColor="white"
        paddingX={2}
        size="sm"
        type="number"
        width="6rem"
        placeholder="from"
      />
    );
  } else if (filterOpt == "until")
    inputOpt = (
      <Input
        borderRadius={4}
        bgColor={"white"}
        paddingX={2}
        size="sm"
        type="number"
        width="6rem"
        placeholder="to"
      />
    );
  else
    inputOpt = (
      <>
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
      </>
    );
  return (
    <div className="flex items-center gap-2 mt-1">
      <Select
        size="sm"
        width="7rem"
        bgColor="white"
        borderRadius={4}
        onInput={e => {
          setFilterOpt(e.target.value);
        }}
      >
        <option value="from">From</option>
        <option value="until">Until</option>
        <option value="between">Between</option>
      </Select>
      {inputOpt}
    </div>
  );
};

export default RangeWithOpt;
