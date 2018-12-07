import { IIcon } from "./icons";

export interface IInventory {
  id: string;
  open_time?: string;
  server_time?: string;
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
