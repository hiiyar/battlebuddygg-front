import * as React from "react";
import { css } from "emotion";

const boostUp = css`
  background: url("/static/images/boost/boostbox.png") no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 275px;
`;

const title = css`
  font-size: 1.85em;
  color: #dee1f1;
  font-weight: 900;
  padding: 8px 0;
`;

export default class BoostUp extends React.Component {
  public render() {
    return (
      <div className={boostUp}>
        <img src="/static/images/boost/boostup.png" alt="Boost Up" width={149} height={147} />
        <div className={title}>BOOST UP!</div>
      </div>
    );
  }
}
