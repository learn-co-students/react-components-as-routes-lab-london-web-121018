import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const allDirectors = directors.map((director) => {
     return ( <div key={director.name}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map((movie) => <li>{movie}</li>)}
        </ul>
      </div>
     )
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
