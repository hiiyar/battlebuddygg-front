import { IIcon } from "./icons";

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
