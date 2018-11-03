import * as React from "react";
import { css } from "emotion";
import Button from "../../shared/button";
import { IBoost } from "../../../interfaces/boost";

export interface IProps {
  boost: IBoost;
}

const buyBoost = css`
  border: 4px solid #252e54;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const title = css`
  font-size: 1.85em;
  font-weight: 900;
  padding: 8px 0;
  text-transform: uppercase;
`;

const matches = css`
  font-size: 1em;
  font-weight: 900;
  text-transform: uppercase;
`;

const buyButton = css`
  padding: 20px 0;
`;

const buyBoostIconWrapper = css`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

export default class BuyBoost extends React.Component<IProps> {
  public render() {
    const { boost } = this.props;

    return (
      <div className={buyBoost}>
        <div className={buyBoostIconWrapper}>
          <img
            src={`/static/images/boost/${boost.icon.name}.${boost.icon.extension}`}
            alt={boost.name}
          />
        </div>
        <div className={title}>{boost.name}</div>
        <div className={matches}>{boost.matches} matches</div>
        <div className={buyButton}>
          <Button
            style="outlined"
            text={new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
              boost.value
            )}
          />
        </div>
      </div>
    );
  }
}
