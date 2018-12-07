import * as React from "react";
import LootBoxItem from "./item";
import { css } from "emotion";
import { IItems } from "../../../interfaces/lootBox";

interface IProps {
  items: IItems[];
}

const lootBoxItems = css`
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  justify-items: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 1%;
  margin: 40px 0;
`;

export default class LootBoxItems extends React.Component<IProps> {
  public render() {
    return (
      <div className={lootBoxItems}>
        {this.props.items.map((item: IItems, index: number) => (
          <LootBoxItem item={item} key={index} />
        ))}
      </div>
    );
  }
}
