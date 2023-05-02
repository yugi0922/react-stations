// DO NOT DELETE

import * as React from 'react';
import './App.css';
import BreedsSelect from './BreedsSelect';
/**
 *
 * @type {React.FC}
 */
export const DogListContainer = () => {
  //犬種一覧
  const [breeds, setBreeds] = React.useState();
  //選択した犬種の保持
  const [selectedBreed, setSelectedBreed] = React.useState();
  //指定した犬種のURLリスト
  const [breedDogUrl, setBreedDogUrl] = React.useState();

  // 初期表示時にAPIから一覧を取得
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const keyArray = Object.keys(json.message);
        setBreeds(keyArray);
      });
  }, []);

  // リストの値が指定された時リストで指定された犬種の一覧を取得する
  const getSelectedBreed = () => {
    console.log('selectedBreed');
    console.log(selectedBreed);

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/1`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log('getSelectedBreed');
        console.log(json);
        setBreedDogUrl(json);
      });
  };

  // 選択した犬種の一覧イメージを表示
  var breedDogUrlList = [];
  breedDogUrlList = breedDogUrl;
  breedDogUrlList = breedDogUrlList?.map((dogUrl, index) => (
    <li key={index}>{<img src={dogUrl}></img>}</li>
  ));

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        setSelectedBreed={setSelectedBreed}
        selectedBreed={selectedBreed}
      />
      <button className="displayButton" onClick={getSelectedBreed}>
        表示
      </button>
      {breedDogUrlList}
      {/* <ul>
        {breedDogUrl.map((dogUrl, index) => (
          <li key={index}>{<img src={dogUrl}></img>}</li>
        ))}
      </ul> */}
    </>
  );
};

export default DogListContainer;
