"use client";
import React from "react";
import { useState } from "react";
import {
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

const MultivaluesAutocomplete = ({ label, options, isShowOpt }) => {
  const [optList, setOptList] = useState([]);
  return (
    <div className="relative">
      <label className="text-secondary-100 font-medium">{label}</label>
      <div className="rounded-md mt-1 p-2 gap-1 flex flex-wrap items-center bg-white max-w-lg has-[:focus]:outline has-[:focus]:outline-blue-600">
        {optList.map((val, idx) => (
          <Tag
            size="md"
            height="fit-content"
            key={idx}
            paddingY={1}
            borderRadius="full"
            variant="solid"
            colorScheme="linkedin"
          >
            <TagLabel>{val}</TagLabel>
            <TagCloseButton onClick={() => {
                const newArr = optList.filter(genre => { return genre !== optList[idx]})
                setOptList(newArr)
            }}/>
          </Tag>
        ))}

        <input
          id="genre-input"
          type="text"
          className="flex-grow rounded-sm focus:outline-none min-w-36"
          placeholder="Search Genre/Type"
        />
      </div>
      <ul
        id="recom-keyword"
        className={`bg-secondary-100 w-full max-w-lg rounded-md px-2 py-2 max-h-48 overflow-y-scroll absolute z-10 ${
          !isShowOpt ? "hidden" : ""
        }`}
      >
        {options.map((val, idx) => (
          <li
            key={idx}
            onClick={() => {
              setOptList(old => {
                if (old.indexOf(val) == -1) return [...old, val];
                return [...old];
              });
            }}
            className="hover:bg-slate-300 px-2 py-1 rounded-md"
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultivaluesAutocomplete;
