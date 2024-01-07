"use client";
import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const DateRangeInput = ({inputName, onUpdateForm}) => {
  const [filterOpt, setFilterOpt] = useState('from');
  let inputOpt;
  if (filterOpt == "from") {
    inputOpt = (
      <Input
        borderRadius={4}
        bgColor="white"
        paddingX={2}
        size="sm"
        type="date"
        width="7rem"
        placeholder="from"
        onChange={e => (
          onUpdateForm(old => ({
            ...old,
            [`${inputName}-start`]: e.target.value,
            [`${inputName}-end`]: null
          }))
        )}
      />
    );
  } else if (filterOpt == "until")
    inputOpt = (
      <Input
        borderRadius={4}
        bgColor={"white"}
        paddingX={2}
        size="sm"
        type="date"
        width="7rem"
        placeholder="to"
        onChange={e =>
          onUpdateForm(old => ({
            ...old,
            [`${inputName}-start`]: null,
            [`${inputName}-end`]: e.target.value,
          }))
        }
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
          type="date"
          width="7rem"
          placeholder="from"
          onChange={e =>
            onUpdateForm(old => ({
              ...old,
              [`${inputName}-start`]: e.target.value,
            }))
          }
        />
        <p className="text-secondary-100">-</p>
        <Input
          borderRadius={4}
          bgColor={"white"}
          paddingX={2}
          size="sm"
          type="date"
          width="7rem"
          placeholder="to"
          onChange={e =>
            onUpdateForm(old => ({
              ...old,
              [`${inputName}-end`]: e.target.value,
            }))
          }
        />
      </>
    );
  return (
    <div className="flex items-center gap-2 mt-1">
      <Select
        size="sm"
        width="7rem"
        bgColor="white"
        defaultValue='From'
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

export default DateRangeInput;
