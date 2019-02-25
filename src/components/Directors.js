import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       <h1>Directors Page</h1>
      {directors.map(director =>
      <div><h1>Name: {director.name}</h1>
      <h2>Movies:</h2>
      {director.movies.map(movie => 
        <h3>{movie}</h3>)}
      </div>)}
    </div>
      
  );
}

export default Directors
