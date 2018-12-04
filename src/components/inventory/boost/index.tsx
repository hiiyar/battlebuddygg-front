import * as React from "react";
import BoostUp from "./boostUp";
import BuyBoost from "./buyBoost";
import { css } from "emotion";
import boostQuery from "../../../../graphql/boost";
import { Query } from "react-apollo";
import { IBoost } from "../../../interfaces/boost";

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

        <Query query={boostQuery}>
          {({ loading, error, data }) => {
            if (loading) return "loading...";

            if (error) return `Error! ${error}`;

            data.boosts.sort((a: IBoost, b: IBoost) => a.index - b.index);

            return data.boosts.map((boost: IBoost, index: number) => (
              <BuyBoost key={index} boost={boost} />
            ));
          }}
        </Query>
      </div>
    );
  }
}
