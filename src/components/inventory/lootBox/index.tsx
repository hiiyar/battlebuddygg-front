import * as React from 'react';
import { css } from 'emotion';
import MyLootBox from './myLootBox';

const header = css`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 30px;
  }
`;

const lootBox = css`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;

export default class LootBox extends React.Component {

  public render() {
    return (
      <div>
        <div className={header}>
          <img src='/static/images/lootBox/lootBoxIcon.svg'/>
          <h1>Your Loot Box</h1>
        </div>
        <div className={lootBox}>
          <MyLootBox />
          <MyLootBox />
          <MyLootBox />
          <MyLootBox />
          <MyLootBox />
        </div>
      </div>
    )
  }
}
