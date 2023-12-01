import React from "react";
import Sidebar from "./sidebar";
import SearchBar from "./SearchBar";
import InfoTable from "./InfoTable";

const ShowList = ({headerList, currentPage, children}) => {
  {
    /* navActive has these value: "Product", "Order", "Customer" */
  }
  return (
    <div className="flex bg-secondary-100">
      <Sidebar currentPage={currentPage} />
      <div className="w-full px-8 pt-6">
        {children}
        <SearchBar />
        <InfoTable headerList={headerList} />
      </div>
    </div>
  );
};

export default ShowList;
