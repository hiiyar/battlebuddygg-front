import * as React from "react";
import { css } from "emotion";
import Button from "../../shared/button";

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

export default class MyLootBox extends React.Component {
  public render() {
    return (
      <div className={myLootBox}>
        <div className={title}>Loot Box #1</div>
        <img
          className={box}
          src="/static/images/lootBox/box.png"
          alt="Loot Box"
          width={100}
          height={91}
        />
        <div className={button}>
          <Button style="bright" text="Claim" />
        </div>
      </div>
    );
  }
}
