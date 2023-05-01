// DO NOT DELETE

import * as React from 'react';
import './App.css';
import Header from './Header';
/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1155.jpg',
  );

  // function changeImg() {
  //   setDogUrl(
  //     'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3326.jpg',
  //   );
  //   get();
  // }

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
        //var ps = JSON.parse(json.message);
        //console.log(ps);
        // for (const data of json) {
        //   console.log(`${data.message}` + `${data.status}`);
        // }
      });
  }
  return (
    <>
      <Header></Header>
      <div>
        <p>犬の画像を表示するサイトです</p>
      </div>
      <div>
        <img src={dogUrl} alt="" />
      </div>
      <button onClick={changeImg}>更新</button>
    </>
  );
};
