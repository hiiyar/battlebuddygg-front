import * as React from "react";
import { css } from "emotion";
import MyLootBox from "./myLootBox";
import { Query } from "react-apollo";
import lootBoxesQuery from "../../../../graphql/lootBoxesbyUser";
import { ILootBox } from "../../../interfaces/lootBox";

const header = css`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 30px;
  }
`;

const lootBox = css`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  justify-items: center;
  align-items: center;
  row-gap: 55px;
  column-gap: 1%;
  margin: 40px 0;
`;

export default class LootBox extends React.Component {
  public render() {
    return (
      <div>
        <div className={header}>
          <img src="/static/images/lootBox/lootBoxIcon.svg" />
          <h1>Your Loot Box</h1>
        </div>
        <div className={lootBox}>
          <Query query={lootBoxesQuery} variables={{ id: "#1" }}>
            {({ loading, error, data }) => {
              if (loading) return "loading...";

              if (error) return `Error! ${error}`;

              return data.user.lootboxes.map((lootBox: ILootBox) => (
                <div>
                  <MyLootBox lootBox={lootBox} />
                </div>
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}
