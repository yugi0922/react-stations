// DO NOT DELETE

import * as React from 'react';
import './App.css';
/**
 *
 * @type {React.FC}
 */
export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState();
  React.useEffect(() => {
    // console.log('effect実行');
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (json) {
        // const list = [];
        // for (const breed of json) {
        //   console.log(breed);
        //   list.push(<li>{breed}</li>);
        // }
        // console.log(json);
        //console.log(json.message);
        //setBreeds(json.message);
        //setBreeds([...breeds, json.message]);
        //console.log('↓breeds↓');
        //console.log(breeds);
        //console.log(json.message);
        setBreeds(json.message);
      });
  }, []);
  console.log('↓breeds↓');

  console.log(breeds);

  return <>{/* <ul>{breeds}</ul> */}</>;
};

export default DogListContainer;
