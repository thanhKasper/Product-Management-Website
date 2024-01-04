'use client'
import Sidebar from '@/components/sidebar';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import React from 'react'

const OrderDetail = () => {
  const router = useRouter()
  return (
    <section className="w-full flex">
      <Sidebar currentPage="Order" />
      <main className="flex-grow px-8 py-4 bg-secondary-100">
        <div className='flex justify-between items-center'>
          <h1 className="text-4xl font-medium">Order Info</h1>
          <button onClick={()=>{router.push('/orders')}} className="group transition font-medium flex items-center bg-orange-400 px-4 h-8 gap-1 rounded-md hover:bg-orange-300 hover:pl-3 duration-300">
            <img
              className="w-4 group-hover:mr-1"
              src="/left-arrow.svg"
              alt=""
            />
            Back
          </button>
        </div>
        <div className="grid grid-cols-12 mt-4 gap-y-4">
          <p className="font-semibold col-span-2">Customer's Order:</p>
          <p className="col-span-10">GA Bunko</p>
          <p className="font-semibold col-span-2">Order's Date:</p>
          <p className="col-span-10">some size here</p>
          <p className="font-semibold col-span-2">Order Price:</p>
          <p className="col-span-10 flex gap-4">1000000</p>
          <p className="font-semibold col-span-2">Is Delivered:</p>
          <p className="col-span-10">A number will appear</p>
        </div>
        <h1 className="text-4xl font-medium mt-6">Order List</h1>
        <TableContainer marginTop={6} overflowY="scroll" maxWidth="100%">
          <Table variant="simple" bgColor={"white"} overflowY={"scroll"}>
            <Thead position="sticky" top={0} bgColor="white">
              <Tr>
                <Th>ID</Th>
                <Th>PRODUCT NAME</Th>
                <Th>PRICE</Th>
                <Th>QUANTITY</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">SN0001</Td>
                <Td
                  className="cursor-pointer"
                  maxWidth="500px"
                  sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
                >
                  Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni
                  Sareteita Ken
                </Td>
                <Td className="cursor-pointer">97000</Td>
                <Td className="cursor-pointer">200</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </section>
  );
}

export default OrderDetail