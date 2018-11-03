export interface IBoost {
  readonly id: string;
  name: string;
  value: number;
  matches: number;
  order: number;
  icon: IIcon;
}

export interface IIcon {
  name: string;
  extension: string;
}
