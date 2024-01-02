"use client";

import { Button } from "@chakra-ui/react";
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
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import ProductSearchBar from "@/components/ProductSearchBar";

const ProductPage = () => {
  const headerList = ["SSN", "Fullname", "Birth Date", "Gender", ""];

  return (
    <section className="flex bg-secondary-100">
      <Sidebar currentPage="Product" />
      <main className="px-8 py-4 grow flex flex-col h-screen">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-primary text-5xl">Products</h1>
          <Button
            bgColor={"#FFD993"}
            _hover={{ bgColor: "#FFA67C" }}
            fontWeight={600}
          >
            Add Product
          </Button>
        </div>
        <ProductSearchBar />
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
};

export default ProductPage;
