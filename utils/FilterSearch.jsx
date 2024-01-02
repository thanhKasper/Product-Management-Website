"use client";

import React from "react";
import { useState } from "react";

const FilterSearch = () => {
  const [isDropdown, setDropdown] = useState(false);
  // Filter by patient: Filter By Patient, by doctor: Filter By Doctor
  const [filterCriteria, setFilterCriteria] = useState("Filter By Patient");

  return (
    <div className="cursor-pointer w-56 bg-primary text-secondary-100 font-semibold flex flex-row gap-2 items-center px-3 rounded-s-md">
      <img src="/filter.svg" alt="" />
      <p className="cursor-pointer">Advanced Filter</p>
    </div>
  );
};

export default FilterSearch;
