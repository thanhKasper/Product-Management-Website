"use client";

import Sidebar from "../../../components/sidebar";
import { Button } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { useRouter, useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductDetail = () => {
  const router = useRouter();
  const [info, setInfo] = useState(null);
  const params = useParams();

  const fetchData = async () => {
    try {
      if (params.productId.indexOf("LN") != -1) {
        const response = await axios.get(
          `http://localhost:8000/book/${params.productId}`,
          {
            withCredentials: true,
            /*  headers: {
          Authorization: `Bearer ${token}`,
        },*/
          }
        );
        setInfo(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:8000/figure/${params.productId}`,
          {
            withCredentials: true,
            /*  headers: {
          Authorization: `Bearer ${token}`,
        },*/
          }
        );
        setInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteProducts = async () => {
    try {
      if (params.productId.indexOf("LN") != -1) {
        const response = await axios.delete(
          `http://localhost:8000/book/${params.productId}`
        );
        console.log(response.data);
      } else {
        const response = await axios.delete(
          `http://localhost:8000/figure/${params.productId}`
        );
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(info);
  const checkGenreorType = (info) => {
    if (info.genre) {
      return info.genre;
    }
    if (info.type) return info.type;
    return [];
  };

  return (
    <section className="w-full flex">
      <Sidebar currentPage="Product" />
      <main className="flex-grow px-8 py-4 bg-secondary-100">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">{info && info.name}</h1>
          <button
            onClick={() => {
              router.push("/products");
            }}
            className="group transition font-medium flex items-center bg-orange-400 px-4 h-8 gap-1 rounded-md hover:bg-orange-300 hover:pl-3 duration-300"
          >
            <img
              className="w-4 group-hover:mr-1"
              src="/left-arrow.svg"
              alt=""
            />
            Back
          </button>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-y-4">
          <p className="font-semibold">Provider:</p>
          <p className="col-span-11">{info && info.provider.name}</p>
          <p className="font-semibold">Size:</p>
          <p className="col-span-11">{info && info.size}</p>
          <p className="font-semibold">Genre/Type:</p>
          <div className="col-span-11 flex gap-4">
            {info && info.genre ? (
              info.genre.map((val, key) => (
                <Tag size="lg" key={key}>
                  {val}
                </Tag>
              ))
            ) : (
              <Tag size="lg">{info && info.type}</Tag>
            )}
          </div>
          <p className="font-semibold">Quantity:</p>
          <p className="col-span-11">{info && info.product_count}</p>
        </div>
        <Button
          className="mt-4"
          colorScheme="yellow"
          onClick={() => router.push(`/products/${info.id}/edit`)}
        >
          Edit
        </Button>
        <Button
          className="ml-4 mt-4"
          colorScheme="red"
          onClick={deleteProducts}
        >
          Delete
        </Button>
      </main>
    </section>
  );
};

export default ProductDetail;
