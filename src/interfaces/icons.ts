export interface IIcon {
  name: string;
  type: enType;
  extension: string;
  url: string;
}

export enum enType {
  MOBILE = "mobile",
  SMALL = "small",
  MEDIUM = "medium",
}
