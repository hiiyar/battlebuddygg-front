import * as React from 'react';
import { IPlayer } from '../src/interfaces/integration';
import playerService from '../src/services/player';

export interface IProps {
  player: IPlayer;
}

export default class Index extends React.Component<IProps, {}> {

  static async getInitialProps() {
    const player = await playerService.get();
    return { player };
  }

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    playerService.setPlayer(this.props.player);
  }

  public isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  public render() {
    const { player } = this.props;

    if (!player) {
      return null;
    }

    return (
      <div>
        <h1>BattleBuddy.gg</h1>
        <p><b>Name:</b> {player.name}</p>
        <p><b>Player Name (PUBG):</b> {player.integrations!.pubg!.playerName}</p>
        <p><b>Total Kills:</b> {player.integrations!.pubg!.summary!.totalKills}</p>
        <p><b>Total Wins:</b> {player.integrations!.pubg!.summary!.totalWins}</p>
        <p><b>Total Loses:</b> {player.integrations!.pubg!.summary!.totalLoses}</p>
        <br/>
        <br/>
        <small>Rendering by: {this.isClientOrServer()}</small>
      </div>
    )
  }
}
