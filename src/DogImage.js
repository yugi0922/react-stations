// DO NOT DELETE

import * as React from 'react';
import './App.css';

/**
 *
 * @type {React.FC}
 */
export const DogImage = props => {
  return (
    <>
      <div>
        <img src={props.url} alt="" />
      </div>
    </>
  );
};

export default DogImage;
