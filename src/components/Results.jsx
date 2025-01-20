import React from 'react'
import Card from './Card'

function Results({results}) {
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto py-4 gap-4'>
      {
        results.map((result)=> (
         <Card key={result.id} result={result}/> 
        ))
      }
    </div>
    </>
    
  )
}

export default Results
