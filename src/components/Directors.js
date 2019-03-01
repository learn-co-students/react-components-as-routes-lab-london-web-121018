import React from 'react';
import { directors } from '../data';
import Director from './Director';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <Director director={director}/>
      )}
    </div>
  );
}

export default Directors
