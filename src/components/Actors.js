import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className= 'actorlist'>
    <h1>Actors Page</h1>
      {actors.map((actor, idx)=>{
        return( 
        <div key={idx}>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        {actor.movies.map((movie, idx)=>{return <li key={idx}>{movie}</li>})}
        </div>)
      })}
    </div>
  );
};

export default Actors;

// {
//   name: 'Benedict Cumberbatch',
//   movies: ['Doctor Strange', 'The Imitation Game', 'Black Mass']
// }