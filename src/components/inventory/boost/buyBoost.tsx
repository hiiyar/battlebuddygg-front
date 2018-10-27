import * as React from 'react';
import { css } from 'emotion';
import Button from '../../shared/button';

export interface IProps {
  boostType: enBoost;
  price: number;
  matchesNumber: number;
  currencySymbol: string;
}

export enum enBoost {
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze'
}

const boostUp = css`
  border: 4px solid #252E54;
  border-radius: 9%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
`;

const title = css`
  font-size: 1.85em;
  color: #FFF;
  font-weight: 900;
  padding: 8px 0;
  text-transform: uppercase;
`;

const matches = css`
  font-size: 1em;
  color: #FFF;
  font-weight: 900;
  text-transform: uppercase;
`;

const buyButton = css`
  padding: 20px 0;
`;

export default class BuyBoost extends React.Component<IProps> {
  public render() {
    const { boostType, matchesNumber, currencySymbol, price } = this.props;

    return (
      <div className={boostUp}>
        <img src={`/static/images/boost/${boostType}.png`} alt='Boost Up'/>
        <div className={title}>{boostType}</div>
        <div className={matches}>{matchesNumber} matches</div>
        <div className={buyButton}>
          <Button
            style='outlined'
            text={currencySymbol + price}
          />
        </div>
      </div>
    )
  }
}
