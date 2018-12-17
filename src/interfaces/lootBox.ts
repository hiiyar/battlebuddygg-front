import { IIcon } from "./icons";

export interface IInventory {
  id: string;
  status: enLootBoxStatus;
  open_time?: string;
  server_time?: string;
  selected_item?: string;
  lootbox: ILootBox;
}

export interface ILootBox {
  id: string;
  name: string;
  items: IItems[];
  icons: IIcon[];
}

export interface IItems {
  id: string;
  name: string;
  icons: IIcon[];
}

export enum enLootBoxStatus {
  CLOSED = "CLOSED",
  OPENED = "CLOSED",
}
