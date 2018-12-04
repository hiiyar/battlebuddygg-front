import { IIcon } from "./icons";

export interface IBoost {
  readonly id: string;
  name: string;
  value: number;
  matches: number;
  index: number;
  icons: IIcon[];
}
