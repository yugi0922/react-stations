// DO NOT DELETE

import * as React from 'react';
import './App.css';

/**
 *
 * @type {React.FC}
 */
export const BreedsSelect = props => {
  //   //セレクトで選択された値
  //   const [value, setValue] = React.useState();
  //ドロップボックスで選択された際のイベント
  const change = event => {
    // inputタグで入力された内容をセットする
    props.setSelectedBreed(event.target.value);
  };

  // オプションとして表示する初期表示リスト作成
  var listDog = [];
  listDog = props.breeds;
  listDog = listDog?.map(val => <option value={val}>{val}</option>);
  return (
    <>
      <select onChange={change} value={props.selectedBreed}>
        {listDog}
      </select>
    </>
  );
};

export default BreedsSelect;
