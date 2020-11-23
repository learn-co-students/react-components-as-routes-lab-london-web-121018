import React from 'react';
import { directors } from '../data';


const renderDirector = (director) => {
  return (
    <div>
    <h3 style={{ display: 'inline' }}>{director.name}</h3> 
    <ul>
    {director.movies.map(movie => <li>{movie}</li>)}
    </ul>
    <hr />
    </div>
    );
  } 

const renderDirectors = directors.map( renderDirector )
  
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors
