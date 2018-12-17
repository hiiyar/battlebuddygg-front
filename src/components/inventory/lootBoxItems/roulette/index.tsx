import * as React from "react";
import { css } from "emotion";
import Button from "../../../shared/button";
import SpinnerRoulette from "./spinnerRoulette";
import lootBoxService from "../../../../services/lootBoxService";
import { IInventory } from "../../../../interfaces/lootBox";

interface IState {
  spinRoulette: boolean;
}

interface IProps {
  inventory: IInventory;
  onComplete: Function;
}

const getItem = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const roullete = css`
  width: 78%;
`;

const buttonGo = css`
  width: 18%;
`;

export default class Roulette extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { spinRoulette: false };
  }

  spinRoulette = () => {
    this.setState({ spinRoulette: true });

    setTimeout(() => {
      this.props.onComplete();
    }, 9000);
  };

  public render() {
    const { spinRoulette } = this.state;

    return (
      <div className={getItem}>
        <div className={roullete}>
          <SpinnerRoulette spinRoulette={spinRoulette} />
        </div>
        <div className={buttonGo}>
          <Button text="GO" onClick={this.spinRoulette.bind(this)} />
        </div>
      </div>
    );
  }
}
