import * as React from "react";
import { css } from "emotion";
import Button from "../../shared/button";
import { ILootBox } from "../../../interfaces/lootBox";

export interface IProps {
  lootBox: ILootBox;
}

const myLootBox = css`
  background-color: #252e54;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const title = css`
  font-weight: 900;
  font-size: 1.1em;
`;

const box = css`
  margin-top: 30px;
  width: 45%;
`;

const button = css`
  position: relative;
  top: 45px;
`;

export default class MyLootBox extends React.Component<IProps> {
  public render() {
    const lootBox = this.props.lootBox.lootbox;

    return (
      <div className={myLootBox}>
        <div className={title}>{lootBox.name}</div>
        <img className={box} src="/static/images/lootBox/box.png" alt={lootBox.name} />
        <div className={button}>
          <Button style="bright" text="Claim" />
        </div>
      </div>
    );
  }
}
