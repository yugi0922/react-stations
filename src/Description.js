// DO NOT DELETE

import * as React from 'react';
import './App.css';
import DogImage from './DogImage';
/**
 *
 * @type {React.FC}
 */
export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1155.jpg',
  );

  async function changeImg() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        console.log(json.message);
        setDogUrl(json.message);
      });
  }
  return (
    <>
      <div>
        <p>犬の画像を表示するサイトです</p>
      </div>
      <button onClick={changeImg}>更新</button>
      <DogImage url={dogUrl} />
    </>
  );
};

export default Description;
