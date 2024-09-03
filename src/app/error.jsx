"use client"
import React from 'react'
import { useEffect } from 'react'
export default function error({error,reset}) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className='text-center  text-gray-700 dark:text-gray-200 dark:bg-gray-700  select-none transition-colors duration-300 min-h-screen'>
      <h1>Something went wrong. Please try again later</h1>
      <button  className='hover:text-amber-600'  onClick={(() =>reset())}>Try Again</button>
    </div>
  )
}
