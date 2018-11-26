import * as React from "react";
import LootBoxItem from "./item";
import { css } from "emotion";

const lootBoxItems = css`
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  justify-items: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 1%;
  margin: 40px 0;
`;

export default class LootBoxItems extends React.Component {
  public render() {
    return (
      <div className={lootBoxItems}>
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
        <LootBoxItem />
      </div>
    );
  }
}
