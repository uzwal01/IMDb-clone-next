const API_KEY = process.env.API_KEY;

import Results from '@/components/Results';
import React from 'react'

async function page({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,
      {next: {revalidate: 10000}}
  )
  const data = await response.json();
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }
  const results = data.results;
  console.log(results);
  
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}

export default page
