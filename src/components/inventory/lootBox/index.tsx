import * as React from "react";
import { css } from "emotion";
import MyLootBox from "./myLootBox";
import { Query } from "react-apollo";
import authService from "../../../services/auth";
import { IUser } from "../../../interfaces/user";
import { IInventory, enLootBoxStatus } from "../../../interfaces/lootBox";
import lootBoxesbyUser from "../../../../graphql/queries/lootBoxesbyUser";

interface IState {
  userId: string;
}

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

const lootBoxContainer = css`
  width: 100%;
`;

export default class LootBox extends React.Component<{}, IState> {
  componentDidMount() {
    authService.getUser().subscribe((user: IUser) => {
      this.setState({ userId: user.id });
    });
  }

  public render() {
    if (!this.state) {
      return null;
    }

    const { userId } = this.state;

    return (
      <div>
        <div className={header}>
          <img src="/static/images/lootBox/lootBoxIcon.svg" />
          <h1>Your Loot Box</h1>
        </div>
        <div className={lootBox}>
          <Query query={lootBoxesbyUser} variables={{ userId }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading loot boxes...</div>;

              if (error) return `Error! ${error}`;

              return data.user.inventory
                .filter((inventory: IInventory) => inventory.status === enLootBoxStatus.CLOSED)
                .map((inventory: IInventory, index: number) => (
                  <div className={lootBoxContainer} key={index}>
                    <MyLootBox inventory={inventory} key={index} />
                  </div>
                ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}
