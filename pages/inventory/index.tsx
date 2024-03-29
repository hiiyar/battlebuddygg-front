import * as React from "react";
import Boost from "../../src/components/inventory/boost/index";
import LootBox from "../../src/components/inventory/lootBox/index";
import Navbar from "../../src/components/shared/navbar/index";
import { css } from "emotion";

const section = css`
  margin: 45px 0;
`;

export default class Index extends React.Component {
  public render() {
    return (
      <div>
        <Navbar />
        <div className={section}>
          <Boost />
        </div>
        <div className={section}>
          <LootBox />
        </div>
      </div>
    );
  }
}
