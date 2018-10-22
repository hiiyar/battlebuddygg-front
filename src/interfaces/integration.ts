export interface IPlayer {
  _id?: string;
  name?: string;
  integrations?: IIntegrations;
}

export interface IIntegrations {
  pubg?: IPUBG;
}

export interface IPUBG {
  playerName?: string;
  summary?: IPUBGSummary;
}

export interface IPUBGSummary {
  lastMatch?: { id?: string };
  totalKills?: number;
  totalWins?: number;
  totalLoses?: number;
}