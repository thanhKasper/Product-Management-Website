"use client";

import React, { useState, useEffect } from "react";
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
import axios from "axios";
const CustomerPage = () => {
  const [info, setInfo] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/other/customers`,
        {
          withCredentials: true,
          /*  headers: {
          Authorization: `Bearer ${token}`,
        },*/
        }
      );

      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(info);
  return (
    <section className="flex bg-secondary-100">
      <Sidebar currentPage="Customer" />
      <main className="px-8 py-4 grow flex flex-col h-screen">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-primary text-5xl">Customers</h1>
        </div>
        <CustomerSearchBar />
        {info && (
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
                {info.map((val, key) => (
                  <Tr className="hover:bg-slate-300 cursor-pointer" key={key}>
                    <Td className="cursor-pointer">{val.id}</Td>
                    <Td>{val.Cname}</Td>
                    <Td>{val.Email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </main>
    </section>
  );
};

export default CustomerPage;
