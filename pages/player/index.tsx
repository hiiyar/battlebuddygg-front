import * as React from 'react';

class Index extends React.Component {
  public isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  public render() {
    return (
      <div>
        <h1>Player Home</h1>
      </div>
    )
  }
}

export default Index;