export interface ILootBox {
  lootbox: {
    id: string;
    name: string;
    items: IItems[];
  };
}

export interface IItems {
  item: {
    id: string;
    name: string;
  };
}
