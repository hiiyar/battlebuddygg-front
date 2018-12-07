import * as React from "react";
import { css } from "emotion";
import { IItems } from "../../../interfaces/lootBox";

interface IProps {
  item: IItems;
}

const item = css`
  border: 4px solid #5a638a;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const itemIconWrapper = css`
  img {
    width: 100%;
  }
`;

export default class LootBoxItem extends React.Component<IProps> {
  public render() {
    return (
      <div className={item}>
        <div className={itemIconWrapper}>
          <img src={this.props.item.icons[2].url} />
        </div>
      </div>
    );
  }
}
