import React from 'react';
import { actors } from '../data';
import Actor from './Actor';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <Actor actor={actor}/>
      )}
    </div>
  );
};

export default Actors;
