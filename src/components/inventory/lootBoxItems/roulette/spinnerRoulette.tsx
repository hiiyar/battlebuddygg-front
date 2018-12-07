import * as React from "react";
import { css, keyframes } from "emotion";
import lootBoxService from "../../../../services/lootBoxService";
import { IItems } from "../../../../interfaces/lootBox";

interface IProps {
  spinRoulette: boolean;
}

interface IState {
  rouletteItems: IItems[];
}

const itemWidth = 200;
const numberItems = 50;

const spinRouletteAnimation = keyframes`
  from {
    transform: translate(4500px);
  }

  to {
    transform: translate(-4500px);
  }
`;

const wrapper = css`
  max-height: 200px;
`;

const roulette = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: inset 0px 0px 28px 0px rgba(0, 0, 0, 0.4);
  background-color: #161935;
`;

const rouletteContainer = css`
  background-color: transparent;
  height: 200px;
  width: 1954px;
  min-width: ${numberItems * itemWidth}px;
  max-width: ${numberItems * itemWidth}px;
  overflow: hidden;
  position: relative;
  transform: translate(4500px);
`;

const rouletteContent = css`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const rouletteItem = css`
  width: ${itemWidth}px;
  height: 100%;
  margin: 10px 0;
  background-color: transparent;
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  transition: background-image 0.3s;
  align-items: center;
`;

const rouletteItemImage = css`
  width: 100%;
  height: auto;
`;

const spinRouletteAction = css`
  animation: ${spinRouletteAnimation} 8000ms cubic-bezier(0, 0, 0.28, 1) forwards;
`;

const rouletteIndicator = css`
  width: 4px;
  height: 200px;
  background-image: linear-gradient(52deg, #75ebd6 8%, #0093e9 100%);
  margin: auto;
  bottom: 200px;
  position: relative;
`;

export default class SpinnerRoulette extends React.Component<IProps, IState> {
  componentDidMount() {
    lootBoxService.getRouletteItems().subscribe((rouletteItems: IItems[]) => {
      this.setState({ rouletteItems });
    });
  }

  public render() {
    const { spinRoulette } = this.props;

    if (!this.state) {
      return null;
    }

    const { rouletteItems } = this.state;

    return (
      <div className={wrapper}>
        <div className={roulette}>
          <div className={`${rouletteContainer} ${spinRoulette ? spinRouletteAction : ""}`}>
            <div className={rouletteContent}>
              {rouletteItems.map((item: IItems) => (
                <div className={rouletteItem}>
                  <img className={rouletteItemImage} src={item.icons[2].url} title={item.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={rouletteIndicator} />
      </div>
    );
  }
}
