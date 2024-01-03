"use client";

import Link from "next/link";
import { Button, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <>
      <nav className="bg-primary px-10 flex justify-between items-center py-3">
        <div className="flex gap-16 items-center">
          <p className="text-secondary-100 text-3xl font-semibold">L&F Store</p>
          <Link
            href="./products"
            className="text-secondary-100 font-semibold text-xl"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Button
            onClick={() => {
              router.push("/login");
            }}
            bgColor={"#F0A824"}
            _hover={{ bgColor: "#FFD993" }}
          >
            Sign In
          </Button>
        </div>
      </nav>
      <main className="bg-secondary-100 w-full h-[calc(100vh-64px)] flex items-center">
        <form
          action=""
          className="bg-secondary-200 w-1/4 h-fit mx-auto flex flex-col items-center px-10 pt-4 pb-7 rounded-lg"
        >
          <h1 className="text-5xl font-bold">Login</h1>
          <FormControl className="mt-10">
            <FormLabel>Username</FormLabel>
            <Input type="text" bgColor="white" required/>
          </FormControl>
          <FormControl className="mt-4">
            <FormLabel>Password</FormLabel>
            <Input type="password" bgColor="white" required />
          </FormControl>
          <Button className="w-full mt-16">Login</Button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
