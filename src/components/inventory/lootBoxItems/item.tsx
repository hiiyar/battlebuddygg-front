import * as React from "react";
import { css } from "emotion";

const item = css`
  border: 4px solid #5a638a;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const itemIconWrapper = css`
  img {
    width: 100%;
  }
`;

export default class LootBoxItem extends React.Component {
  public render() {
    return (
      <div className={item}>
        <div className={itemIconWrapper}>
          <img src="https://vignette.wikia.nocookie.net/howtoprogram/images/f/f6/Icon-cube-orange.png/revision/latest?cb=20130428014631" />
        </div>
      </div>
    );
  }
}
