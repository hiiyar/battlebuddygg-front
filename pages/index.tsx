import * as React from 'react';

export default class Index extends React.Component {
  public isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  public render() {
    return (
      <div>
        <h1>BattleBuddy.gg</h1>
        <p>Rendering by: <b>{this.isClientOrServer()}</b></p>
      </div>
    )
  }
}
