import Image from 'next/image'
import React from 'react'
import { AiFillHeart } from "react-icons/ai";



const MoviePage =  async ({params}) => {
  const movieId = params.id
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
  const movie = await res.json()
  return (
    <div className='  text-gray-700 dark:text-gray-200 dark:bg-gray-700  select-none transition-colors duration-300 min-h-screen pt-8'>
      <div className='w-full pl-5 pr-5 '>
         <div className='p-16 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5x mx-15 md:space-x-5'>
         <Image 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
          width={500} 
          height={300} 
          alt='movie-Image' 
          className='rounded-lg'
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className='p-5'>
         <h2 className='text-lg mb-3'>{movie.title || movie.name}</h2>
         <p className='mb-3 text-lg '>
          <span className='font-semibold mr-1'>Overview :</span>{movie.overview}
         </p>
         <p className='p-2 items-center flex'>
         <span className='font-semibold mr-1'>Release Date :</span>
          {movie.first_air_date || movie.release_date}
          </p>
         <p className=' p-2 items-center flex  '>
          <span className='font-semibold mr-1'>Rating :</span>
          <AiFillHeart className='text-red-500 ml-3 mr-1 justify-center'/>{movie.vote_count}</p>
        </div>

         </div>
      </div>
    </div>
  )
}

export default MoviePage
