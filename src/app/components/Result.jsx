import React from 'react'

export default function Result( {results} ) {
  return (
    <div>
      {
        results && results.map((result) =>(
          <div key={result.id}>
            <h2>{result.original_title}</h2>
            </div>
        ))
      }
    </div>
  );
}
