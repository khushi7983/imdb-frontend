import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillHeart } from "react-icons/ai";


export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
         {/* <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300} alt='movie-Image' className='sm:roundede-t-lg group-hover:bg-opacity-80 transition duration-200 'style={{max-width: "100%", height:"auto"}}>
          </Image>  */}
          <Image 
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
          width={500} 
          height={300} 
          alt='movie-Image' 
          className='sm:rounded-t-lg group-hover:bg-opacity-80 transition duration-200'
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className='p-2'>
          <p>{result.overview.substring(0,40)}...</p>
          <h2 className='text-lg font-bold'>{result.title || result.name}</h2>
          <p className='flex items-center '>{result.first_air_date || result.release_date}
          <AiFillHeart className='text-red-500 ml-3 mr-1'/>{result.vote_count}</p>
        </div>
              
      </Link>
    </div>
  )
}
