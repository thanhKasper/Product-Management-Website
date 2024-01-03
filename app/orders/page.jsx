'use client'

import React from 'react'
import Sidebar from '@/components/sidebar';
import OrderSearchBar from '@/components/OrderSearchBar';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

const OrderPage = () => {
  return (
    <section className="flex bg-secondary-100">
      <Sidebar currentPage="Order" />
      <main className="px-8 py-4 grow flex flex-col h-screen">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-primary text-5xl">Orders</h1>
          <Button
            bgColor={"#FFD993"}
            _hover={{ bgColor: "#FFA67C" }}
            fontWeight={600}
            onClick={() => {
              router.push("/add-product");
            }}
          >
            Add Product
          </Button>
        </div>
        <OrderSearchBar />
        <TableContainer marginTop={6} overflowY="scroll" maxWidth="100%">
          <Table variant="simple" bgColor={"white"} overflowY={"scroll"}>
            <Thead position="sticky" top={0} bgColor="white">
              <Tr>
                <Th>RECEIVER</Th>
                <Th>ORDER DATE</Th>
                <Th>DELIVERY PRICE</Th>
                <Th>TOTAL PRICE</Th>
                <Th>PRODUCT ORDER QUANTITY</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">Kieu Tien Thanh</Td>
                <Td className="cursor-pointer">1/3/2024</Td>
                <Td className="cursor-pointer">15000</Td>
                <Td className="cursor-pointer">245000</Td>
                <Td className="cursor-pointer">4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </section>
  );
}

export default OrderPage