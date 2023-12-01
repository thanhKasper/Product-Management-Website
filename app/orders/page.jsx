import React from 'react'
import ShowList from '@/components/ShowList'
import Link from 'next/link';

const OrderPage = () => {
  return (
    <ShowList headerList={["Order ID"]} currentPage="Order">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl">ORDER LIST</h1>
        <Link
          href="/"
          className="bg-accent2-200 hover:bg-accent2-100 px-6 py-2 font-semibold text-white rounded-xl"
        >
          Create Order
        </Link>
      </div>
    </ShowList>
  );
}

export default OrderPage