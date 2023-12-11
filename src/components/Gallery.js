import React from 'react';
import { sculptureList } from '../data/data';

const Gallery = () => {
  let index = 0;
  console.log("Gallery: index: " + index);

  function handleClick() {
    index = index + 1;
    console.log("handleClick: index: " + index);
  }

  let sculpture = sculptureList[index];
  
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export default Gallery;