const API_KEY = process.env.API_KEY;
import React from 'react'
import Result from './components/Result';

export default async function page({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending' ;
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ?`/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}& language=en-US&page=1` ,{
    next:{revalidate:10000}
  }
    );
    const data = await res.json();
    if(!res.ok){
      throw new Error(`Failed to fetch Data`)
    }
    const results = data.results;
    // console.log(results);

  return (
    <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700  select-none transition-colors duration-300 min-h-screen'>
      <Result results={results} />
    </div>
  )
}



