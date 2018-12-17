import * as React from "react";
import { css } from "emotion";
import Button from "../../shared/button";
import Modal from "../../shared/modal";
import LootBoxItems from "../lootBoxItems/index";
import Roulette from "../lootBoxItems/roulette/index";
import lootBoxService from "../../../services/lootBoxService";
import rxjsOperators from "../../../rxjs-operators";
import { IInventory } from "../../../interfaces/lootBox";
import { IItems } from "../../../interfaces/lootBox";

export interface IProps {
  inventory: IInventory;
}

export interface IState {
  canOpenLootBox: boolean;
  openLootBox: boolean;
  showSelectedItem: boolean;
  selectedItem: IItems;
  timer: string;
}

const myLootBox = css`
  background-color: #252e54;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const title = css`
  font-weight: 900;
  font-size: 1.1em;
`;

const box = css`
  margin-top: 30px;
  width: 45%;
`;

const button = css`
  position: relative;
  top: 45px;
`;

const selectedItem = css`
  button {
    width: 100%;
    margin: 30px 0 0;
    padding: 20px;
  }
`;

export default class MyLootBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      openLootBox: false,
      timer: null,
      canOpenLootBox: false,
      showSelectedItem: false,
      selectedItem: null,
    };
  }

  componentDidMount() {
    const { inventory } = this.props;

    let serverTime: Date = new Date(inventory.server_time);
    const openTime: Date = new Date(inventory.open_time);

    // Tests
    // let serverTime: Date = new Date();
    // const openTime: Date = new Date(new Date().setMilliseconds(10000));

    const interval = setInterval(() => {
      const difference: number = openTime.getTime() - serverTime.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.setState({
        timer: `${days > 0 ? days + "d" : ""}
        ${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`,
      });

      if (difference < 0) {
        clearInterval(interval);
        this.setState({
          timer: "Claim",
          canOpenLootBox: true,
        });
      }

      serverTime = new Date(serverTime.setMilliseconds(1000));
    }, 1000);
  }

  showLootBox = () => {
    const { canOpenLootBox } = this.state;

    if (canOpenLootBox) {
      lootBoxService
        .loadRouletteItems(this.props.inventory.id)
        .pipe(rxjsOperators.loader())
        .subscribe(() => {
          this.setState({ openLootBox: true });
        });
    }
  };

  onClose = () => {
    this.setState({
      openLootBox: false,
      showSelectedItem: false,
    });
  };

  openLootBox = () => {
    lootBoxService
      .openLootBox(this.props.inventory.id)
      .pipe(
        rxjsOperators.take(1),
        rxjsOperators.loader()
      )
      .subscribe(() => {
        this.onClose;
      });
  };

  showSelectedItem = (selectedItemId: string) => {
    const selectedItem = this.props.inventory.lootbox.items.find(
      item => item.id === selectedItemId
    );
    this.setState({ showSelectedItem: true, selectedItem });
  };

  public render() {
    const { inventory } = this.props;
    const { openLootBox, timer } = this.state;

    return (
      <div className={myLootBox}>
        <div className={title}>{inventory.lootbox.name}</div>
        <img className={box} src={inventory.lootbox.icons[2].url} alt={inventory.lootbox.name} />
        <div className={button}>
          <Button style="bright" text={timer} onClick={this.showLootBox.bind(this, true)} />
        </div>

        <Modal
          isShown={openLootBox}
          onClose={this.onClose}
          title={
            this.state.showSelectedItem
              ? `You got ${this.state.selectedItem.name}`
              : "BattleBuddy Loot"
          }
          width={this.state.showSelectedItem ? "30%" : "80%"}
          padding={this.state.showSelectedItem ? "0 5% 1%" : ""}
        >
          {!this.state.showSelectedItem ? (
            <div>
              <LootBoxItems items={inventory.lootbox.items} />
              <Roulette
                inventory={inventory}
                onComplete={this.showSelectedItem.bind(this, inventory.selected_item)}
              />
            </div>
          ) : (
            <div className={selectedItem}>
              <img src={this.state.selectedItem.icons[2].url} alt={this.state.selectedItem.name} />
              <Button style="bright" text="Ok" onClick={this.openLootBox} />
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
