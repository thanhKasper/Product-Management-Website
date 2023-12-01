'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";


export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col">
      <nav className="bg-secondary-300 px-10 flex justify-between items-center py-3">
        <div className="flex gap-16 items-center">
          <p className="text-primary text-3xl font-semibold">Imouto Store</p>
          <Link href="./products" className="font-semibold text-xl">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="./login" className="font-semibold text-xl">
            Sign In
          </Link>
          <Link href="./" className="font-semibold text-xl">
            Sign Up
          </Link>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center grow bg-cover bg-[url('/imouto_store.jpg')] bg-center">
        <h1 className="text-white font-semibold w-3/4 text-center text-5xl">
          Dream of Otakus
        </h1>
        <p className="text-white w-3/4 text-center text-base mt-6">
          Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus placerat
          vivamus pellentesque maecenas natoque. Enim pellentesque et faucibus
          mauris.
        </p>
        <Link href="/products" className="px-4 py-2 rounded-lg bg-accent2-200 hover:bg-accent2-100 text-white font-semibold text-1xl mt-8">
          Get Started
        </Link>
      </main>
    </div>
  );
}
