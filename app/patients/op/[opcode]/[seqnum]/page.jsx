'use client'

import React from 'react'
import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import HospitalTable from '@/components/HospitalTable'

const OutPatientPage = () => {
  const [navActive, setnavActive] = useState('Patient')
  const headerList = ['Medication Code', 'Name', 'Price', '']
  return (
    <section className='flex '>
      <Sidebar curNav={navActive} onSetActive={setnavActive} />
      <div className='w-full px-8 pt-6'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-5xl text-primary'>
            Examination Details
          </h1>
          <button className='flex items-center gap-3 bg-secondary px-4 rounded-full font-semibold text-white h-fit py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 448 512'
            >
              <path
                fill='white'
                d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
              />
            </svg>
            Back
          </button>
        </div>
        {/* Main section of the inpatient */}
        <main className='flex justify-between mt-4'>
          <div className='grid gap-x-10 grid-cols-2'>
            <p className='font-semibold'>OPCode:</p>
            <p>123456789</p>
            <p className='font-semibold'>Date:</p>
            <p>12/12/2023</p>
            <p className='font-semibold'>Re-examination Date:</p>
            <p>12/12/2023</p>
            <p className='font-semibold'>Diagnosis:</p>
            <p>Trĩ</p>
            <p className='font-semibold'>Fee:</p>
            <p>1,000,000VND</p>
          </div>
          <div className='flex flex-col'>
            <div className='grid gap-x-3 grid-cols-2 h-fit'>
              <p className='font-semibold'>Doctor Name:</p>
              <p>Nguyen Thi C</p>
              <p className='font-semibold'>Doctor Code:</p>
              <p>123456789</p>
            </div>
            <button className='flex gap-3 items-center bg-secondary font-semibold text-white px-5 py-1 mt-2 rounded-full w-fit'>
              See Doctor Detail
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 448 512'
              >
                <path
                  fill='white'
                  d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
                />
              </svg>
            </button>
          </div>
        </main>
        <h2 className='text-4xl font-bold mt-4'>Medications</h2>
        <HospitalTable headerList={headerList} />
      </div>
    </section>
  )
}

export default OutPatientPage
