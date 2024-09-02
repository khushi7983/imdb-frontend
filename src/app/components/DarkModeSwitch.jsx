'use client' ;
import React, { useEffect } from 'react'
import { MdLightMode , MdDarkMode} from "react-icons/md";
import { useTheme } from 'next-themes';
import { useState } from 'react';
export default function DarkModeSwitch() {
  const {theme , setTheme , systemTheme } = useTheme()
  const [mounted , setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme ;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {  currentTheme === 'dark' ? (
        <MdLightMode onClick={()=> setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/> ): (
        <MdDarkMode  onClick={()=> setTheme('dark')}   className='text-xl cursor-pointer hover:text-amber-500'/> )
      }
    </div>
  )
}



