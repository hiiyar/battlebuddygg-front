import * as React from "react";
import { css } from "emotion";
import Button from "../../shared/button";
import { ILootBox } from "../../../interfaces/lootBox";
import Modal from "../../shared/modal";
import LootBoxItems from "../lootBoxItems/index";
import Roulette from "../lootBoxItems/roulette/index";

export interface IProps {
  lootBox: ILootBox;
}

export interface IState {
  openLootBox: boolean;
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

export default class MyLootBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { openLootBox: false };
  }

  openLootBox = () => {
    this.setState({ openLootBox: true });
  };

  onClose = () => {
    this.setState({ openLootBox: false });
  };

  public render() {
    const { lootBox } = this.props;
    const { openLootBox } = this.state;

    return (
      <div className={myLootBox}>
        <div className={title}>{lootBox.name}</div>
        <img className={box} src={lootBox.icons[2].url} alt={lootBox.name} />
        <div className={button}>
          <Button style="bright" text="Claim" onClick={this.openLootBox.bind(this, true)} />
        </div>

        <Modal isShown={openLootBox} onClose={this.onClose}>
          <LootBoxItems />
          <Roulette />
        </Modal>
      </div>
    );
  }
}
