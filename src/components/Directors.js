import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let allDirectors = () => {
    return directors.map(director => {
      return <div style={{ "padding": "20px" }}>
        {director.name}
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>

      </div>
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors()}
    </div>
  );
}

export default Directors
