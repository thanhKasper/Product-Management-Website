'use client'
import Sidebar from "@/components/sidebar";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const CustomerDetail = () => {
  const router = useRouter()
  return (
    <section className="w-full flex">
      <Sidebar currentPage="Customer" />
      <main className="flex-grow px-8 py-4 bg-secondary-100">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">Customer Info</h1>
          <button onClick={()=>{router.push('/customers')}} className="group transition font-medium flex items-center bg-orange-400 px-4 h-8 gap-1 rounded-md hover:bg-orange-300 hover:pl-3 duration-300">
            <img
              className="w-4 group-hover:mr-1"
              src="/left-arrow.svg"
              alt=""
            />
            Back
          </button>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-y-4">
          <p className="font-semibold">Name: </p>
          <p className="col-span-11">Some Name Here</p>
          <p className="font-semibold">Mail:</p>
          <p className="col-span-11">thisismyname@email.com</p>
        </div>
        <p className="mt-4 font-medium">Receipt Info</p>
        <TableContainer marginTop={2} overflowY="scroll" maxWidth="100%">
          <Table variant="simple" bgColor={"white"} overflowY={"scroll"}>
            <Thead position="sticky" top={0} bgColor="white">
              <Tr>
                <Th>RECEIVER NAME</Th>
                <Th>PHONE NUMBER</Th>
                <Th>ADDRESS</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Nguyen Van A</Td>
                <Td className="cursor-pointer">0967839561</Td>
                <Td className="cursor-pointer">
                  268 Ly Thuong Kiet, W.14, D.10
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </section>
  );
};

export default CustomerDetail;
