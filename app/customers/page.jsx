"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import CustomerSearchBar from "../../components/CustomerSearchBar";
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

const CustomerPage = () => {
  return (
    <section className="flex bg-secondary-100">
      <Sidebar currentPage="Customer" />
      <main className="px-8 py-4 grow flex flex-col h-screen">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-primary text-5xl">Customers</h1>
        </div>
        <CustomerSearchBar />
        <TableContainer marginTop={6} overflowY="scroll" maxWidth="100%">
          <Table variant="simple" bgColor={"white"} overflowY={"scroll"}>
            <Thead position="sticky" top={0} bgColor="white">
              <Tr>
                <Th>CUSTOMER ID</Th>
                <Th>CUSTOMER NAME</Th>
                <Th>CUSTOMER EMAIL</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="hover:bg-slate-300 cursor-pointer">
                <Td className="cursor-pointer">US0001</Td>
                <Td>Kieu Tien Thanh</Td>
                <Td>
                  myemail@email.com
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </section>
  );
};

export default CustomerPage;
