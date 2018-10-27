import * as React from 'react';
import BoostUp from './boostUp';
import BuyBoost, { enBoost } from './buyBoost';
import { css } from 'emotion';

const boost = css`
  display: flex;
  justify-content: space-between;
  height: 315px;
`;

export default class Boost extends React.Component {

  public render() {
    return (
      <div className={boost}>
        <BoostUp />
        <BuyBoost
          boostType={enBoost.Bronze}
          price={10}
          matchesNumber={3}
          currencySymbol={'€'}
        />
        <BuyBoost
          boostType={enBoost.Silver}
          price={20}
          matchesNumber={3}
          currencySymbol={'€'}
        />
         <BuyBoost
          boostType={enBoost.Gold}
          price={30}
          matchesNumber={3}
          currencySymbol={'€'}
        />
      </div>
    )
  }
}
