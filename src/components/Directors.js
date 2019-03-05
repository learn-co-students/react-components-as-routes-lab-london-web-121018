import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div className= 'directorlist'>
    <h1>Directors Page</h1>
    {directors.map((director, idx)=>{
        return( 
        <div key={idx}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        {director.movies.map((movie, idx)=>{return <li key={idx}>{movie}</li>})}
        </div>)
      })}
    </div>
  );
}

export default Directors

// {
//   name: 'Scott Derrickson',
//   movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
// }